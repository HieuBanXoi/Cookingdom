var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2082 = root || request.c( 'UnityEngine.JointSpring' )
  var i2083 = data
  i2082.spring = i2083[0]
  i2082.damper = i2083[1]
  i2082.targetPosition = i2083[2]
  return i2082
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2084 = root || request.c( 'UnityEngine.JointMotor' )
  var i2085 = data
  i2084.m_TargetVelocity = i2085[0]
  i2084.m_Force = i2085[1]
  i2084.m_FreeSpin = i2085[2]
  return i2084
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.JointLimits' )
  var i2087 = data
  i2086.m_Min = i2087[0]
  i2086.m_Max = i2087[1]
  i2086.m_Bounciness = i2087[2]
  i2086.m_BounceMinVelocity = i2087[3]
  i2086.m_ContactDistance = i2087[4]
  i2086.minBounce = i2087[5]
  i2086.maxBounce = i2087[6]
  return i2086
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2088 = root || request.c( 'UnityEngine.JointDrive' )
  var i2089 = data
  i2088.m_PositionSpring = i2089[0]
  i2088.m_PositionDamper = i2089[1]
  i2088.m_MaximumForce = i2089[2]
  i2088.m_UseAcceleration = i2089[3]
  return i2088
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2090 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2091 = data
  i2090.m_Spring = i2091[0]
  i2090.m_Damper = i2091[1]
  return i2090
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2092 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2093 = data
  i2092.m_Limit = i2093[0]
  i2092.m_Bounciness = i2093[1]
  i2092.m_ContactDistance = i2093[2]
  return i2092
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2094 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2095 = data
  i2094.m_ExtremumSlip = i2095[0]
  i2094.m_ExtremumValue = i2095[1]
  i2094.m_AsymptoteSlip = i2095[2]
  i2094.m_AsymptoteValue = i2095[3]
  i2094.m_Stiffness = i2095[4]
  return i2094
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2096 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2097 = data
  i2096.m_LowerAngle = i2097[0]
  i2096.m_UpperAngle = i2097[1]
  return i2096
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2098 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2099 = data
  i2098.m_MotorSpeed = i2099[0]
  i2098.m_MaximumMotorTorque = i2099[1]
  return i2098
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2100 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2101 = data
  i2100.m_DampingRatio = i2101[0]
  i2100.m_Frequency = i2101[1]
  i2100.m_Angle = i2101[2]
  return i2100
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2102 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2103 = data
  i2102.m_LowerTranslation = i2103[0]
  i2102.m_UpperTranslation = i2103[1]
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2104 = root || new pc.UnityMaterial()
  var i2105 = data
  i2104.name = i2105[0]
  request.r(i2105[1], i2105[2], 0, i2104, 'shader')
  i2104.renderQueue = i2105[3]
  i2104.enableInstancing = !!i2105[4]
  var i2107 = i2105[5]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2107[i + 0]) );
  }
  i2104.floatParameters = i2106
  var i2109 = i2105[6]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2109[i + 0]) );
  }
  i2104.colorParameters = i2108
  var i2111 = i2105[7]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2111[i + 0]) );
  }
  i2104.vectorParameters = i2110
  var i2113 = i2105[8]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2113[i + 0]) );
  }
  i2104.textureParameters = i2112
  var i2115 = i2105[9]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2115[i + 0]) );
  }
  i2104.materialFlags = i2114
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2119 = data
  i2118.name = i2119[0]
  i2118.value = i2119[1]
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2123 = data
  i2122.name = i2123[0]
  i2122.value = new pc.Color(i2123[1], i2123[2], i2123[3], i2123[4])
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2127 = data
  i2126.name = i2127[0]
  i2126.value = new pc.Vec4( i2127[1], i2127[2], i2127[3], i2127[4] )
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2131 = data
  i2130.name = i2131[0]
  request.r(i2131[1], i2131[2], 0, i2130, 'value')
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2135 = data
  i2134.name = i2135[0]
  i2134.enabled = !!i2135[1]
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2137 = data
  i2136.name = i2137[0]
  i2136.width = i2137[1]
  i2136.height = i2137[2]
  i2136.mipmapCount = i2137[3]
  i2136.anisoLevel = i2137[4]
  i2136.filterMode = i2137[5]
  i2136.hdr = !!i2137[6]
  i2136.format = i2137[7]
  i2136.wrapMode = i2137[8]
  i2136.alphaIsTransparency = !!i2137[9]
  i2136.alphaSource = i2137[10]
  i2136.graphicsFormat = i2137[11]
  i2136.sRGBTexture = !!i2137[12]
  i2136.desiredColorSpace = i2137[13]
  i2136.wrapU = i2137[14]
  i2136.wrapV = i2137[15]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2139 = data
  i2138.position = new pc.Vec3( i2139[0], i2139[1], i2139[2] )
  i2138.scale = new pc.Vec3( i2139[3], i2139[4], i2139[5] )
  i2138.rotation = new pc.Quat(i2139[6], i2139[7], i2139[8], i2139[9])
  return i2138
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i2140 = root || request.c( 'HeartEffect' )
  var i2141 = data
  i2140.defaultLifeTime = i2141[0]
  request.r(i2141[1], i2141[2], 0, i2140, 'tf')
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2143 = data
  i2142.color = new pc.Color(i2143[0], i2143[1], i2143[2], i2143[3])
  request.r(i2143[4], i2143[5], 0, i2142, 'sprite')
  i2142.flipX = !!i2143[6]
  i2142.flipY = !!i2143[7]
  i2142.drawMode = i2143[8]
  i2142.size = new pc.Vec2( i2143[9], i2143[10] )
  i2142.tileMode = i2143[11]
  i2142.adaptiveModeThreshold = i2143[12]
  i2142.maskInteraction = i2143[13]
  i2142.spriteSortPoint = i2143[14]
  i2142.enabled = !!i2143[15]
  request.r(i2143[16], i2143[17], 0, i2142, 'sharedMaterial')
  var i2145 = i2143[18]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 2) {
  request.r(i2145[i + 0], i2145[i + 1], 2, i2144, '')
  }
  i2142.sharedMaterials = i2144
  i2142.receiveShadows = !!i2143[19]
  i2142.shadowCastingMode = i2143[20]
  i2142.sortingLayerID = i2143[21]
  i2142.sortingOrder = i2143[22]
  i2142.lightmapIndex = i2143[23]
  i2142.lightmapSceneIndex = i2143[24]
  i2142.lightmapScaleOffset = new pc.Vec4( i2143[25], i2143[26], i2143[27], i2143[28] )
  i2142.lightProbeUsage = i2143[29]
  i2142.reflectionProbeUsage = i2143[30]
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2149 = data
  i2148.name = i2149[0]
  i2148.tagId = i2149[1]
  i2148.enabled = !!i2149[2]
  i2148.isStatic = !!i2149[3]
  i2148.layer = i2149[4]
  return i2148
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i2150 = root || request.c( 'HeartBreakEffect' )
  var i2151 = data
  i2150.defaultLifeTime = i2151[0]
  request.r(i2151[1], i2151[2], 0, i2150, 'tf')
  return i2150
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i2152 = root || request.c( 'BlinkEffect' )
  var i2153 = data
  request.r(i2153[0], i2153[1], 0, i2152, 'tf')
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2155 = data
  request.r(i2155[0], i2155[1], 0, i2154, 'mesh')
  i2154.meshCount = i2155[2]
  i2154.activeVertexStreamsCount = i2155[3]
  i2154.alignment = i2155[4]
  i2154.renderMode = i2155[5]
  i2154.sortMode = i2155[6]
  i2154.lengthScale = i2155[7]
  i2154.velocityScale = i2155[8]
  i2154.cameraVelocityScale = i2155[9]
  i2154.normalDirection = i2155[10]
  i2154.sortingFudge = i2155[11]
  i2154.minParticleSize = i2155[12]
  i2154.maxParticleSize = i2155[13]
  i2154.pivot = new pc.Vec3( i2155[14], i2155[15], i2155[16] )
  request.r(i2155[17], i2155[18], 0, i2154, 'trailMaterial')
  i2154.applyActiveColorSpace = !!i2155[19]
  i2154.enabled = !!i2155[20]
  request.r(i2155[21], i2155[22], 0, i2154, 'sharedMaterial')
  var i2157 = i2155[23]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 2) {
  request.r(i2157[i + 0], i2157[i + 1], 2, i2156, '')
  }
  i2154.sharedMaterials = i2156
  i2154.receiveShadows = !!i2155[24]
  i2154.shadowCastingMode = i2155[25]
  i2154.sortingLayerID = i2155[26]
  i2154.sortingOrder = i2155[27]
  i2154.lightmapIndex = i2155[28]
  i2154.lightmapSceneIndex = i2155[29]
  i2154.lightmapScaleOffset = new pc.Vec4( i2155[30], i2155[31], i2155[32], i2155[33] )
  i2154.lightProbeUsage = i2155[34]
  i2154.reflectionProbeUsage = i2155[35]
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2159 = data
  i2158.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2159[0], i2158.main)
  i2158.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2159[1], i2158.colorBySpeed)
  i2158.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2159[2], i2158.colorOverLifetime)
  i2158.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2159[3], i2158.emission)
  i2158.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2159[4], i2158.rotationBySpeed)
  i2158.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2159[5], i2158.rotationOverLifetime)
  i2158.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2159[6], i2158.shape)
  i2158.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2159[7], i2158.sizeBySpeed)
  i2158.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2159[8], i2158.sizeOverLifetime)
  i2158.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2159[9], i2158.textureSheetAnimation)
  i2158.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2159[10], i2158.velocityOverLifetime)
  i2158.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2159[11], i2158.noise)
  i2158.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2159[12], i2158.inheritVelocity)
  i2158.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2159[13], i2158.forceOverLifetime)
  i2158.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2159[14], i2158.limitVelocityOverLifetime)
  i2158.useAutoRandomSeed = !!i2159[15]
  i2158.randomSeed = i2159[16]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2160 = root || new pc.ParticleSystemMain()
  var i2161 = data
  i2160.duration = i2161[0]
  i2160.loop = !!i2161[1]
  i2160.prewarm = !!i2161[2]
  i2160.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2161[3], i2160.startDelay)
  i2160.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2161[4], i2160.startLifetime)
  i2160.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2161[5], i2160.startSpeed)
  i2160.startSize3D = !!i2161[6]
  i2160.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2161[7], i2160.startSizeX)
  i2160.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2161[8], i2160.startSizeY)
  i2160.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2161[9], i2160.startSizeZ)
  i2160.startRotation3D = !!i2161[10]
  i2160.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2161[11], i2160.startRotationX)
  i2160.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2161[12], i2160.startRotationY)
  i2160.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2161[13], i2160.startRotationZ)
  i2160.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2161[14], i2160.startColor)
  i2160.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2161[15], i2160.gravityModifier)
  i2160.simulationSpace = i2161[16]
  request.r(i2161[17], i2161[18], 0, i2160, 'customSimulationSpace')
  i2160.simulationSpeed = i2161[19]
  i2160.useUnscaledTime = !!i2161[20]
  i2160.scalingMode = i2161[21]
  i2160.playOnAwake = !!i2161[22]
  i2160.maxParticles = i2161[23]
  i2160.emitterVelocityMode = i2161[24]
  i2160.stopAction = i2161[25]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2162 = root || new pc.MinMaxCurve()
  var i2163 = data
  i2162.mode = i2163[0]
  i2162.curveMin = new pc.AnimationCurve( { keys_flow: i2163[1] } )
  i2162.curveMax = new pc.AnimationCurve( { keys_flow: i2163[2] } )
  i2162.curveMultiplier = i2163[3]
  i2162.constantMin = i2163[4]
  i2162.constantMax = i2163[5]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2164 = root || new pc.MinMaxGradient()
  var i2165 = data
  i2164.mode = i2165[0]
  i2164.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2165[1], i2164.gradientMin)
  i2164.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2165[2], i2164.gradientMax)
  i2164.colorMin = new pc.Color(i2165[3], i2165[4], i2165[5], i2165[6])
  i2164.colorMax = new pc.Color(i2165[7], i2165[8], i2165[9], i2165[10])
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2167 = data
  i2166.mode = i2167[0]
  var i2169 = i2167[1]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2169[i + 0]) );
  }
  i2166.colorKeys = i2168
  var i2171 = i2167[2]
  var i2170 = []
  for(var i = 0; i < i2171.length; i += 1) {
    i2170.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2171[i + 0]) );
  }
  i2166.alphaKeys = i2170
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2172 = root || new pc.ParticleSystemColorBySpeed()
  var i2173 = data
  i2172.enabled = !!i2173[0]
  i2172.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2173[1], i2172.color)
  i2172.range = new pc.Vec2( i2173[2], i2173[3] )
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2177 = data
  i2176.color = new pc.Color(i2177[0], i2177[1], i2177[2], i2177[3])
  i2176.time = i2177[4]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2181 = data
  i2180.alpha = i2181[0]
  i2180.time = i2181[1]
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2182 = root || new pc.ParticleSystemColorOverLifetime()
  var i2183 = data
  i2182.enabled = !!i2183[0]
  i2182.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2183[1], i2182.color)
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2184 = root || new pc.ParticleSystemEmitter()
  var i2185 = data
  i2184.enabled = !!i2185[0]
  i2184.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[1], i2184.rateOverTime)
  i2184.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[2], i2184.rateOverDistance)
  var i2187 = i2185[3]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2187[i + 0]) );
  }
  i2184.bursts = i2186
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2190 = root || new pc.ParticleSystemBurst()
  var i2191 = data
  i2190.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2191[0], i2190.count)
  i2190.cycleCount = i2191[1]
  i2190.minCount = i2191[2]
  i2190.maxCount = i2191[3]
  i2190.repeatInterval = i2191[4]
  i2190.time = i2191[5]
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2192 = root || new pc.ParticleSystemRotationBySpeed()
  var i2193 = data
  i2192.enabled = !!i2193[0]
  i2192.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2193[1], i2192.x)
  i2192.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2193[2], i2192.y)
  i2192.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2193[3], i2192.z)
  i2192.separateAxes = !!i2193[4]
  i2192.range = new pc.Vec2( i2193[5], i2193[6] )
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2194 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2195 = data
  i2194.enabled = !!i2195[0]
  i2194.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[1], i2194.x)
  i2194.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[2], i2194.y)
  i2194.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[3], i2194.z)
  i2194.separateAxes = !!i2195[4]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2196 = root || new pc.ParticleSystemShape()
  var i2197 = data
  i2196.enabled = !!i2197[0]
  i2196.shapeType = i2197[1]
  i2196.randomDirectionAmount = i2197[2]
  i2196.sphericalDirectionAmount = i2197[3]
  i2196.randomPositionAmount = i2197[4]
  i2196.alignToDirection = !!i2197[5]
  i2196.radius = i2197[6]
  i2196.radiusMode = i2197[7]
  i2196.radiusSpread = i2197[8]
  i2196.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[9], i2196.radiusSpeed)
  i2196.radiusThickness = i2197[10]
  i2196.angle = i2197[11]
  i2196.length = i2197[12]
  i2196.boxThickness = new pc.Vec3( i2197[13], i2197[14], i2197[15] )
  i2196.meshShapeType = i2197[16]
  request.r(i2197[17], i2197[18], 0, i2196, 'mesh')
  request.r(i2197[19], i2197[20], 0, i2196, 'meshRenderer')
  request.r(i2197[21], i2197[22], 0, i2196, 'skinnedMeshRenderer')
  i2196.useMeshMaterialIndex = !!i2197[23]
  i2196.meshMaterialIndex = i2197[24]
  i2196.useMeshColors = !!i2197[25]
  i2196.normalOffset = i2197[26]
  i2196.arc = i2197[27]
  i2196.arcMode = i2197[28]
  i2196.arcSpread = i2197[29]
  i2196.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[30], i2196.arcSpeed)
  i2196.donutRadius = i2197[31]
  i2196.position = new pc.Vec3( i2197[32], i2197[33], i2197[34] )
  i2196.rotation = new pc.Vec3( i2197[35], i2197[36], i2197[37] )
  i2196.scale = new pc.Vec3( i2197[38], i2197[39], i2197[40] )
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2198 = root || new pc.ParticleSystemSizeBySpeed()
  var i2199 = data
  i2198.enabled = !!i2199[0]
  i2198.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[1], i2198.x)
  i2198.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[2], i2198.y)
  i2198.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[3], i2198.z)
  i2198.separateAxes = !!i2199[4]
  i2198.range = new pc.Vec2( i2199[5], i2199[6] )
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2200 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2201 = data
  i2200.enabled = !!i2201[0]
  i2200.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[1], i2200.x)
  i2200.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[2], i2200.y)
  i2200.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[3], i2200.z)
  i2200.separateAxes = !!i2201[4]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2202 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2203 = data
  i2202.enabled = !!i2203[0]
  i2202.mode = i2203[1]
  i2202.animation = i2203[2]
  i2202.numTilesX = i2203[3]
  i2202.numTilesY = i2203[4]
  i2202.useRandomRow = !!i2203[5]
  i2202.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[6], i2202.frameOverTime)
  i2202.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[7], i2202.startFrame)
  i2202.cycleCount = i2203[8]
  i2202.rowIndex = i2203[9]
  i2202.flipU = i2203[10]
  i2202.flipV = i2203[11]
  i2202.spriteCount = i2203[12]
  var i2205 = i2203[13]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 2) {
  request.r(i2205[i + 0], i2205[i + 1], 2, i2204, '')
  }
  i2202.sprites = i2204
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2208 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2209 = data
  i2208.enabled = !!i2209[0]
  i2208.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[1], i2208.x)
  i2208.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[2], i2208.y)
  i2208.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[3], i2208.z)
  i2208.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[4], i2208.radial)
  i2208.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[5], i2208.speedModifier)
  i2208.space = i2209[6]
  i2208.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[7], i2208.orbitalX)
  i2208.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[8], i2208.orbitalY)
  i2208.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[9], i2208.orbitalZ)
  i2208.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[10], i2208.orbitalOffsetX)
  i2208.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[11], i2208.orbitalOffsetY)
  i2208.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[12], i2208.orbitalOffsetZ)
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2210 = root || new pc.ParticleSystemNoise()
  var i2211 = data
  i2210.enabled = !!i2211[0]
  i2210.separateAxes = !!i2211[1]
  i2210.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[2], i2210.strengthX)
  i2210.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[3], i2210.strengthY)
  i2210.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[4], i2210.strengthZ)
  i2210.frequency = i2211[5]
  i2210.damping = !!i2211[6]
  i2210.octaveCount = i2211[7]
  i2210.octaveMultiplier = i2211[8]
  i2210.octaveScale = i2211[9]
  i2210.quality = i2211[10]
  i2210.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[11], i2210.scrollSpeed)
  i2210.scrollSpeedMultiplier = i2211[12]
  i2210.remapEnabled = !!i2211[13]
  i2210.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[14], i2210.remapX)
  i2210.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[15], i2210.remapY)
  i2210.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[16], i2210.remapZ)
  i2210.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[17], i2210.positionAmount)
  i2210.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[18], i2210.rotationAmount)
  i2210.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[19], i2210.sizeAmount)
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2212 = root || new pc.ParticleSystemInheritVelocity()
  var i2213 = data
  i2212.enabled = !!i2213[0]
  i2212.mode = i2213[1]
  i2212.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[2], i2212.curve)
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2214 = root || new pc.ParticleSystemForceOverLifetime()
  var i2215 = data
  i2214.enabled = !!i2215[0]
  i2214.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[1], i2214.x)
  i2214.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[2], i2214.y)
  i2214.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[3], i2214.z)
  i2214.space = i2215[4]
  i2214.randomized = !!i2215[5]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2216 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2217 = data
  i2216.enabled = !!i2217[0]
  i2216.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2217[1], i2216.limit)
  i2216.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2217[2], i2216.limitX)
  i2216.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2217[3], i2216.limitY)
  i2216.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2217[4], i2216.limitZ)
  i2216.dampen = i2217[5]
  i2216.separateAxes = !!i2217[6]
  i2216.space = i2217[7]
  i2216.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2217[8], i2216.drag)
  i2216.multiplyDragByParticleSize = !!i2217[9]
  i2216.multiplyDragByParticleVelocity = !!i2217[10]
  return i2216
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i2218 = root || request.c( 'StarExploreFX' )
  var i2219 = data
  request.r(i2219[0], i2219[1], 0, i2218, 'tf')
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2221 = data
  i2220.pivot = new pc.Vec2( i2221[0], i2221[1] )
  i2220.anchorMin = new pc.Vec2( i2221[2], i2221[3] )
  i2220.anchorMax = new pc.Vec2( i2221[4], i2221[5] )
  i2220.sizeDelta = new pc.Vec2( i2221[6], i2221[7] )
  i2220.anchoredPosition3D = new pc.Vec3( i2221[8], i2221[9], i2221[10] )
  i2220.rotation = new pc.Quat(i2221[11], i2221[12], i2221[13], i2221[14])
  i2220.scale = new pc.Vec3( i2221[15], i2221[16], i2221[17] )
  return i2220
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i2222 = root || request.c( 'ClockTimer' )
  var i2223 = data
  request.r(i2223[0], i2223[1], 0, i2222, 'fillImage')
  request.r(i2223[2], i2223[3], 0, i2222, 'tf')
  i2222.spawnZoomDuration = i2223[4]
  i2222.despawnZoomDuration = i2223[5]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2225 = data
  i2224.cullTransparentMesh = !!i2225[0]
  return i2224
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2226 = root || request.c( 'UnityEngine.UI.Image' )
  var i2227 = data
  request.r(i2227[0], i2227[1], 0, i2226, 'm_Sprite')
  i2226.m_Type = i2227[2]
  i2226.m_PreserveAspect = !!i2227[3]
  i2226.m_FillCenter = !!i2227[4]
  i2226.m_FillMethod = i2227[5]
  i2226.m_FillAmount = i2227[6]
  i2226.m_FillClockwise = !!i2227[7]
  i2226.m_FillOrigin = i2227[8]
  i2226.m_UseSpriteMesh = !!i2227[9]
  i2226.m_PixelsPerUnitMultiplier = i2227[10]
  request.r(i2227[11], i2227[12], 0, i2226, 'm_Material')
  i2226.m_Maskable = !!i2227[13]
  i2226.m_Color = new pc.Color(i2227[14], i2227[15], i2227[16], i2227[17])
  i2226.m_RaycastTarget = !!i2227[18]
  i2226.m_RaycastPadding = new pc.Vec4( i2227[19], i2227[20], i2227[21], i2227[22] )
  return i2226
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i2228 = root || request.c( 'WaterSplash' )
  var i2229 = data
  request.r(i2229[0], i2229[1], 0, i2228, 'tf')
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2231 = data
  i2230.center = new pc.Vec3( i2231[0], i2231[1], i2231[2] )
  i2230.radius = i2231[3]
  i2230.enabled = !!i2231[4]
  i2230.isTrigger = !!i2231[5]
  request.r(i2231[6], i2231[7], 0, i2230, 'material')
  return i2230
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i2232 = root || request.c( 'ItemDraggable' )
  var i2233 = data
  i2232.isDraggable = !!i2233[0]
  request.r(i2233[1], i2233[2], 0, i2232, 'returnTransform')
  i2232.setParentToReturnTransform = !!i2233[3]
  i2232.returnToStartOnDragFailed = !!i2233[4]
  i2232.returnToExactReturnTransformPosition = !!i2233[5]
  i2232.targetItemType = i2233[6]
  request.r(i2233[7], i2233[8], 0, i2232, 'item')
  i2232.checkState = !!i2233[9]
  request.r(i2233[10], i2233[11], 0, i2232, 'shadowObject')
  i2232.playReturnToStartFinishSound = !!i2233[12]
  i2232.returnToStartFinishFxType = i2233[13]
  i2232.spawnBreakHeartOnDropFail = !!i2233[14]
  i2232.playBeginDragSound = !!i2233[15]
  i2232.beginDragFxType = i2233[16]
  i2232.liftOffset = i2233[17]
  i2232.dragScaleMultiplier = i2233[18]
  i2232.dragScaleDuration = i2233[19]
  i2232.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i2233[20], i2232.onBeginDrag)
  i2232.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i2233[21], i2232.onDropSuccess)
  i2232.onDropFail = request.d('UnityEngine.Events.UnityEvent', i2233[22], i2232.onDropFail)
  i2232.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i2233[23], i2232.onReturnToStartComplete)
  return i2232
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2234 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2235 = data
  i2234.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2235[0], i2234.m_PersistentCalls)
  return i2234
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2236 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2237 = data
  var i2239 = i2237[0]
  var i2238 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.add(request.d('UnityEngine.Events.PersistentCall', i2239[i + 0]));
  }
  i2236.m_Calls = i2238
  return i2236
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2242 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2243 = data
  request.r(i2243[0], i2243[1], 0, i2242, 'm_Target')
  i2242.m_TargetAssemblyTypeName = i2243[2]
  i2242.m_MethodName = i2243[3]
  i2242.m_Mode = i2243[4]
  i2242.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2243[5], i2242.m_Arguments)
  i2242.m_CallState = i2243[6]
  return i2242
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2244 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2245 = data
  request.r(i2245[0], i2245[1], 0, i2244, 'm_ObjectArgument')
  i2244.m_ObjectArgumentAssemblyTypeName = i2245[2]
  i2244.m_IntArgument = i2245[3]
  i2244.m_FloatArgument = i2245[4]
  i2244.m_StringArgument = i2245[5]
  i2244.m_BoolArgument = !!i2245[6]
  return i2244
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i2246 = root || request.c( 'ItemMoveToTarget' )
  var i2247 = data
  request.r(i2247[0], i2247[1], 0, i2246, 'defaultTarget')
  i2246.duration = i2247[2]
  i2246.useAnimationCurve = !!i2247[3]
  i2246.moveCurve = new pc.AnimationCurve( { keys_flow: i2247[4] } )
  i2246.easeType = i2247[5]
  i2246.moveType = i2247[6]
  i2246.jumpPower = i2247[7]
  i2246.numJumps = i2247[8]
  i2246.rotate360DuringJump = !!i2247[9]
  i2246.flipRotate = !!i2247[10]
  i2246.angleRotate = i2247[11]
  i2246.scaleOnMove = !!i2247[12]
  i2246.endScaleMultiplier = i2247[13]
  i2246.setParentToTarget = !!i2247[14]
  i2246.onComplete = request.d('UnityEngine.Events.UnityEvent', i2247[15], i2246.onComplete)
  i2246.lockInputWhileMoving = !!i2247[16]
  i2246.resetParentBeforeMove = !!i2247[17]
  return i2246
}

Deserializers["Paper"] = function (request, data, root) {
  var i2248 = root || request.c( 'Paper' )
  var i2249 = data
  i2248.isUse = !!i2249[0]
  request.r(i2249[1], i2249[2], 0, i2248, 'paper')
  request.r(i2249[3], i2249[4], 0, i2248, 'paperTrash')
  request.r(i2249[5], i2249[6], 0, i2248, 'itemDragRaycastTarget')
  request.r(i2249[7], i2249[8], 0, i2248, 'curentCollider')
  i2248.isDone = !!i2249[9]
  i2248.onProcess = !!i2249[10]
  i2248.requireMatchingTargetTypeForHandTut = !!i2249[11]
  request.r(i2249[12], i2249[13], 0, i2248, 'itemDraggable')
  request.r(i2249[14], i2249[15], 0, i2248, 'itemClickable')
  request.r(i2249[16], i2249[17], 0, i2248, 'itemStirring')
  request.r(i2249[18], i2249[19], 0, i2248, 'itemKnifeSpriteMaskCutter')
  request.r(i2249[20], i2249[21], 0, i2248, 'itemSpriteMaskPainter')
  request.r(i2249[22], i2249[23], 0, i2248, 'itemDragSpriteMaskPainter')
  request.r(i2249[24], i2249[25], 0, i2248, 'itemMoveToTarget')
  request.r(i2249[26], i2249[27], 0, i2248, 'animator')
  i2248.itemType = i2249[28]
  request.r(i2249[29], i2249[30], 0, i2248, 'spriteRenderer')
  i2248.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2249[31], i2248.onKnifeIn)
  request.r(i2249[32], i2249[33], 0, i2248, 'knifePos')
  i2248.heartEffectScale = i2249[34]
  i2248.breakHeartEffectScale = i2249[35]
  i2248.blinkEffectScale = i2249[36]
  i2248.mergeEffectScale = i2249[37]
  i2248.playMoveToTargetFinishSound = !!i2249[38]
  i2248.moveToTargetFinishFxType = i2249[39]
  i2248.fxSpawnZPos = i2249[40]
  request.r(i2249[41], i2249[42], 0, i2248, 'tf')
  return i2248
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i2250 = root || request.c( 'ItemDragRaycastTarget' )
  var i2251 = data
  i2250.targetToFind = i2251[0]
  i2250.targetItemTypeWhenHit = i2251[1]
  i2250.targetItemTypeOnDropFail = i2251[2]
  request.r(i2251[3], i2251[4], 0, i2250, 'raycastPoint')
  i2250.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2251[5] )
  i2250.rayDistance = i2251[6]
  i2250.updateMoveDefaultTarget = !!i2251[7]
  i2250.invokeOnlyWhenTargetChanged = !!i2251[8]
  i2250.targetChangeEnabled = !!i2251[9]
  i2250.restoreTargetOnDropFail = !!i2251[10]
  i2250.resetCurrentTargetOnNoHit = !!i2251[11]
  i2250.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i2251[12], i2250.onTargetFound)
  i2250.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i2251[13], i2250.onTargetFoundWithItem)
  return i2250
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i2252 = root || request.c( 'ItemRaycastTargetEvent' )
  var i2253 = data
  i2252.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2253[0], i2252.m_PersistentCalls)
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2255 = data
  request.r(i2255[0], i2255[1], 0, i2254, 'animatorController')
  request.r(i2255[2], i2255[3], 0, i2254, 'avatar')
  i2254.updateMode = i2255[4]
  i2254.hasTransformHierarchy = !!i2255[5]
  i2254.applyRootMotion = !!i2255[6]
  var i2257 = i2255[7]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 2) {
  request.r(i2257[i + 0], i2257[i + 1], 2, i2256, '')
  }
  i2254.humanBones = i2256
  i2254.enabled = !!i2255[8]
  return i2254
}

Deserializers["ItemSound"] = function (request, data, root) {
  var i2260 = root || request.c( 'ItemSound' )
  var i2261 = data
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2263 = data
  i2262.name = i2263[0]
  i2262.index = i2263[1]
  i2262.startup = !!i2263[2]
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2265 = data
  i2264.planeDistance = i2265[0]
  i2264.referencePixelsPerUnit = i2265[1]
  i2264.isFallbackOverlay = !!i2265[2]
  i2264.renderMode = i2265[3]
  i2264.renderOrder = i2265[4]
  i2264.sortingLayerName = i2265[5]
  i2264.sortingOrder = i2265[6]
  i2264.scaleFactor = i2265[7]
  request.r(i2265[8], i2265[9], 0, i2264, 'worldCamera')
  i2264.overrideSorting = !!i2265[10]
  i2264.pixelPerfect = !!i2265[11]
  i2264.targetDisplay = i2265[12]
  i2264.overridePixelPerfect = !!i2265[13]
  i2264.enabled = !!i2265[14]
  return i2264
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2266 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2267 = data
  i2266.m_UiScaleMode = i2267[0]
  i2266.m_ReferencePixelsPerUnit = i2267[1]
  i2266.m_ScaleFactor = i2267[2]
  i2266.m_ReferenceResolution = new pc.Vec2( i2267[3], i2267[4] )
  i2266.m_ScreenMatchMode = i2267[5]
  i2266.m_MatchWidthOrHeight = i2267[6]
  i2266.m_PhysicalUnit = i2267[7]
  i2266.m_FallbackScreenDPI = i2267[8]
  i2266.m_DefaultSpriteDPI = i2267[9]
  i2266.m_DynamicPixelsPerUnit = i2267[10]
  i2266.m_PresetInfoIsWorld = !!i2267[11]
  return i2266
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2269 = data
  i2268.m_IgnoreReversedGraphics = !!i2269[0]
  i2268.m_BlockingObjects = i2269[1]
  i2268.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2269[2] )
  return i2268
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2270 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2271 = data
  i2270.m_hasFontAssetChanged = !!i2271[0]
  request.r(i2271[1], i2271[2], 0, i2270, 'm_baseMaterial')
  i2270.m_maskOffset = new pc.Vec4( i2271[3], i2271[4], i2271[5], i2271[6] )
  i2270.m_text = i2271[7]
  i2270.m_isRightToLeft = !!i2271[8]
  request.r(i2271[9], i2271[10], 0, i2270, 'm_fontAsset')
  request.r(i2271[11], i2271[12], 0, i2270, 'm_sharedMaterial')
  var i2273 = i2271[13]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 2) {
  request.r(i2273[i + 0], i2273[i + 1], 2, i2272, '')
  }
  i2270.m_fontSharedMaterials = i2272
  request.r(i2271[14], i2271[15], 0, i2270, 'm_fontMaterial')
  var i2275 = i2271[16]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 2) {
  request.r(i2275[i + 0], i2275[i + 1], 2, i2274, '')
  }
  i2270.m_fontMaterials = i2274
  i2270.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2271[17], i2271[18], i2271[19], i2271[20])
  i2270.m_fontColor = new pc.Color(i2271[21], i2271[22], i2271[23], i2271[24])
  i2270.m_enableVertexGradient = !!i2271[25]
  i2270.m_colorMode = i2271[26]
  i2270.m_fontColorGradient = request.d('TMPro.VertexGradient', i2271[27], i2270.m_fontColorGradient)
  request.r(i2271[28], i2271[29], 0, i2270, 'm_fontColorGradientPreset')
  request.r(i2271[30], i2271[31], 0, i2270, 'm_spriteAsset')
  i2270.m_tintAllSprites = !!i2271[32]
  request.r(i2271[33], i2271[34], 0, i2270, 'm_StyleSheet')
  i2270.m_TextStyleHashCode = i2271[35]
  i2270.m_overrideHtmlColors = !!i2271[36]
  i2270.m_faceColor = UnityEngine.Color32.ConstructColor(i2271[37], i2271[38], i2271[39], i2271[40])
  i2270.m_fontSize = i2271[41]
  i2270.m_fontSizeBase = i2271[42]
  i2270.m_fontWeight = i2271[43]
  i2270.m_enableAutoSizing = !!i2271[44]
  i2270.m_fontSizeMin = i2271[45]
  i2270.m_fontSizeMax = i2271[46]
  i2270.m_fontStyle = i2271[47]
  i2270.m_HorizontalAlignment = i2271[48]
  i2270.m_VerticalAlignment = i2271[49]
  i2270.m_textAlignment = i2271[50]
  i2270.m_characterSpacing = i2271[51]
  i2270.m_wordSpacing = i2271[52]
  i2270.m_lineSpacing = i2271[53]
  i2270.m_lineSpacingMax = i2271[54]
  i2270.m_paragraphSpacing = i2271[55]
  i2270.m_charWidthMaxAdj = i2271[56]
  i2270.m_TextWrappingMode = i2271[57]
  i2270.m_wordWrappingRatios = i2271[58]
  i2270.m_overflowMode = i2271[59]
  request.r(i2271[60], i2271[61], 0, i2270, 'm_linkedTextComponent')
  request.r(i2271[62], i2271[63], 0, i2270, 'parentLinkedComponent')
  i2270.m_enableKerning = !!i2271[64]
  var i2277 = i2271[65]
  var i2276 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2277.length; i += 1) {
    i2276.add(i2277[i + 0]);
  }
  i2270.m_ActiveFontFeatures = i2276
  i2270.m_enableExtraPadding = !!i2271[66]
  i2270.checkPaddingRequired = !!i2271[67]
  i2270.m_isRichText = !!i2271[68]
  i2270.m_parseCtrlCharacters = !!i2271[69]
  i2270.m_isOrthographic = !!i2271[70]
  i2270.m_isCullingEnabled = !!i2271[71]
  i2270.m_horizontalMapping = i2271[72]
  i2270.m_verticalMapping = i2271[73]
  i2270.m_uvLineOffset = i2271[74]
  i2270.m_geometrySortingOrder = i2271[75]
  i2270.m_IsTextObjectScaleStatic = !!i2271[76]
  i2270.m_VertexBufferAutoSizeReduction = !!i2271[77]
  i2270.m_useMaxVisibleDescender = !!i2271[78]
  i2270.m_pageToDisplay = i2271[79]
  i2270.m_margin = new pc.Vec4( i2271[80], i2271[81], i2271[82], i2271[83] )
  i2270.m_isUsingLegacyAnimationComponent = !!i2271[84]
  i2270.m_isVolumetricText = !!i2271[85]
  request.r(i2271[86], i2271[87], 0, i2270, 'm_Material')
  i2270.m_EmojiFallbackSupport = !!i2271[88]
  i2270.m_Maskable = !!i2271[89]
  i2270.m_Color = new pc.Color(i2271[90], i2271[91], i2271[92], i2271[93])
  i2270.m_RaycastTarget = !!i2271[94]
  i2270.m_RaycastPadding = new pc.Vec4( i2271[95], i2271[96], i2271[97], i2271[98] )
  return i2270
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2278 = root || request.c( 'TMPro.VertexGradient' )
  var i2279 = data
  i2278.topLeft = new pc.Color(i2279[0], i2279[1], i2279[2], i2279[3])
  i2278.topRight = new pc.Color(i2279[4], i2279[5], i2279[6], i2279[7])
  i2278.bottomLeft = new pc.Color(i2279[8], i2279[9], i2279[10], i2279[11])
  i2278.bottomRight = new pc.Color(i2279[12], i2279[13], i2279[14], i2279[15])
  return i2278
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2282 = root || request.c( 'UnityEngine.UI.Button' )
  var i2283 = data
  i2282.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2283[0], i2282.m_OnClick)
  i2282.m_Navigation = request.d('UnityEngine.UI.Navigation', i2283[1], i2282.m_Navigation)
  i2282.m_Transition = i2283[2]
  i2282.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2283[3], i2282.m_Colors)
  i2282.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2283[4], i2282.m_SpriteState)
  i2282.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2283[5], i2282.m_AnimationTriggers)
  i2282.m_Interactable = !!i2283[6]
  request.r(i2283[7], i2283[8], 0, i2282, 'm_TargetGraphic')
  return i2282
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2285 = data
  i2284.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2285[0], i2284.m_PersistentCalls)
  return i2284
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2287 = data
  i2286.m_Mode = i2287[0]
  i2286.m_WrapAround = !!i2287[1]
  request.r(i2287[2], i2287[3], 0, i2286, 'm_SelectOnUp')
  request.r(i2287[4], i2287[5], 0, i2286, 'm_SelectOnDown')
  request.r(i2287[6], i2287[7], 0, i2286, 'm_SelectOnLeft')
  request.r(i2287[8], i2287[9], 0, i2286, 'm_SelectOnRight')
  return i2286
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2288 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2289 = data
  i2288.m_NormalColor = new pc.Color(i2289[0], i2289[1], i2289[2], i2289[3])
  i2288.m_HighlightedColor = new pc.Color(i2289[4], i2289[5], i2289[6], i2289[7])
  i2288.m_PressedColor = new pc.Color(i2289[8], i2289[9], i2289[10], i2289[11])
  i2288.m_SelectedColor = new pc.Color(i2289[12], i2289[13], i2289[14], i2289[15])
  i2288.m_DisabledColor = new pc.Color(i2289[16], i2289[17], i2289[18], i2289[19])
  i2288.m_ColorMultiplier = i2289[20]
  i2288.m_FadeDuration = i2289[21]
  return i2288
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2290 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2291 = data
  request.r(i2291[0], i2291[1], 0, i2290, 'm_HighlightedSprite')
  request.r(i2291[2], i2291[3], 0, i2290, 'm_PressedSprite')
  request.r(i2291[4], i2291[5], 0, i2290, 'm_SelectedSprite')
  request.r(i2291[6], i2291[7], 0, i2290, 'm_DisabledSprite')
  return i2290
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2292 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2293 = data
  i2292.m_NormalTrigger = i2293[0]
  i2292.m_HighlightedTrigger = i2293[1]
  i2292.m_PressedTrigger = i2293[2]
  i2292.m_SelectedTrigger = i2293[3]
  i2292.m_DisabledTrigger = i2293[4]
  return i2292
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2294 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2295 = data
  request.r(i2295[0], i2295[1], 0, i2294, 'm_FillRect')
  request.r(i2295[2], i2295[3], 0, i2294, 'm_HandleRect')
  i2294.m_Direction = i2295[4]
  i2294.m_MinValue = i2295[5]
  i2294.m_MaxValue = i2295[6]
  i2294.m_WholeNumbers = !!i2295[7]
  i2294.m_Value = i2295[8]
  i2294.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2295[9], i2294.m_OnValueChanged)
  i2294.m_Navigation = request.d('UnityEngine.UI.Navigation', i2295[10], i2294.m_Navigation)
  i2294.m_Transition = i2295[11]
  i2294.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2295[12], i2294.m_Colors)
  i2294.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2295[13], i2294.m_SpriteState)
  i2294.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2295[14], i2294.m_AnimationTriggers)
  i2294.m_Interactable = !!i2295[15]
  request.r(i2295[16], i2295[17], 0, i2294, 'm_TargetGraphic')
  return i2294
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2296 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2297 = data
  i2296.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2297[0], i2296.m_PersistentCalls)
  return i2296
}

Deserializers["ProgressSlider"] = function (request, data, root) {
  var i2298 = root || request.c( 'ProgressSlider' )
  var i2299 = data
  request.r(i2299[0], i2299[1], 0, i2298, 'progressSlider')
  i2298.maxProgressItems = i2299[2]
  i2298.startProgressItems = i2299[3]
  request.r(i2299[4], i2299[5], 0, i2298, 'progressText')
  return i2298
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i2300 = root || request.c( 'Ply_Pool' )
  var i2301 = data
  var i2303 = i2301[0]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.push( request.d('Ply_Pool+PoolAmount', i2303[i + 0]) );
  }
  i2300.poolAmounts = i2302
  request.r(i2301[1], i2301[2], 0, i2300, 'poolHolder')
  return i2300
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i2306 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i2307 = data
  i2306.type = i2307[0]
  i2306.amount = i2307[1]
  request.r(i2307[2], i2307[3], 0, i2306, 'gameUnit')
  return i2306
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2308 = root || request.c( 'Ply_SoundManager' )
  var i2309 = data
  var i2311 = i2309[0]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( request.d('Ply_SoundManager+FxAudio', i2311[i + 0]) );
  }
  i2308.fxAudios = i2310
  var i2313 = i2309[1]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 2) {
  request.r(i2313[i + 0], i2313[i + 1], 2, i2312, '')
  }
  i2308.audioClips = i2312
  request.r(i2309[2], i2309[3], 0, i2308, 'sound')
  return i2308
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i2316 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i2317 = data
  i2316.fxType = i2317[0]
  request.r(i2317[1], i2317[2], 0, i2316, 'audioClip')
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2321 = data
  request.r(i2321[0], i2321[1], 0, i2320, 'clip')
  request.r(i2321[2], i2321[3], 0, i2320, 'outputAudioMixerGroup')
  i2320.playOnAwake = !!i2321[4]
  i2320.loop = !!i2321[5]
  i2320.time = i2321[6]
  i2320.volume = i2321[7]
  i2320.pitch = i2321[8]
  i2320.enabled = !!i2321[9]
  return i2320
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2322 = root || request.c( 'GameManager' )
  var i2323 = data
  i2322.isPlaying = !!i2323[0]
  i2322.isTutorial = !!i2323[1]
  i2322.isGotoStore = !!i2323[2]
  i2322.isLoseGame = !!i2323[3]
  i2322.countMove = i2323[4]
  i2322.currentLayer = i2323[5]
  request.r(i2323[6], i2323[7], 0, i2322, 'trashCan')
  request.r(i2323[8], i2323[9], 0, i2322, 'step1')
  request.r(i2323[10], i2323[11], 0, i2322, 'paperBox')
  return i2322
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2324 = root || request.c( 'UIManager' )
  var i2325 = data
  request.r(i2325[0], i2325[1], 0, i2324, 'winUI')
  request.r(i2325[2], i2325[3], 0, i2324, 'loseUI')
  request.r(i2325[4], i2325[5], 0, i2324, 'tutorial')
  request.r(i2325[6], i2325[7], 0, i2324, 'verticalUI')
  request.r(i2325[8], i2325[9], 0, i2324, 'horizontalUI')
  request.r(i2325[10], i2325[11], 0, i2324, 'downloadBtn')
  request.r(i2325[12], i2325[13], 0, i2324, 'horizontalDownloadBtn')
  request.r(i2325[14], i2325[15], 0, i2324, 'textAnim')
  i2324.isGoogleBuild = !!i2325[16]
  i2324.screenWidth = i2325[17]
  i2324.screenHeight = i2325[18]
  i2324.scaleHeightOnWidth = i2325[19]
  i2324.isVertical = !!i2325[20]
  i2324.isScreenVertical = !!i2325[21]
  request.r(i2325[22], i2325[23], 0, i2324, 'cam')
  i2324.verticalUIHeightOnWidthRatio = i2325[24]
  i2324.scaleCameraOnValidate = !!i2325[25]
  i2324.screenVerticalHeightOnWidthRatio = i2325[26]
  i2324.useContinuousScaling = !!i2325[27]
  i2324.baseOrthographicSize = i2325[28]
  i2324.baseAspect = i2325[29]
  i2324.landscapeSizeRatio = i2325[30]
  i2324.defaultPortraitSizeRatio = i2325[31]
  var i2327 = i2325[32]
  var i2326 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.add(request.d('ScreenScaleStep', i2327[i + 0]));
  }
  i2324.discreteScaleSteps = i2326
  i2324.usePerspectiveCamera = !!i2325[33]
  request.r(i2325[34], i2325[35], 0, i2324, 'perspectiveFocus')
  i2324.perspectiveFocusDistance = i2325[36]
  i2324.perspectivePadding = i2325[37]
  i2324.fitRendererBounds = !!i2325[38]
  request.r(i2325[39], i2325[40], 0, i2324, 'boundsRoot')
  var i2329 = i2325[41]
  var i2328 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i2329.length; i += 2) {
  request.r(i2329[i + 0], i2329[i + 1], 1, i2328, '')
  }
  i2324.boundsRenderers = i2328
  return i2324
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i2332 = root || request.c( 'ScreenScaleStep' )
  var i2333 = data
  i2332.heightOnWidthRatio = i2333[0]
  i2332.orthographicSize = i2333[1]
  return i2332
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2336 = root || request.c( 'InputManager' )
  var i2337 = data
  i2336.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2337[0] )
  i2336.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i2337[1] )
  i2336.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2337[2] )
  i2336.isDragging = !!i2337[3]
  return i2336
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i2338 = root || request.c( 'HandTutManager' )
  var i2339 = data
  var i2341 = i2339[0]
  var i2340 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2341.length; i += 2) {
  request.r(i2341[i + 0], i2341[i + 1], 1, i2340, '')
  }
  i2338.items = i2340
  request.r(i2339[1], i2339[2], 0, i2338, 'knife')
  request.r(i2339[3], i2339[4], 0, i2338, 'knife2')
  request.r(i2339[5], i2339[6], 0, i2338, 'handTutObject')
  request.r(i2339[7], i2339[8], 0, i2338, 'tapToCookObject')
  request.r(i2339[9], i2339[10], 0, i2338, 'oilItem')
  request.r(i2339[11], i2339[12], 0, i2338, 'stoveToggleEvent')
  request.r(i2339[13], i2339[14], 0, i2338, 'waterToggleEvent')
  request.r(i2339[15], i2339[16], 0, i2338, 'sinkBlock')
  var i2343 = i2339[17]
  var i2342 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i2343.length; i += 2) {
  request.r(i2343[i + 0], i2343[i + 1], 1, i2342, '')
  }
  i2338.itemsInWater = i2342
  i2338.noDelayItemCount = i2339[18]
  i2338.breakHeartNoDelayThreshold = i2339[19]
  i2338.shortIdleDelay = i2339[20]
  i2338.maxHandTutShowCount = i2339[21]
  i2338.showSinkWaterTutorialOnStart = !!i2339[22]
  i2338.waitForBowlIntro = !!i2339[23]
  i2338.idleDelay = i2339[24]
  i2338.firstHandTutDelay = i2339[25]
  i2338.phaseHandTutDelay = i2339[26]
  i2338.moveDuration = i2339[27]
  i2338.dragFadeDuration = i2339[28]
  i2338.clickScaleDuration = i2339[29]
  i2338.waitAtEndDuration = i2339[30]
  i2338.handZPosition = i2339[31]
  i2338.clickScaleMultiplier = i2339[32]
  i2338.moveEase = i2339[33]
  return i2338
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i2348 = root || request.c( 'SortChildByZPos' )
  var i2349 = data
  request.r(i2349[0], i2349[1], 0, i2348, 'transformToSort')
  var i2351 = i2349[2]
  var i2350 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2351.length; i += 2) {
  request.r(i2351[i + 0], i2351[i + 1], 1, i2350, '')
  }
  i2348.childrenToSort = i2350
  i2348.zOffset = i2349[3]
  i2348.baseZ = i2349[4]
  return i2348
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i2354 = root || request.c( 'PhaseManager' )
  var i2355 = data
  var i2357 = i2355[0]
  var i2356 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.add(request.d('PhaseData', i2357[i + 0]));
  }
  i2354.phases = i2356
  i2354.transitionType = i2355[1]
  i2354.transitionDuration = i2355[2]
  i2354.delayBeforeNextPhase = i2355[3]
  i2354.offScreenLeftX = i2355[4]
  i2354.offScreenRightX = i2355[5]
  i2354.offScreenBottomY = i2355[6]
  i2354.offScreenTopY = i2355[7]
  i2354.centerScreenX = i2355[8]
  request.r(i2355[9], i2355[10], 0, i2354, 'phaseTransitionObject')
  i2354.phaseTransitionObjectDuration = i2355[11]
  i2354.currentPhaseIndex = i2355[12]
  i2354.currentStepCount = i2355[13]
  i2354.isECPopup = !!i2355[14]
  return i2354
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i2360 = root || request.c( 'PhaseData' )
  var i2361 = data
  request.r(i2361[0], i2361[1], 0, i2360, 'phaseObject')
  i2360.totalSteps = i2361[2]
  i2360.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i2361[3], i2360.onPhaseReady)
  return i2360
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i2362 = root || request.c( 'ItemTypeDoneManager' )
  var i2363 = data
  var i2365 = i2363[0]
  var i2364 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i2365[i + 0]));
  }
  i2362.itemTypeGroups = i2364
  return i2362
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i2368 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i2369 = data
  i2368.itemType = i2369[0]
  var i2371 = i2369[1]
  var i2370 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2371.length; i += 2) {
  request.r(i2371[i + 0], i2371[i + 1], 1, i2370, '')
  }
  i2368.items = i2370
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2373 = data
  i2372.aspect = i2373[0]
  i2372.orthographic = !!i2373[1]
  i2372.orthographicSize = i2373[2]
  i2372.backgroundColor = new pc.Color(i2373[3], i2373[4], i2373[5], i2373[6])
  i2372.nearClipPlane = i2373[7]
  i2372.farClipPlane = i2373[8]
  i2372.fieldOfView = i2373[9]
  i2372.depth = i2373[10]
  i2372.clearFlags = i2373[11]
  i2372.cullingMask = i2373[12]
  i2372.rect = i2373[13]
  request.r(i2373[14], i2373[15], 0, i2372, 'targetTexture')
  i2372.usePhysicalProperties = !!i2373[16]
  i2372.focalLength = i2373[17]
  i2372.sensorSize = new pc.Vec2( i2373[18], i2373[19] )
  i2372.lensShift = new pc.Vec2( i2373[20], i2373[21] )
  i2372.gateFit = i2373[22]
  i2372.commandBufferCount = i2373[23]
  i2372.cameraType = i2373[24]
  i2372.enabled = !!i2373[25]
  return i2372
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2374 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2375 = data
  request.r(i2375[0], i2375[1], 0, i2374, 'm_FirstSelected')
  i2374.m_sendNavigationEvents = !!i2375[2]
  i2374.m_DragThreshold = i2375[3]
  return i2374
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2376 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2377 = data
  i2376.m_HorizontalAxis = i2377[0]
  i2376.m_VerticalAxis = i2377[1]
  i2376.m_SubmitButton = i2377[2]
  i2376.m_CancelButton = i2377[3]
  i2376.m_InputActionsPerSecond = i2377[4]
  i2376.m_RepeatDelay = i2377[5]
  i2376.m_ForceModuleActive = !!i2377[6]
  i2376.m_SendPointerHoverToParent = !!i2377[7]
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

Deserializers["Item"] = function (request, data, root) {
  var i2380 = root || request.c( 'Item' )
  var i2381 = data
  i2380.isDone = !!i2381[0]
  i2380.onProcess = !!i2381[1]
  i2380.requireMatchingTargetTypeForHandTut = !!i2381[2]
  request.r(i2381[3], i2381[4], 0, i2380, 'itemDraggable')
  request.r(i2381[5], i2381[6], 0, i2380, 'itemClickable')
  request.r(i2381[7], i2381[8], 0, i2380, 'itemStirring')
  request.r(i2381[9], i2381[10], 0, i2380, 'itemKnifeSpriteMaskCutter')
  request.r(i2381[11], i2381[12], 0, i2380, 'itemSpriteMaskPainter')
  request.r(i2381[13], i2381[14], 0, i2380, 'itemDragSpriteMaskPainter')
  request.r(i2381[15], i2381[16], 0, i2380, 'itemMoveToTarget')
  request.r(i2381[17], i2381[18], 0, i2380, 'animator')
  i2380.itemType = i2381[19]
  request.r(i2381[20], i2381[21], 0, i2380, 'spriteRenderer')
  i2380.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2381[22], i2380.onKnifeIn)
  request.r(i2381[23], i2381[24], 0, i2380, 'knifePos')
  i2380.heartEffectScale = i2381[25]
  i2380.breakHeartEffectScale = i2381[26]
  i2380.blinkEffectScale = i2381[27]
  i2380.mergeEffectScale = i2381[28]
  i2380.playMoveToTargetFinishSound = !!i2381[29]
  i2380.moveToTargetFinishFxType = i2381[30]
  i2380.fxSpawnZPos = i2381[31]
  request.r(i2381[32], i2381[33], 0, i2380, 'tf')
  return i2380
}

Deserializers["ItemStirring"] = function (request, data, root) {
  var i2382 = root || request.c( 'ItemStirring' )
  var i2383 = data
  i2382.stirRadius = i2383[0]
  request.r(i2383[1], i2383[2], 0, i2382, 'stirrerTransform')
  request.r(i2383[3], i2383[4], 0, i2382, 'centerPoint')
  i2382.movementMode = i2383[5]
  i2382.lineLength = i2383[6]
  i2382.lineDirection = new pc.Vec3( i2383[7], i2383[8], i2383[9] )
  i2382.flipScaleYByLineDragDirection = !!i2383[10]
  request.r(i2383[11], i2383[12], 0, i2382, 'flipScaleTarget')
  request.r(i2383[13], i2383[14], 0, i2382, 'targetAnimator')
  i2382.targetStateName = i2383[15]
  i2382.targetLayer = i2383[16]
  i2382.stoppedSpeed = i2383[17]
  i2382.minDragDistanceToAnimate = i2383[18]
  i2382.dragSpeedMultiplier = i2383[19]
  i2382.minAnimatorSpeed = i2383[20]
  i2382.maxAnimatorSpeed = i2383[21]
  i2382.speedBlendDuration = i2383[22]
  i2382.completeNormalizedTime = i2383[23]
  i2382.resetAnimationOnFirstBegin = !!i2383[24]
  var i2385 = i2383[25]
  var i2384 = new (System.Collections.Generic.List$1(Bridge.ns('StirMilestone')))
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.add(request.d('StirMilestone', i2385[i + 0]));
  }
  i2382.milestones = i2384
  i2382.spawnProgressBarOnStir = !!i2383[26]
  request.r(i2383[27], i2383[28], 0, i2382, 'spawnProgressBarPoint')
  i2382.rollingSoundCooldown = i2383[29]
  i2382.onStirBegin = request.d('UnityEngine.Events.UnityEvent', i2383[30], i2382.onStirBegin)
  i2382.onStirComplete = request.d('UnityEngine.Events.UnityEvent', i2383[31], i2382.onStirComplete)
  return i2382
}

Deserializers["StirMilestone"] = function (request, data, root) {
  var i2388 = root || request.c( 'StirMilestone' )
  var i2389 = data
  i2388.distanceThreshold = i2389[0]
  i2388.onMilestoneReached = request.d('UnityEngine.Events.UnityEvent', i2389[1], i2388.onMilestoneReached)
  i2388.isReached = !!i2389[2]
  return i2388
}

Deserializers["Spartula"] = function (request, data, root) {
  var i2390 = root || request.c( 'Spartula' )
  var i2391 = data
  i2390.isDone = !!i2391[0]
  i2390.onProcess = !!i2391[1]
  i2390.requireMatchingTargetTypeForHandTut = !!i2391[2]
  request.r(i2391[3], i2391[4], 0, i2390, 'itemDraggable')
  request.r(i2391[5], i2391[6], 0, i2390, 'itemClickable')
  request.r(i2391[7], i2391[8], 0, i2390, 'itemStirring')
  request.r(i2391[9], i2391[10], 0, i2390, 'itemKnifeSpriteMaskCutter')
  request.r(i2391[11], i2391[12], 0, i2390, 'itemSpriteMaskPainter')
  request.r(i2391[13], i2391[14], 0, i2390, 'itemDragSpriteMaskPainter')
  request.r(i2391[15], i2391[16], 0, i2390, 'itemMoveToTarget')
  request.r(i2391[17], i2391[18], 0, i2390, 'animator')
  i2390.itemType = i2391[19]
  request.r(i2391[20], i2391[21], 0, i2390, 'spriteRenderer')
  i2390.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2391[22], i2390.onKnifeIn)
  request.r(i2391[23], i2391[24], 0, i2390, 'knifePos')
  i2390.heartEffectScale = i2391[25]
  i2390.breakHeartEffectScale = i2391[26]
  i2390.blinkEffectScale = i2391[27]
  i2390.mergeEffectScale = i2391[28]
  i2390.playMoveToTargetFinishSound = !!i2391[29]
  i2390.moveToTargetFinishFxType = i2391[30]
  i2390.fxSpawnZPos = i2391[31]
  request.r(i2391[32], i2391[33], 0, i2390, 'tf')
  return i2390
}

Deserializers["ItemDragChildRotator"] = function (request, data, root) {
  var i2392 = root || request.c( 'ItemDragChildRotator' )
  var i2393 = data
  request.r(i2393[0], i2393[1], 0, i2392, 'rotateTarget')
  i2392.dragEulerAngles = new pc.Vec3( i2393[2], i2393[3], i2393[4] )
  i2392.useLocalRotation = !!i2393[5]
  i2392.rotateRelative = !!i2393[6]
  i2392.rotateDuration = i2393[7]
  i2392.rotateEase = i2393[8]
  i2392.rotateMode = i2393[9]
  return i2392
}

Deserializers["Pan"] = function (request, data, root) {
  var i2394 = root || request.c( 'Pan' )
  var i2395 = data
  request.r(i2395[0], i2395[1], 0, i2394, 'fryingFX')
  i2394.isOilIn = !!i2395[2]
  i2394.isTurnOnStove = !!i2395[3]
  request.r(i2395[4], i2395[5], 0, i2394, 'stoveBtn')
  request.r(i2395[6], i2395[7], 0, i2394, 'spartula')
  i2394.stoveShakeDelay = i2395[8]
  i2394.stoveShakeDuration = i2395[9]
  i2394.vegeOn = i2395[10]
  request.r(i2395[11], i2395[12], 0, i2394, 'salt')
  request.r(i2395[13], i2395[14], 0, i2394, 'chillie')
  request.r(i2395[15], i2395[16], 0, i2394, 'meat')
  request.r(i2395[17], i2395[18], 0, i2394, 'cream')
  request.r(i2395[19], i2395[20], 0, i2394, 'noodle')
  request.r(i2395[21], i2395[22], 0, i2394, 'lastBowl')
  i2394.isDone = !!i2395[23]
  i2394.onProcess = !!i2395[24]
  i2394.requireMatchingTargetTypeForHandTut = !!i2395[25]
  request.r(i2395[26], i2395[27], 0, i2394, 'itemDraggable')
  request.r(i2395[28], i2395[29], 0, i2394, 'itemClickable')
  request.r(i2395[30], i2395[31], 0, i2394, 'itemStirring')
  request.r(i2395[32], i2395[33], 0, i2394, 'itemKnifeSpriteMaskCutter')
  request.r(i2395[34], i2395[35], 0, i2394, 'itemSpriteMaskPainter')
  request.r(i2395[36], i2395[37], 0, i2394, 'itemDragSpriteMaskPainter')
  request.r(i2395[38], i2395[39], 0, i2394, 'itemMoveToTarget')
  request.r(i2395[40], i2395[41], 0, i2394, 'animator')
  i2394.itemType = i2395[42]
  request.r(i2395[43], i2395[44], 0, i2394, 'spriteRenderer')
  i2394.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2395[45], i2394.onKnifeIn)
  request.r(i2395[46], i2395[47], 0, i2394, 'knifePos')
  i2394.heartEffectScale = i2395[48]
  i2394.breakHeartEffectScale = i2395[49]
  i2394.blinkEffectScale = i2395[50]
  i2394.mergeEffectScale = i2395[51]
  i2394.playMoveToTargetFinishSound = !!i2395[52]
  i2394.moveToTargetFinishFxType = i2395[53]
  i2394.fxSpawnZPos = i2395[54]
  request.r(i2395[55], i2395[56], 0, i2394, 'tf')
  return i2394
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i2396 = root || request.c( 'Ply_ToggleEvent' )
  var i2397 = data
  i2396.isOn = !!i2397[0]
  i2396.applyStateOnEnable = !!i2397[1]
  i2396.applyStateOnClick = !!i2397[2]
  request.r(i2397[3], i2397[4], 0, i2396, 'targetObject')
  i2396.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i2397[5], i2396.onTurnOn)
  i2396.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i2397[6], i2396.onTurnOff)
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2399 = data
  i2398.ambientIntensity = i2399[0]
  i2398.reflectionIntensity = i2399[1]
  i2398.ambientMode = i2399[2]
  i2398.ambientLight = new pc.Color(i2399[3], i2399[4], i2399[5], i2399[6])
  i2398.ambientSkyColor = new pc.Color(i2399[7], i2399[8], i2399[9], i2399[10])
  i2398.ambientGroundColor = new pc.Color(i2399[11], i2399[12], i2399[13], i2399[14])
  i2398.ambientEquatorColor = new pc.Color(i2399[15], i2399[16], i2399[17], i2399[18])
  i2398.fogColor = new pc.Color(i2399[19], i2399[20], i2399[21], i2399[22])
  i2398.fogEndDistance = i2399[23]
  i2398.fogStartDistance = i2399[24]
  i2398.fogDensity = i2399[25]
  i2398.fog = !!i2399[26]
  request.r(i2399[27], i2399[28], 0, i2398, 'skybox')
  i2398.fogMode = i2399[29]
  var i2401 = i2399[30]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2401[i + 0]) );
  }
  i2398.lightmaps = i2400
  i2398.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2399[31], i2398.lightProbes)
  i2398.lightmapsMode = i2399[32]
  i2398.mixedBakeMode = i2399[33]
  i2398.environmentLightingMode = i2399[34]
  i2398.ambientProbe = new pc.SphericalHarmonicsL2(i2399[35])
  i2398.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2399[36])
  i2398.useReferenceAmbientProbe = !!i2399[37]
  request.r(i2399[38], i2399[39], 0, i2398, 'customReflection')
  request.r(i2399[40], i2399[41], 0, i2398, 'defaultReflection')
  i2398.defaultReflectionMode = i2399[42]
  i2398.defaultReflectionResolution = i2399[43]
  i2398.sunLightObjectId = i2399[44]
  i2398.pixelLightCount = i2399[45]
  i2398.defaultReflectionHDR = !!i2399[46]
  i2398.hasLightDataAsset = !!i2399[47]
  i2398.hasManualGenerate = !!i2399[48]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2405 = data
  request.r(i2405[0], i2405[1], 0, i2404, 'lightmapColor')
  request.r(i2405[2], i2405[3], 0, i2404, 'lightmapDirection')
  request.r(i2405[4], i2405[5], 0, i2404, 'shadowMask')
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2406 = root || new UnityEngine.LightProbes()
  var i2407 = data
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2415 = data
  var i2417 = i2415[0]
  var i2416 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2417[i + 0]));
  }
  i2414.ShaderCompilationErrors = i2416
  i2414.name = i2415[1]
  i2414.guid = i2415[2]
  var i2419 = i2415[3]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.push( i2419[i + 0] );
  }
  i2414.shaderDefinedKeywords = i2418
  var i2421 = i2415[4]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2421[i + 0]) );
  }
  i2414.passes = i2420
  var i2423 = i2415[5]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2423[i + 0]) );
  }
  i2414.usePasses = i2422
  var i2425 = i2415[6]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2425[i + 0]) );
  }
  i2414.defaultParameterValues = i2424
  request.r(i2415[7], i2415[8], 0, i2414, 'unityFallbackShader')
  i2414.readDepth = !!i2415[9]
  i2414.hasDepthOnlyPass = !!i2415[10]
  i2414.isCreatedByShaderGraph = !!i2415[11]
  i2414.disableBatching = !!i2415[12]
  i2414.compiled = !!i2415[13]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2429 = data
  i2428.shaderName = i2429[0]
  i2428.errorMessage = i2429[1]
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2434 = root || new pc.UnityShaderPass()
  var i2435 = data
  i2434.id = i2435[0]
  i2434.subShaderIndex = i2435[1]
  i2434.name = i2435[2]
  i2434.passType = i2435[3]
  i2434.grabPassTextureName = i2435[4]
  i2434.usePass = !!i2435[5]
  i2434.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2435[6], i2434.zTest)
  i2434.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2435[7], i2434.zWrite)
  i2434.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2435[8], i2434.culling)
  i2434.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2435[9], i2434.blending)
  i2434.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2435[10], i2434.alphaBlending)
  i2434.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2435[11], i2434.colorWriteMask)
  i2434.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2435[12], i2434.offsetUnits)
  i2434.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2435[13], i2434.offsetFactor)
  i2434.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2435[14], i2434.stencilRef)
  i2434.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2435[15], i2434.stencilReadMask)
  i2434.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2435[16], i2434.stencilWriteMask)
  i2434.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2435[17], i2434.stencilOp)
  i2434.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2435[18], i2434.stencilOpFront)
  i2434.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2435[19], i2434.stencilOpBack)
  var i2437 = i2435[20]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 1) {
    i2436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2437[i + 0]) );
  }
  i2434.tags = i2436
  var i2439 = i2435[21]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.push( i2439[i + 0] );
  }
  i2434.passDefinedKeywords = i2438
  var i2441 = i2435[22]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2441[i + 0]) );
  }
  i2434.passDefinedKeywordGroups = i2440
  var i2443 = i2435[23]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2443[i + 0]) );
  }
  i2434.variants = i2442
  var i2445 = i2435[24]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2445[i + 0]) );
  }
  i2434.excludedVariants = i2444
  i2434.hasDepthReader = !!i2435[25]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2447 = data
  i2446.val = i2447[0]
  i2446.name = i2447[1]
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2449 = data
  i2448.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2449[0], i2448.src)
  i2448.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2449[1], i2448.dst)
  i2448.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2449[2], i2448.op)
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2451 = data
  i2450.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[0], i2450.pass)
  i2450.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[1], i2450.fail)
  i2450.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[2], i2450.zFail)
  i2450.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2451[3], i2450.comp)
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2455 = data
  i2454.name = i2455[0]
  i2454.value = i2455[1]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2459 = data
  var i2461 = i2459[0]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( i2461[i + 0] );
  }
  i2458.keywords = i2460
  i2458.hasDiscard = !!i2459[1]
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2465 = data
  i2464.passId = i2465[0]
  i2464.subShaderIndex = i2465[1]
  var i2467 = i2465[2]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( i2467[i + 0] );
  }
  i2464.keywords = i2466
  i2464.vertexProgram = i2465[3]
  i2464.fragmentProgram = i2465[4]
  i2464.exportedForWebGl2 = !!i2465[5]
  i2464.readDepth = !!i2465[6]
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2471 = data
  request.r(i2471[0], i2471[1], 0, i2470, 'shader')
  i2470.pass = i2471[2]
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2475 = data
  i2474.name = i2475[0]
  i2474.type = i2475[1]
  i2474.value = new pc.Vec4( i2475[2], i2475[3], i2475[4], i2475[5] )
  i2474.textureValue = i2475[6]
  i2474.shaderPropertyFlag = i2475[7]
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2477 = data
  i2476.name = i2477[0]
  request.r(i2477[1], i2477[2], 0, i2476, 'texture')
  i2476.aabb = i2477[3]
  i2476.vertices = i2477[4]
  i2476.triangles = i2477[5]
  i2476.textureRect = UnityEngine.Rect.MinMaxRect(i2477[6], i2477[7], i2477[8], i2477[9])
  i2476.packedRect = UnityEngine.Rect.MinMaxRect(i2477[10], i2477[11], i2477[12], i2477[13])
  i2476.border = new pc.Vec4( i2477[14], i2477[15], i2477[16], i2477[17] )
  i2476.transparency = i2477[18]
  i2476.bounds = i2477[19]
  i2476.pixelsPerUnit = i2477[20]
  i2476.textureWidth = i2477[21]
  i2476.textureHeight = i2477[22]
  i2476.nativeSize = new pc.Vec2( i2477[23], i2477[24] )
  i2476.pivot = new pc.Vec2( i2477[25], i2477[26] )
  i2476.textureRectOffset = new pc.Vec2( i2477[27], i2477[28] )
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2479 = data
  i2478.name = i2479[0]
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2481 = data
  i2480.name = i2481[0]
  i2480.wrapMode = i2481[1]
  i2480.isLooping = !!i2481[2]
  i2480.length = i2481[3]
  var i2483 = i2481[4]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2483[i + 0]) );
  }
  i2480.curves = i2482
  var i2485 = i2481[5]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2485[i + 0]) );
  }
  i2480.events = i2484
  i2480.halfPrecision = !!i2481[6]
  i2480._frameRate = i2481[7]
  i2480.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2481[8], i2480.localBounds)
  i2480.hasMuscleCurves = !!i2481[9]
  var i2487 = i2481[10]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 1) {
    i2486.push( i2487[i + 0] );
  }
  i2480.clipMuscleConstant = i2486
  i2480.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2481[11], i2480.clipBindingConstant)
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2491 = data
  i2490.path = i2491[0]
  i2490.hash = i2491[1]
  i2490.componentType = i2491[2]
  i2490.property = i2491[3]
  i2490.keys = i2491[4]
  var i2493 = i2491[5]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2493[i + 0]) );
  }
  i2490.objectReferenceKeys = i2492
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2497 = data
  i2496.time = i2497[0]
  request.r(i2497[1], i2497[2], 0, i2496, 'value')
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2501 = data
  i2500.functionName = i2501[0]
  i2500.floatParameter = i2501[1]
  i2500.intParameter = i2501[2]
  i2500.stringParameter = i2501[3]
  request.r(i2501[4], i2501[5], 0, i2500, 'objectReferenceParameter')
  i2500.time = i2501[6]
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2503 = data
  i2502.center = new pc.Vec3( i2503[0], i2503[1], i2503[2] )
  i2502.extends = new pc.Vec3( i2503[3], i2503[4], i2503[5] )
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2507 = data
  var i2509 = i2507[0]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( i2509[i + 0] );
  }
  i2506.genericBindings = i2508
  var i2511 = i2507[1]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( i2511[i + 0] );
  }
  i2506.pptrCurveMapping = i2510
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2513 = data
  i2512.name = i2513[0]
  var i2515 = i2513[1]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2515[i + 0]) );
  }
  i2512.layers = i2514
  var i2517 = i2513[2]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2517[i + 0]) );
  }
  i2512.parameters = i2516
  i2512.animationClips = i2513[3]
  i2512.avatarUnsupported = i2513[4]
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2521 = data
  i2520.name = i2521[0]
  i2520.defaultWeight = i2521[1]
  i2520.blendingMode = i2521[2]
  i2520.avatarMask = i2521[3]
  i2520.syncedLayerIndex = i2521[4]
  i2520.syncedLayerAffectsTiming = !!i2521[5]
  i2520.syncedLayers = i2521[6]
  i2520.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2521[7], i2520.stateMachine)
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2523 = data
  i2522.id = i2523[0]
  i2522.name = i2523[1]
  i2522.path = i2523[2]
  var i2525 = i2523[3]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2525[i + 0]) );
  }
  i2522.states = i2524
  var i2527 = i2523[4]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2527[i + 0]) );
  }
  i2522.machines = i2526
  var i2529 = i2523[5]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2529[i + 0]) );
  }
  i2522.entryStateTransitions = i2528
  var i2531 = i2523[6]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2531[i + 0]) );
  }
  i2522.exitStateTransitions = i2530
  var i2533 = i2523[7]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2533[i + 0]) );
  }
  i2522.anyStateTransitions = i2532
  i2522.defaultStateId = i2523[8]
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2537 = data
  i2536.id = i2537[0]
  i2536.name = i2537[1]
  i2536.cycleOffset = i2537[2]
  i2536.cycleOffsetParameter = i2537[3]
  i2536.cycleOffsetParameterActive = !!i2537[4]
  i2536.mirror = !!i2537[5]
  i2536.mirrorParameter = i2537[6]
  i2536.mirrorParameterActive = !!i2537[7]
  i2536.motionId = i2537[8]
  i2536.nameHash = i2537[9]
  i2536.fullPathHash = i2537[10]
  i2536.speed = i2537[11]
  i2536.speedParameter = i2537[12]
  i2536.speedParameterActive = !!i2537[13]
  i2536.tag = i2537[14]
  i2536.tagHash = i2537[15]
  i2536.writeDefaultValues = !!i2537[16]
  var i2539 = i2537[17]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 2) {
  request.r(i2539[i + 0], i2539[i + 1], 2, i2538, '')
  }
  i2536.behaviours = i2538
  var i2541 = i2537[18]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2541[i + 0]) );
  }
  i2536.transitions = i2540
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2547 = data
  i2546.fullPath = i2547[0]
  i2546.canTransitionToSelf = !!i2547[1]
  i2546.duration = i2547[2]
  i2546.exitTime = i2547[3]
  i2546.hasExitTime = !!i2547[4]
  i2546.hasFixedDuration = !!i2547[5]
  i2546.interruptionSource = i2547[6]
  i2546.offset = i2547[7]
  i2546.orderedInterruption = !!i2547[8]
  i2546.destinationStateId = i2547[9]
  i2546.isExit = !!i2547[10]
  i2546.mute = !!i2547[11]
  i2546.solo = !!i2547[12]
  var i2549 = i2547[13]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2549[i + 0]) );
  }
  i2546.conditions = i2548
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2555 = data
  i2554.destinationStateId = i2555[0]
  i2554.isExit = !!i2555[1]
  i2554.mute = !!i2555[2]
  i2554.solo = !!i2555[3]
  var i2557 = i2555[4]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2557[i + 0]) );
  }
  i2554.conditions = i2556
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2561 = data
  i2560.defaultBool = !!i2561[0]
  i2560.defaultFloat = i2561[1]
  i2560.defaultInt = i2561[2]
  i2560.name = i2561[3]
  i2560.nameHash = i2561[4]
  i2560.type = i2561[5]
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2565 = data
  i2564.mode = i2565[0]
  i2564.parameter = i2565[1]
  i2564.threshold = i2565[2]
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2567 = data
  i2566.name = i2567[0]
  i2566.bytes64 = i2567[1]
  i2566.data = i2567[2]
  return i2566
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2568 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2569 = data
  i2568.normalStyle = i2569[0]
  i2568.normalSpacingOffset = i2569[1]
  i2568.boldStyle = i2569[2]
  i2568.boldSpacing = i2569[3]
  i2568.italicStyle = i2569[4]
  i2568.tabSize = i2569[5]
  request.r(i2569[6], i2569[7], 0, i2568, 'atlas')
  i2568.m_SourceFontFileGUID = i2569[8]
  i2568.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2569[9], i2568.m_CreationSettings)
  request.r(i2569[10], i2569[11], 0, i2568, 'm_SourceFontFile')
  i2568.m_SourceFontFilePath = i2569[12]
  i2568.m_AtlasPopulationMode = i2569[13]
  i2568.InternalDynamicOS = !!i2569[14]
  var i2571 = i2569[15]
  var i2570 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.add(request.d('UnityEngine.TextCore.Glyph', i2571[i + 0]));
  }
  i2568.m_GlyphTable = i2570
  var i2573 = i2569[16]
  var i2572 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.add(request.d('TMPro.TMP_Character', i2573[i + 0]));
  }
  i2568.m_CharacterTable = i2572
  var i2575 = i2569[17]
  var i2574 = []
  for(var i = 0; i < i2575.length; i += 2) {
  request.r(i2575[i + 0], i2575[i + 1], 2, i2574, '')
  }
  i2568.m_AtlasTextures = i2574
  i2568.m_AtlasTextureIndex = i2569[18]
  i2568.m_IsMultiAtlasTexturesEnabled = !!i2569[19]
  i2568.m_GetFontFeatures = !!i2569[20]
  i2568.m_ClearDynamicDataOnBuild = !!i2569[21]
  i2568.m_AtlasWidth = i2569[22]
  i2568.m_AtlasHeight = i2569[23]
  i2568.m_AtlasPadding = i2569[24]
  i2568.m_AtlasRenderMode = i2569[25]
  var i2577 = i2569[26]
  var i2576 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2577.length; i += 1) {
    i2576.add(request.d('UnityEngine.TextCore.GlyphRect', i2577[i + 0]));
  }
  i2568.m_UsedGlyphRects = i2576
  var i2579 = i2569[27]
  var i2578 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2579.length; i += 1) {
    i2578.add(request.d('UnityEngine.TextCore.GlyphRect', i2579[i + 0]));
  }
  i2568.m_FreeGlyphRects = i2578
  i2568.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2569[28], i2568.m_FontFeatureTable)
  i2568.m_ShouldReimportFontFeatures = !!i2569[29]
  var i2581 = i2569[30]
  var i2580 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2581.length; i += 2) {
  request.r(i2581[i + 0], i2581[i + 1], 1, i2580, '')
  }
  i2568.m_FallbackFontAssetTable = i2580
  var i2583 = i2569[31]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.push( request.d('TMPro.TMP_FontWeightPair', i2583[i + 0]) );
  }
  i2568.m_FontWeightTable = i2582
  var i2585 = i2569[32]
  var i2584 = []
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.push( request.d('TMPro.TMP_FontWeightPair', i2585[i + 0]) );
  }
  i2568.fontWeights = i2584
  i2568.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2569[33], i2568.m_fontInfo)
  var i2587 = i2569[34]
  var i2586 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.add(request.d('TMPro.TMP_Glyph', i2587[i + 0]));
  }
  i2568.m_glyphInfoList = i2586
  i2568.m_KerningTable = request.d('TMPro.KerningTable', i2569[35], i2568.m_KerningTable)
  var i2589 = i2569[36]
  var i2588 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2589.length; i += 2) {
  request.r(i2589[i + 0], i2589[i + 1], 1, i2588, '')
  }
  i2568.fallbackFontAssets = i2588
  i2568.m_Version = i2569[37]
  i2568.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2569[38], i2568.m_FaceInfo)
  request.r(i2569[39], i2569[40], 0, i2568, 'm_Material')
  return i2568
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2590 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2591 = data
  i2590.sourceFontFileName = i2591[0]
  i2590.sourceFontFileGUID = i2591[1]
  i2590.faceIndex = i2591[2]
  i2590.pointSizeSamplingMode = i2591[3]
  i2590.pointSize = i2591[4]
  i2590.padding = i2591[5]
  i2590.paddingMode = i2591[6]
  i2590.packingMode = i2591[7]
  i2590.atlasWidth = i2591[8]
  i2590.atlasHeight = i2591[9]
  i2590.characterSetSelectionMode = i2591[10]
  i2590.characterSequence = i2591[11]
  i2590.referencedFontAssetGUID = i2591[12]
  i2590.referencedTextAssetGUID = i2591[13]
  i2590.fontStyle = i2591[14]
  i2590.fontStyleModifier = i2591[15]
  i2590.renderMode = i2591[16]
  i2590.includeFontFeatures = !!i2591[17]
  return i2590
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2594 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2595 = data
  i2594.m_Index = i2595[0]
  i2594.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2595[1], i2594.m_Metrics)
  i2594.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2595[2], i2594.m_GlyphRect)
  i2594.m_Scale = i2595[3]
  i2594.m_AtlasIndex = i2595[4]
  i2594.m_ClassDefinitionType = i2595[5]
  return i2594
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2596 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2597 = data
  i2596.m_Width = i2597[0]
  i2596.m_Height = i2597[1]
  i2596.m_HorizontalBearingX = i2597[2]
  i2596.m_HorizontalBearingY = i2597[3]
  i2596.m_HorizontalAdvance = i2597[4]
  return i2596
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2598 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2599 = data
  i2598.m_X = i2599[0]
  i2598.m_Y = i2599[1]
  i2598.m_Width = i2599[2]
  i2598.m_Height = i2599[3]
  return i2598
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2602 = root || request.c( 'TMPro.TMP_Character' )
  var i2603 = data
  i2602.m_ElementType = i2603[0]
  i2602.m_Unicode = i2603[1]
  i2602.m_GlyphIndex = i2603[2]
  i2602.m_Scale = i2603[3]
  return i2602
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2608 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2609 = data
  var i2611 = i2609[0]
  var i2610 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.add(request.d('TMPro.MultipleSubstitutionRecord', i2611[i + 0]));
  }
  i2608.m_MultipleSubstitutionRecords = i2610
  var i2613 = i2609[1]
  var i2612 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.add(request.d('TMPro.LigatureSubstitutionRecord', i2613[i + 0]));
  }
  i2608.m_LigatureSubstitutionRecords = i2612
  var i2615 = i2609[2]
  var i2614 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2615.length; i += 1) {
    i2614.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2615[i + 0]));
  }
  i2608.m_GlyphPairAdjustmentRecords = i2614
  var i2617 = i2609[3]
  var i2616 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2617[i + 0]));
  }
  i2608.m_MarkToBaseAdjustmentRecords = i2616
  var i2619 = i2609[4]
  var i2618 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2619[i + 0]));
  }
  i2608.m_MarkToMarkAdjustmentRecords = i2618
  return i2608
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2622 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2623 = data
  i2622.m_TargetGlyphID = i2623[0]
  i2622.m_SubstituteGlyphIDs = i2623[1]
  return i2622
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2626 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2627 = data
  i2626.m_ComponentGlyphIDs = i2627[0]
  i2626.m_LigatureGlyphID = i2627[1]
  return i2626
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2630 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2631 = data
  i2630.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2631[0], i2630.m_FirstAdjustmentRecord)
  i2630.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2631[1], i2630.m_SecondAdjustmentRecord)
  i2630.m_FeatureLookupFlags = i2631[2]
  return i2630
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2634 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2635 = data
  i2634.m_BaseGlyphID = i2635[0]
  i2634.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2635[1], i2634.m_BaseGlyphAnchorPoint)
  i2634.m_MarkGlyphID = i2635[2]
  i2634.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2635[3], i2634.m_MarkPositionAdjustment)
  return i2634
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2638 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2639 = data
  i2638.m_BaseMarkGlyphID = i2639[0]
  i2638.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2639[1], i2638.m_BaseMarkGlyphAnchorPoint)
  i2638.m_CombiningMarkGlyphID = i2639[2]
  i2638.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2639[3], i2638.m_CombiningMarkPositionAdjustment)
  return i2638
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2644 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2645 = data
  request.r(i2645[0], i2645[1], 0, i2644, 'regularTypeface')
  request.r(i2645[2], i2645[3], 0, i2644, 'italicTypeface')
  return i2644
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2646 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2647 = data
  i2646.Name = i2647[0]
  i2646.PointSize = i2647[1]
  i2646.Scale = i2647[2]
  i2646.CharacterCount = i2647[3]
  i2646.LineHeight = i2647[4]
  i2646.Baseline = i2647[5]
  i2646.Ascender = i2647[6]
  i2646.CapHeight = i2647[7]
  i2646.Descender = i2647[8]
  i2646.CenterLine = i2647[9]
  i2646.SuperscriptOffset = i2647[10]
  i2646.SubscriptOffset = i2647[11]
  i2646.SubSize = i2647[12]
  i2646.Underline = i2647[13]
  i2646.UnderlineThickness = i2647[14]
  i2646.strikethrough = i2647[15]
  i2646.strikethroughThickness = i2647[16]
  i2646.TabWidth = i2647[17]
  i2646.Padding = i2647[18]
  i2646.AtlasWidth = i2647[19]
  i2646.AtlasHeight = i2647[20]
  return i2646
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2650 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2651 = data
  i2650.id = i2651[0]
  i2650.x = i2651[1]
  i2650.y = i2651[2]
  i2650.width = i2651[3]
  i2650.height = i2651[4]
  i2650.xOffset = i2651[5]
  i2650.yOffset = i2651[6]
  i2650.xAdvance = i2651[7]
  i2650.scale = i2651[8]
  return i2650
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2652 = root || request.c( 'TMPro.KerningTable' )
  var i2653 = data
  var i2655 = i2653[0]
  var i2654 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2655.length; i += 1) {
    i2654.add(request.d('TMPro.KerningPair', i2655[i + 0]));
  }
  i2652.kerningPairs = i2654
  return i2652
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2658 = root || request.c( 'TMPro.KerningPair' )
  var i2659 = data
  i2658.xOffset = i2659[0]
  i2658.m_FirstGlyph = i2659[1]
  i2658.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2659[2], i2658.m_FirstGlyphAdjustments)
  i2658.m_SecondGlyph = i2659[3]
  i2658.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2659[4], i2658.m_SecondGlyphAdjustments)
  i2658.m_IgnoreSpacingAdjustments = !!i2659[5]
  return i2658
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2660 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2661 = data
  i2660.m_FaceIndex = i2661[0]
  i2660.m_FamilyName = i2661[1]
  i2660.m_StyleName = i2661[2]
  i2660.m_PointSize = i2661[3]
  i2660.m_Scale = i2661[4]
  i2660.m_UnitsPerEM = i2661[5]
  i2660.m_LineHeight = i2661[6]
  i2660.m_AscentLine = i2661[7]
  i2660.m_CapLine = i2661[8]
  i2660.m_MeanLine = i2661[9]
  i2660.m_Baseline = i2661[10]
  i2660.m_DescentLine = i2661[11]
  i2660.m_SuperscriptOffset = i2661[12]
  i2660.m_SuperscriptSize = i2661[13]
  i2660.m_SubscriptOffset = i2661[14]
  i2660.m_SubscriptSize = i2661[15]
  i2660.m_UnderlineOffset = i2661[16]
  i2660.m_UnderlineThickness = i2661[17]
  i2660.m_StrikethroughOffset = i2661[18]
  i2660.m_StrikethroughThickness = i2661[19]
  i2660.m_TabWidth = i2661[20]
  return i2660
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2662 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2663 = data
  i2662.useSafeMode = !!i2663[0]
  i2662.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2663[1], i2662.safeModeOptions)
  i2662.timeScale = i2663[2]
  i2662.unscaledTimeScale = i2663[3]
  i2662.useSmoothDeltaTime = !!i2663[4]
  i2662.maxSmoothUnscaledTime = i2663[5]
  i2662.rewindCallbackMode = i2663[6]
  i2662.showUnityEditorReport = !!i2663[7]
  i2662.logBehaviour = i2663[8]
  i2662.drawGizmos = !!i2663[9]
  i2662.defaultRecyclable = !!i2663[10]
  i2662.defaultAutoPlay = i2663[11]
  i2662.defaultUpdateType = i2663[12]
  i2662.defaultTimeScaleIndependent = !!i2663[13]
  i2662.defaultEaseType = i2663[14]
  i2662.defaultEaseOvershootOrAmplitude = i2663[15]
  i2662.defaultEasePeriod = i2663[16]
  i2662.defaultAutoKill = !!i2663[17]
  i2662.defaultLoopType = i2663[18]
  i2662.debugMode = !!i2663[19]
  i2662.debugStoreTargetId = !!i2663[20]
  i2662.showPreviewPanel = !!i2663[21]
  i2662.storeSettingsLocation = i2663[22]
  i2662.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2663[23], i2662.modules)
  i2662.createASMDEF = !!i2663[24]
  i2662.showPlayingTweens = !!i2663[25]
  i2662.showPausedTweens = !!i2663[26]
  return i2662
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2664 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2665 = data
  i2664.logBehaviour = i2665[0]
  i2664.nestedTweenFailureBehaviour = i2665[1]
  return i2664
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2666 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2667 = data
  i2666.showPanel = !!i2667[0]
  i2666.audioEnabled = !!i2667[1]
  i2666.physicsEnabled = !!i2667[2]
  i2666.physics2DEnabled = !!i2667[3]
  i2666.spriteEnabled = !!i2667[4]
  i2666.uiEnabled = !!i2667[5]
  i2666.uiToolkitEnabled = !!i2667[6]
  i2666.textMeshProEnabled = !!i2667[7]
  i2666.tk2DEnabled = !!i2667[8]
  i2666.deAudioEnabled = !!i2667[9]
  i2666.deUnityExtendedEnabled = !!i2667[10]
  i2666.epoOutlineEnabled = !!i2667[11]
  return i2666
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2668 = root || request.c( 'TMPro.TMP_Settings' )
  var i2669 = data
  i2668.assetVersion = i2669[0]
  i2668.m_TextWrappingMode = i2669[1]
  i2668.m_enableKerning = !!i2669[2]
  var i2671 = i2669[3]
  var i2670 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.add(i2671[i + 0]);
  }
  i2668.m_ActiveFontFeatures = i2670
  i2668.m_enableExtraPadding = !!i2669[4]
  i2668.m_enableTintAllSprites = !!i2669[5]
  i2668.m_enableParseEscapeCharacters = !!i2669[6]
  i2668.m_EnableRaycastTarget = !!i2669[7]
  i2668.m_GetFontFeaturesAtRuntime = !!i2669[8]
  i2668.m_missingGlyphCharacter = i2669[9]
  i2668.m_ClearDynamicDataOnBuild = !!i2669[10]
  i2668.m_warningsDisabled = !!i2669[11]
  request.r(i2669[12], i2669[13], 0, i2668, 'm_defaultFontAsset')
  i2668.m_defaultFontAssetPath = i2669[14]
  i2668.m_defaultFontSize = i2669[15]
  i2668.m_defaultAutoSizeMinRatio = i2669[16]
  i2668.m_defaultAutoSizeMaxRatio = i2669[17]
  i2668.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2669[18], i2669[19] )
  i2668.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2669[20], i2669[21] )
  i2668.m_autoSizeTextContainer = !!i2669[22]
  i2668.m_IsTextObjectScaleStatic = !!i2669[23]
  var i2673 = i2669[24]
  var i2672 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2673.length; i += 2) {
  request.r(i2673[i + 0], i2673[i + 1], 1, i2672, '')
  }
  i2668.m_fallbackFontAssets = i2672
  i2668.m_matchMaterialPreset = !!i2669[25]
  i2668.m_HideSubTextObjects = !!i2669[26]
  request.r(i2669[27], i2669[28], 0, i2668, 'm_defaultSpriteAsset')
  i2668.m_defaultSpriteAssetPath = i2669[29]
  i2668.m_enableEmojiSupport = !!i2669[30]
  i2668.m_MissingCharacterSpriteUnicode = i2669[31]
  var i2675 = i2669[32]
  var i2674 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2675.length; i += 2) {
  request.r(i2675[i + 0], i2675[i + 1], 1, i2674, '')
  }
  i2668.m_EmojiFallbackTextAssets = i2674
  i2668.m_defaultColorGradientPresetsPath = i2669[33]
  request.r(i2669[34], i2669[35], 0, i2668, 'm_defaultStyleSheet')
  i2668.m_StyleSheetsResourcePath = i2669[36]
  request.r(i2669[37], i2669[38], 0, i2668, 'm_leadingCharacters')
  request.r(i2669[39], i2669[40], 0, i2668, 'm_followingCharacters')
  i2668.m_UseModernHangulLineBreakingRules = !!i2669[41]
  return i2668
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2678 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2679 = data
  request.r(i2679[0], i2679[1], 0, i2678, 'spriteSheet')
  var i2681 = i2679[2]
  var i2680 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.add(request.d('TMPro.TMP_Sprite', i2681[i + 0]));
  }
  i2678.spriteInfoList = i2680
  var i2683 = i2679[3]
  var i2682 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2683.length; i += 2) {
  request.r(i2683[i + 0], i2683[i + 1], 1, i2682, '')
  }
  i2678.fallbackSpriteAssets = i2682
  var i2685 = i2679[4]
  var i2684 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.add(request.d('TMPro.TMP_SpriteCharacter', i2685[i + 0]));
  }
  i2678.m_SpriteCharacterTable = i2684
  var i2687 = i2679[5]
  var i2686 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.add(request.d('TMPro.TMP_SpriteGlyph', i2687[i + 0]));
  }
  i2678.m_GlyphTable = i2686
  i2678.m_Version = i2679[6]
  i2678.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2679[7], i2678.m_FaceInfo)
  request.r(i2679[8], i2679[9], 0, i2678, 'm_Material')
  return i2678
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2690 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2691 = data
  i2690.name = i2691[0]
  i2690.hashCode = i2691[1]
  i2690.unicode = i2691[2]
  i2690.pivot = new pc.Vec2( i2691[3], i2691[4] )
  request.r(i2691[5], i2691[6], 0, i2690, 'sprite')
  i2690.id = i2691[7]
  i2690.x = i2691[8]
  i2690.y = i2691[9]
  i2690.width = i2691[10]
  i2690.height = i2691[11]
  i2690.xOffset = i2691[12]
  i2690.yOffset = i2691[13]
  i2690.xAdvance = i2691[14]
  i2690.scale = i2691[15]
  return i2690
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2696 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2697 = data
  i2696.m_Name = i2697[0]
  i2696.m_ElementType = i2697[1]
  i2696.m_Unicode = i2697[2]
  i2696.m_GlyphIndex = i2697[3]
  i2696.m_Scale = i2697[4]
  return i2696
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2700 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2701 = data
  request.r(i2701[0], i2701[1], 0, i2700, 'sprite')
  i2700.m_Index = i2701[2]
  i2700.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2701[3], i2700.m_Metrics)
  i2700.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2701[4], i2700.m_GlyphRect)
  i2700.m_Scale = i2701[5]
  i2700.m_AtlasIndex = i2701[6]
  i2700.m_ClassDefinitionType = i2701[7]
  return i2700
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2702 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2703 = data
  var i2705 = i2703[0]
  var i2704 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.add(request.d('TMPro.TMP_Style', i2705[i + 0]));
  }
  i2702.m_StyleList = i2704
  return i2702
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2708 = root || request.c( 'TMPro.TMP_Style' )
  var i2709 = data
  i2708.m_Name = i2709[0]
  i2708.m_HashCode = i2709[1]
  i2708.m_OpeningDefinition = i2709[2]
  i2708.m_ClosingDefinition = i2709[3]
  i2708.m_OpeningTagArray = i2709[4]
  i2708.m_ClosingTagArray = i2709[5]
  return i2708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2711 = data
  var i2713 = i2711[0]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2713[i + 0]) );
  }
  i2710.files = i2712
  i2710.componentToPrefabIds = i2711[1]
  return i2710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2717 = data
  i2716.path = i2717[0]
  request.r(i2717[1], i2717[2], 0, i2716, 'unityObject')
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2719 = data
  var i2721 = i2719[0]
  var i2720 = []
  for(var i = 0; i < i2721.length; i += 1) {
    i2720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2721[i + 0]) );
  }
  i2718.scriptsExecutionOrder = i2720
  var i2723 = i2719[1]
  var i2722 = []
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2723[i + 0]) );
  }
  i2718.sortingLayers = i2722
  var i2725 = i2719[2]
  var i2724 = []
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2725[i + 0]) );
  }
  i2718.cullingLayers = i2724
  i2718.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2719[3], i2718.timeSettings)
  i2718.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2719[4], i2718.physicsSettings)
  i2718.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2719[5], i2718.physics2DSettings)
  i2718.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2719[6], i2718.qualitySettings)
  i2718.enableRealtimeShadows = !!i2719[7]
  i2718.enableAutoInstancing = !!i2719[8]
  i2718.enableStaticBatching = !!i2719[9]
  i2718.enableDynamicBatching = !!i2719[10]
  i2718.lightmapEncodingQuality = i2719[11]
  i2718.desiredColorSpace = i2719[12]
  var i2727 = i2719[13]
  var i2726 = []
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.push( i2727[i + 0] );
  }
  i2718.allTags = i2726
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2731 = data
  i2730.name = i2731[0]
  i2730.value = i2731[1]
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2735 = data
  i2734.id = i2735[0]
  i2734.name = i2735[1]
  i2734.value = i2735[2]
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2739 = data
  i2738.id = i2739[0]
  i2738.name = i2739[1]
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2741 = data
  i2740.fixedDeltaTime = i2741[0]
  i2740.maximumDeltaTime = i2741[1]
  i2740.timeScale = i2741[2]
  i2740.maximumParticleTimestep = i2741[3]
  return i2740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2743 = data
  i2742.gravity = new pc.Vec3( i2743[0], i2743[1], i2743[2] )
  i2742.defaultSolverIterations = i2743[3]
  i2742.bounceThreshold = i2743[4]
  i2742.autoSyncTransforms = !!i2743[5]
  i2742.autoSimulation = !!i2743[6]
  var i2745 = i2743[7]
  var i2744 = []
  for(var i = 0; i < i2745.length; i += 1) {
    i2744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2745[i + 0]) );
  }
  i2742.collisionMatrix = i2744
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2749 = data
  i2748.enabled = !!i2749[0]
  i2748.layerId = i2749[1]
  i2748.otherLayerId = i2749[2]
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2751 = data
  request.r(i2751[0], i2751[1], 0, i2750, 'material')
  i2750.gravity = new pc.Vec2( i2751[2], i2751[3] )
  i2750.positionIterations = i2751[4]
  i2750.velocityIterations = i2751[5]
  i2750.velocityThreshold = i2751[6]
  i2750.maxLinearCorrection = i2751[7]
  i2750.maxAngularCorrection = i2751[8]
  i2750.maxTranslationSpeed = i2751[9]
  i2750.maxRotationSpeed = i2751[10]
  i2750.baumgarteScale = i2751[11]
  i2750.baumgarteTOIScale = i2751[12]
  i2750.timeToSleep = i2751[13]
  i2750.linearSleepTolerance = i2751[14]
  i2750.angularSleepTolerance = i2751[15]
  i2750.defaultContactOffset = i2751[16]
  i2750.autoSimulation = !!i2751[17]
  i2750.queriesHitTriggers = !!i2751[18]
  i2750.queriesStartInColliders = !!i2751[19]
  i2750.callbacksOnDisable = !!i2751[20]
  i2750.reuseCollisionCallbacks = !!i2751[21]
  i2750.autoSyncTransforms = !!i2751[22]
  var i2753 = i2751[23]
  var i2752 = []
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2753[i + 0]) );
  }
  i2750.collisionMatrix = i2752
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2757 = data
  i2756.enabled = !!i2757[0]
  i2756.layerId = i2757[1]
  i2756.otherLayerId = i2757[2]
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2759 = data
  var i2761 = i2759[0]
  var i2760 = []
  for(var i = 0; i < i2761.length; i += 1) {
    i2760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2761[i + 0]) );
  }
  i2758.qualityLevels = i2760
  var i2763 = i2759[1]
  var i2762 = []
  for(var i = 0; i < i2763.length; i += 1) {
    i2762.push( i2763[i + 0] );
  }
  i2758.names = i2762
  i2758.shadows = i2759[2]
  i2758.anisotropicFiltering = i2759[3]
  i2758.antiAliasing = i2759[4]
  i2758.lodBias = i2759[5]
  i2758.shadowCascades = i2759[6]
  i2758.shadowDistance = i2759[7]
  i2758.shadowmaskMode = i2759[8]
  i2758.shadowProjection = i2759[9]
  i2758.shadowResolution = i2759[10]
  i2758.softParticles = !!i2759[11]
  i2758.softVegetation = !!i2759[12]
  i2758.activeColorSpace = i2759[13]
  i2758.desiredColorSpace = i2759[14]
  i2758.masterTextureLimit = i2759[15]
  i2758.maxQueuedFrames = i2759[16]
  i2758.particleRaycastBudget = i2759[17]
  i2758.pixelLightCount = i2759[18]
  i2758.realtimeReflectionProbes = !!i2759[19]
  i2758.shadowCascade2Split = i2759[20]
  i2758.shadowCascade4Split = new pc.Vec3( i2759[21], i2759[22], i2759[23] )
  i2758.streamingMipmapsActive = !!i2759[24]
  i2758.vSyncCount = i2759[25]
  i2758.asyncUploadBufferSize = i2759[26]
  i2758.asyncUploadTimeSlice = i2759[27]
  i2758.billboardsFaceCameraPosition = !!i2759[28]
  i2758.shadowNearPlaneOffset = i2759[29]
  i2758.streamingMipmapsMemoryBudget = i2759[30]
  i2758.maximumLODLevel = i2759[31]
  i2758.streamingMipmapsAddAllCameras = !!i2759[32]
  i2758.streamingMipmapsMaxLevelReduction = i2759[33]
  i2758.streamingMipmapsRenderersPerFrame = i2759[34]
  i2758.resolutionScalingFixedDPIFactor = i2759[35]
  i2758.streamingMipmapsMaxFileIORequests = i2759[36]
  i2758.currentQualityLevel = i2759[37]
  return i2758
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2766 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2767 = data
  i2766.m_GlyphIndex = i2767[0]
  i2766.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2767[1], i2766.m_GlyphValueRecord)
  return i2766
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2768 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2769 = data
  i2768.m_XCoordinate = i2769[0]
  i2768.m_YCoordinate = i2769[1]
  return i2768
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2770 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2771 = data
  i2770.m_XPositionAdjustment = i2771[0]
  i2770.m_YPositionAdjustment = i2771[1]
  return i2770
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2772 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2773 = data
  i2772.xPlacement = i2773[0]
  i2772.yPlacement = i2773[1]
  i2772.xAdvance = i2773[2]
  i2772.yAdvance = i2773[3]
  return i2772
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2774 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2775 = data
  i2774.m_XPlacement = i2775[0]
  i2774.m_YPlacement = i2775[1]
  i2774.m_XAdvance = i2775[2]
  i2774.m_YAdvance = i2775[3]
  return i2774
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[72],"73":[28],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[82],"84":[82],"85":[82],"86":[82],"87":[82],"88":[82],"89":[82],"90":[82],"91":[82],"92":[82],"93":[82],"94":[82],"95":[28],"96":[97],"98":[99],"100":[99],"27":[13],"101":[102],"103":[20],"104":[105],"58":[20],"20":[105],"24":[20],"106":[20],"107":[105],"108":[105],"57":[105],"109":[13],"110":[16,13],"111":[97],"112":[16,13],"113":[25,97],"114":[97],"115":[97,116],"117":[75],"118":[82],"119":[120],"121":[122],"123":[5],"124":[28],"125":[126],"127":[13],"128":[97,13],"32":[13,16],"129":[13],"130":[16,13],"131":[97],"132":[16,13],"133":[13],"134":[135],"136":[135],"137":[135],"138":[13],"139":[13],"30":[27],"15":[16,13],"140":[13],"29":[27],"141":[13],"142":[13],"143":[13],"144":[13],"145":[13],"146":[13],"147":[13],"148":[13],"149":[13],"150":[16,13],"151":[13],"152":[13],"153":[13],"36":[13],"154":[16,13],"155":[13],"156":[54],"157":[54],"55":[54],"158":[54],"159":[28],"160":[28]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","WaterSplash","UnityEngine.SphereCollider","ItemDraggable","Paper","ItemMoveToTarget","UnityEngine.GameObject","ItemDragRaycastTarget","UnityEngine.Animator","ItemSound","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","UnityEngine.UI.Slider","ProgressSlider","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","InputManager","HandTutManager","Item","Spartula","Pan","Ply_ToggleEvent","SortChildByZPos","PhaseManager","ItemTypeDoneManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.CapsuleCollider","ItemStirring","ItemDragChildRotator","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BrushMaskUnit","UnityEngine.SpriteMask","OilBrush","ItemClickable","UnityEngine.Collider","ItemDragSpriteMaskPainter","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "36.0";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "5028";

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

Deserializers.buildID = "8a833e3b-1e45-4f0e-87a5-22d21ec59625";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

