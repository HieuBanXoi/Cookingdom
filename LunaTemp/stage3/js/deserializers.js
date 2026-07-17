var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2124 = root || request.c( 'UnityEngine.JointSpring' )
  var i2125 = data
  i2124.spring = i2125[0]
  i2124.damper = i2125[1]
  i2124.targetPosition = i2125[2]
  return i2124
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2126 = root || request.c( 'UnityEngine.JointMotor' )
  var i2127 = data
  i2126.m_TargetVelocity = i2127[0]
  i2126.m_Force = i2127[1]
  i2126.m_FreeSpin = i2127[2]
  return i2126
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2128 = root || request.c( 'UnityEngine.JointLimits' )
  var i2129 = data
  i2128.m_Min = i2129[0]
  i2128.m_Max = i2129[1]
  i2128.m_Bounciness = i2129[2]
  i2128.m_BounceMinVelocity = i2129[3]
  i2128.m_ContactDistance = i2129[4]
  i2128.minBounce = i2129[5]
  i2128.maxBounce = i2129[6]
  return i2128
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2130 = root || request.c( 'UnityEngine.JointDrive' )
  var i2131 = data
  i2130.m_PositionSpring = i2131[0]
  i2130.m_PositionDamper = i2131[1]
  i2130.m_MaximumForce = i2131[2]
  i2130.m_UseAcceleration = i2131[3]
  return i2130
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2132 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2133 = data
  i2132.m_Spring = i2133[0]
  i2132.m_Damper = i2133[1]
  return i2132
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2134 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2135 = data
  i2134.m_Limit = i2135[0]
  i2134.m_Bounciness = i2135[1]
  i2134.m_ContactDistance = i2135[2]
  return i2134
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2136 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2137 = data
  i2136.m_ExtremumSlip = i2137[0]
  i2136.m_ExtremumValue = i2137[1]
  i2136.m_AsymptoteSlip = i2137[2]
  i2136.m_AsymptoteValue = i2137[3]
  i2136.m_Stiffness = i2137[4]
  return i2136
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2138 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2139 = data
  i2138.m_LowerAngle = i2139[0]
  i2138.m_UpperAngle = i2139[1]
  return i2138
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2140 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2141 = data
  i2140.m_MotorSpeed = i2141[0]
  i2140.m_MaximumMotorTorque = i2141[1]
  return i2140
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2142 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2143 = data
  i2142.m_DampingRatio = i2143[0]
  i2142.m_Frequency = i2143[1]
  i2142.m_Angle = i2143[2]
  return i2142
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2144 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2145 = data
  i2144.m_LowerTranslation = i2145[0]
  i2144.m_UpperTranslation = i2145[1]
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2146 = root || new pc.UnityMaterial()
  var i2147 = data
  i2146.name = i2147[0]
  request.r(i2147[1], i2147[2], 0, i2146, 'shader')
  i2146.renderQueue = i2147[3]
  i2146.enableInstancing = !!i2147[4]
  var i2149 = i2147[5]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2149[i + 0]) );
  }
  i2146.floatParameters = i2148
  var i2151 = i2147[6]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2151[i + 0]) );
  }
  i2146.colorParameters = i2150
  var i2153 = i2147[7]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2153[i + 0]) );
  }
  i2146.vectorParameters = i2152
  var i2155 = i2147[8]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2155[i + 0]) );
  }
  i2146.textureParameters = i2154
  var i2157 = i2147[9]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2157[i + 0]) );
  }
  i2146.materialFlags = i2156
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2161 = data
  i2160.name = i2161[0]
  i2160.value = i2161[1]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2165 = data
  i2164.name = i2165[0]
  i2164.value = new pc.Color(i2165[1], i2165[2], i2165[3], i2165[4])
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2169 = data
  i2168.name = i2169[0]
  i2168.value = new pc.Vec4( i2169[1], i2169[2], i2169[3], i2169[4] )
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2173 = data
  i2172.name = i2173[0]
  request.r(i2173[1], i2173[2], 0, i2172, 'value')
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2177 = data
  i2176.name = i2177[0]
  i2176.enabled = !!i2177[1]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2179 = data
  i2178.name = i2179[0]
  i2178.width = i2179[1]
  i2178.height = i2179[2]
  i2178.mipmapCount = i2179[3]
  i2178.anisoLevel = i2179[4]
  i2178.filterMode = i2179[5]
  i2178.hdr = !!i2179[6]
  i2178.format = i2179[7]
  i2178.wrapMode = i2179[8]
  i2178.alphaIsTransparency = !!i2179[9]
  i2178.alphaSource = i2179[10]
  i2178.graphicsFormat = i2179[11]
  i2178.sRGBTexture = !!i2179[12]
  i2178.desiredColorSpace = i2179[13]
  i2178.wrapU = i2179[14]
  i2178.wrapV = i2179[15]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2181 = data
  i2180.position = new pc.Vec3( i2181[0], i2181[1], i2181[2] )
  i2180.scale = new pc.Vec3( i2181[3], i2181[4], i2181[5] )
  i2180.rotation = new pc.Quat(i2181[6], i2181[7], i2181[8], i2181[9])
  return i2180
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i2182 = root || request.c( 'HeartEffect' )
  var i2183 = data
  i2182.defaultLifeTime = i2183[0]
  request.r(i2183[1], i2183[2], 0, i2182, 'tf')
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2185 = data
  i2184.color = new pc.Color(i2185[0], i2185[1], i2185[2], i2185[3])
  request.r(i2185[4], i2185[5], 0, i2184, 'sprite')
  i2184.flipX = !!i2185[6]
  i2184.flipY = !!i2185[7]
  i2184.drawMode = i2185[8]
  i2184.size = new pc.Vec2( i2185[9], i2185[10] )
  i2184.tileMode = i2185[11]
  i2184.adaptiveModeThreshold = i2185[12]
  i2184.maskInteraction = i2185[13]
  i2184.spriteSortPoint = i2185[14]
  i2184.enabled = !!i2185[15]
  request.r(i2185[16], i2185[17], 0, i2184, 'sharedMaterial')
  var i2187 = i2185[18]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 2) {
  request.r(i2187[i + 0], i2187[i + 1], 2, i2186, '')
  }
  i2184.sharedMaterials = i2186
  i2184.receiveShadows = !!i2185[19]
  i2184.shadowCastingMode = i2185[20]
  i2184.sortingLayerID = i2185[21]
  i2184.sortingOrder = i2185[22]
  i2184.lightmapIndex = i2185[23]
  i2184.lightmapSceneIndex = i2185[24]
  i2184.lightmapScaleOffset = new pc.Vec4( i2185[25], i2185[26], i2185[27], i2185[28] )
  i2184.lightProbeUsage = i2185[29]
  i2184.reflectionProbeUsage = i2185[30]
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2191 = data
  i2190.name = i2191[0]
  i2190.tagId = i2191[1]
  i2190.enabled = !!i2191[2]
  i2190.isStatic = !!i2191[3]
  i2190.layer = i2191[4]
  return i2190
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i2192 = root || request.c( 'HeartBreakEffect' )
  var i2193 = data
  i2192.defaultLifeTime = i2193[0]
  request.r(i2193[1], i2193[2], 0, i2192, 'tf')
  return i2192
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i2194 = root || request.c( 'BlinkEffect' )
  var i2195 = data
  request.r(i2195[0], i2195[1], 0, i2194, 'tf')
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2197 = data
  request.r(i2197[0], i2197[1], 0, i2196, 'mesh')
  i2196.meshCount = i2197[2]
  i2196.activeVertexStreamsCount = i2197[3]
  i2196.alignment = i2197[4]
  i2196.renderMode = i2197[5]
  i2196.sortMode = i2197[6]
  i2196.lengthScale = i2197[7]
  i2196.velocityScale = i2197[8]
  i2196.cameraVelocityScale = i2197[9]
  i2196.normalDirection = i2197[10]
  i2196.sortingFudge = i2197[11]
  i2196.minParticleSize = i2197[12]
  i2196.maxParticleSize = i2197[13]
  i2196.pivot = new pc.Vec3( i2197[14], i2197[15], i2197[16] )
  request.r(i2197[17], i2197[18], 0, i2196, 'trailMaterial')
  i2196.applyActiveColorSpace = !!i2197[19]
  i2196.enabled = !!i2197[20]
  request.r(i2197[21], i2197[22], 0, i2196, 'sharedMaterial')
  var i2199 = i2197[23]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 2) {
  request.r(i2199[i + 0], i2199[i + 1], 2, i2198, '')
  }
  i2196.sharedMaterials = i2198
  i2196.receiveShadows = !!i2197[24]
  i2196.shadowCastingMode = i2197[25]
  i2196.sortingLayerID = i2197[26]
  i2196.sortingOrder = i2197[27]
  i2196.lightmapIndex = i2197[28]
  i2196.lightmapSceneIndex = i2197[29]
  i2196.lightmapScaleOffset = new pc.Vec4( i2197[30], i2197[31], i2197[32], i2197[33] )
  i2196.lightProbeUsage = i2197[34]
  i2196.reflectionProbeUsage = i2197[35]
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2201 = data
  i2200.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2201[0], i2200.main)
  i2200.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2201[1], i2200.colorBySpeed)
  i2200.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2201[2], i2200.colorOverLifetime)
  i2200.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2201[3], i2200.emission)
  i2200.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2201[4], i2200.rotationBySpeed)
  i2200.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2201[5], i2200.rotationOverLifetime)
  i2200.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2201[6], i2200.shape)
  i2200.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2201[7], i2200.sizeBySpeed)
  i2200.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2201[8], i2200.sizeOverLifetime)
  i2200.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2201[9], i2200.textureSheetAnimation)
  i2200.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2201[10], i2200.velocityOverLifetime)
  i2200.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2201[11], i2200.noise)
  i2200.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2201[12], i2200.inheritVelocity)
  i2200.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2201[13], i2200.forceOverLifetime)
  i2200.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2201[14], i2200.limitVelocityOverLifetime)
  i2200.useAutoRandomSeed = !!i2201[15]
  i2200.randomSeed = i2201[16]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2202 = root || new pc.ParticleSystemMain()
  var i2203 = data
  i2202.duration = i2203[0]
  i2202.loop = !!i2203[1]
  i2202.prewarm = !!i2203[2]
  i2202.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[3], i2202.startDelay)
  i2202.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[4], i2202.startLifetime)
  i2202.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[5], i2202.startSpeed)
  i2202.startSize3D = !!i2203[6]
  i2202.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[7], i2202.startSizeX)
  i2202.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[8], i2202.startSizeY)
  i2202.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[9], i2202.startSizeZ)
  i2202.startRotation3D = !!i2203[10]
  i2202.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[11], i2202.startRotationX)
  i2202.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[12], i2202.startRotationY)
  i2202.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[13], i2202.startRotationZ)
  i2202.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2203[14], i2202.startColor)
  i2202.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[15], i2202.gravityModifier)
  i2202.simulationSpace = i2203[16]
  request.r(i2203[17], i2203[18], 0, i2202, 'customSimulationSpace')
  i2202.simulationSpeed = i2203[19]
  i2202.useUnscaledTime = !!i2203[20]
  i2202.scalingMode = i2203[21]
  i2202.playOnAwake = !!i2203[22]
  i2202.maxParticles = i2203[23]
  i2202.emitterVelocityMode = i2203[24]
  i2202.stopAction = i2203[25]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2204 = root || new pc.MinMaxCurve()
  var i2205 = data
  i2204.mode = i2205[0]
  i2204.curveMin = new pc.AnimationCurve( { keys_flow: i2205[1] } )
  i2204.curveMax = new pc.AnimationCurve( { keys_flow: i2205[2] } )
  i2204.curveMultiplier = i2205[3]
  i2204.constantMin = i2205[4]
  i2204.constantMax = i2205[5]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2206 = root || new pc.MinMaxGradient()
  var i2207 = data
  i2206.mode = i2207[0]
  i2206.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2207[1], i2206.gradientMin)
  i2206.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2207[2], i2206.gradientMax)
  i2206.colorMin = new pc.Color(i2207[3], i2207[4], i2207[5], i2207[6])
  i2206.colorMax = new pc.Color(i2207[7], i2207[8], i2207[9], i2207[10])
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2209 = data
  i2208.mode = i2209[0]
  var i2211 = i2209[1]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2211[i + 0]) );
  }
  i2208.colorKeys = i2210
  var i2213 = i2209[2]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2213[i + 0]) );
  }
  i2208.alphaKeys = i2212
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2214 = root || new pc.ParticleSystemColorBySpeed()
  var i2215 = data
  i2214.enabled = !!i2215[0]
  i2214.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2215[1], i2214.color)
  i2214.range = new pc.Vec2( i2215[2], i2215[3] )
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2219 = data
  i2218.color = new pc.Color(i2219[0], i2219[1], i2219[2], i2219[3])
  i2218.time = i2219[4]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2223 = data
  i2222.alpha = i2223[0]
  i2222.time = i2223[1]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2224 = root || new pc.ParticleSystemColorOverLifetime()
  var i2225 = data
  i2224.enabled = !!i2225[0]
  i2224.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2225[1], i2224.color)
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2226 = root || new pc.ParticleSystemEmitter()
  var i2227 = data
  i2226.enabled = !!i2227[0]
  i2226.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[1], i2226.rateOverTime)
  i2226.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[2], i2226.rateOverDistance)
  var i2229 = i2227[3]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2229[i + 0]) );
  }
  i2226.bursts = i2228
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2232 = root || new pc.ParticleSystemBurst()
  var i2233 = data
  i2232.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[0], i2232.count)
  i2232.cycleCount = i2233[1]
  i2232.minCount = i2233[2]
  i2232.maxCount = i2233[3]
  i2232.repeatInterval = i2233[4]
  i2232.time = i2233[5]
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2234 = root || new pc.ParticleSystemRotationBySpeed()
  var i2235 = data
  i2234.enabled = !!i2235[0]
  i2234.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2235[1], i2234.x)
  i2234.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2235[2], i2234.y)
  i2234.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2235[3], i2234.z)
  i2234.separateAxes = !!i2235[4]
  i2234.range = new pc.Vec2( i2235[5], i2235[6] )
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2236 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2237 = data
  i2236.enabled = !!i2237[0]
  i2236.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2237[1], i2236.x)
  i2236.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2237[2], i2236.y)
  i2236.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2237[3], i2236.z)
  i2236.separateAxes = !!i2237[4]
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2238 = root || new pc.ParticleSystemShape()
  var i2239 = data
  i2238.enabled = !!i2239[0]
  i2238.shapeType = i2239[1]
  i2238.randomDirectionAmount = i2239[2]
  i2238.sphericalDirectionAmount = i2239[3]
  i2238.randomPositionAmount = i2239[4]
  i2238.alignToDirection = !!i2239[5]
  i2238.radius = i2239[6]
  i2238.radiusMode = i2239[7]
  i2238.radiusSpread = i2239[8]
  i2238.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2239[9], i2238.radiusSpeed)
  i2238.radiusThickness = i2239[10]
  i2238.angle = i2239[11]
  i2238.length = i2239[12]
  i2238.boxThickness = new pc.Vec3( i2239[13], i2239[14], i2239[15] )
  i2238.meshShapeType = i2239[16]
  request.r(i2239[17], i2239[18], 0, i2238, 'mesh')
  request.r(i2239[19], i2239[20], 0, i2238, 'meshRenderer')
  request.r(i2239[21], i2239[22], 0, i2238, 'skinnedMeshRenderer')
  i2238.useMeshMaterialIndex = !!i2239[23]
  i2238.meshMaterialIndex = i2239[24]
  i2238.useMeshColors = !!i2239[25]
  i2238.normalOffset = i2239[26]
  i2238.arc = i2239[27]
  i2238.arcMode = i2239[28]
  i2238.arcSpread = i2239[29]
  i2238.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2239[30], i2238.arcSpeed)
  i2238.donutRadius = i2239[31]
  i2238.position = new pc.Vec3( i2239[32], i2239[33], i2239[34] )
  i2238.rotation = new pc.Vec3( i2239[35], i2239[36], i2239[37] )
  i2238.scale = new pc.Vec3( i2239[38], i2239[39], i2239[40] )
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2240 = root || new pc.ParticleSystemSizeBySpeed()
  var i2241 = data
  i2240.enabled = !!i2241[0]
  i2240.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2241[1], i2240.x)
  i2240.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2241[2], i2240.y)
  i2240.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2241[3], i2240.z)
  i2240.separateAxes = !!i2241[4]
  i2240.range = new pc.Vec2( i2241[5], i2241[6] )
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2242 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2243 = data
  i2242.enabled = !!i2243[0]
  i2242.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2243[1], i2242.x)
  i2242.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2243[2], i2242.y)
  i2242.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2243[3], i2242.z)
  i2242.separateAxes = !!i2243[4]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2244 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2245 = data
  i2244.enabled = !!i2245[0]
  i2244.mode = i2245[1]
  i2244.animation = i2245[2]
  i2244.numTilesX = i2245[3]
  i2244.numTilesY = i2245[4]
  i2244.useRandomRow = !!i2245[5]
  i2244.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[6], i2244.frameOverTime)
  i2244.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[7], i2244.startFrame)
  i2244.cycleCount = i2245[8]
  i2244.rowIndex = i2245[9]
  i2244.flipU = i2245[10]
  i2244.flipV = i2245[11]
  i2244.spriteCount = i2245[12]
  var i2247 = i2245[13]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 2) {
  request.r(i2247[i + 0], i2247[i + 1], 2, i2246, '')
  }
  i2244.sprites = i2246
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2250 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2251 = data
  i2250.enabled = !!i2251[0]
  i2250.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[1], i2250.x)
  i2250.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[2], i2250.y)
  i2250.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[3], i2250.z)
  i2250.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[4], i2250.radial)
  i2250.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[5], i2250.speedModifier)
  i2250.space = i2251[6]
  i2250.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[7], i2250.orbitalX)
  i2250.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[8], i2250.orbitalY)
  i2250.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[9], i2250.orbitalZ)
  i2250.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[10], i2250.orbitalOffsetX)
  i2250.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[11], i2250.orbitalOffsetY)
  i2250.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[12], i2250.orbitalOffsetZ)
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2252 = root || new pc.ParticleSystemNoise()
  var i2253 = data
  i2252.enabled = !!i2253[0]
  i2252.separateAxes = !!i2253[1]
  i2252.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[2], i2252.strengthX)
  i2252.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[3], i2252.strengthY)
  i2252.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[4], i2252.strengthZ)
  i2252.frequency = i2253[5]
  i2252.damping = !!i2253[6]
  i2252.octaveCount = i2253[7]
  i2252.octaveMultiplier = i2253[8]
  i2252.octaveScale = i2253[9]
  i2252.quality = i2253[10]
  i2252.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[11], i2252.scrollSpeed)
  i2252.scrollSpeedMultiplier = i2253[12]
  i2252.remapEnabled = !!i2253[13]
  i2252.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[14], i2252.remapX)
  i2252.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[15], i2252.remapY)
  i2252.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[16], i2252.remapZ)
  i2252.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[17], i2252.positionAmount)
  i2252.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[18], i2252.rotationAmount)
  i2252.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[19], i2252.sizeAmount)
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2254 = root || new pc.ParticleSystemInheritVelocity()
  var i2255 = data
  i2254.enabled = !!i2255[0]
  i2254.mode = i2255[1]
  i2254.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2255[2], i2254.curve)
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2256 = root || new pc.ParticleSystemForceOverLifetime()
  var i2257 = data
  i2256.enabled = !!i2257[0]
  i2256.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[1], i2256.x)
  i2256.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[2], i2256.y)
  i2256.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[3], i2256.z)
  i2256.space = i2257[4]
  i2256.randomized = !!i2257[5]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2258 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2259 = data
  i2258.enabled = !!i2259[0]
  i2258.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2259[1], i2258.limit)
  i2258.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2259[2], i2258.limitX)
  i2258.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2259[3], i2258.limitY)
  i2258.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2259[4], i2258.limitZ)
  i2258.dampen = i2259[5]
  i2258.separateAxes = !!i2259[6]
  i2258.space = i2259[7]
  i2258.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2259[8], i2258.drag)
  i2258.multiplyDragByParticleSize = !!i2259[9]
  i2258.multiplyDragByParticleVelocity = !!i2259[10]
  return i2258
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i2260 = root || request.c( 'StarExploreFX' )
  var i2261 = data
  request.r(i2261[0], i2261[1], 0, i2260, 'tf')
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2263 = data
  i2262.pivot = new pc.Vec2( i2263[0], i2263[1] )
  i2262.anchorMin = new pc.Vec2( i2263[2], i2263[3] )
  i2262.anchorMax = new pc.Vec2( i2263[4], i2263[5] )
  i2262.sizeDelta = new pc.Vec2( i2263[6], i2263[7] )
  i2262.anchoredPosition3D = new pc.Vec3( i2263[8], i2263[9], i2263[10] )
  i2262.rotation = new pc.Quat(i2263[11], i2263[12], i2263[13], i2263[14])
  i2262.scale = new pc.Vec3( i2263[15], i2263[16], i2263[17] )
  return i2262
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i2264 = root || request.c( 'ClockTimer' )
  var i2265 = data
  request.r(i2265[0], i2265[1], 0, i2264, 'fillImage')
  request.r(i2265[2], i2265[3], 0, i2264, 'tf')
  i2264.spawnZoomDuration = i2265[4]
  i2264.despawnZoomDuration = i2265[5]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2267 = data
  i2266.cullTransparentMesh = !!i2267[0]
  return i2266
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.UI.Image' )
  var i2269 = data
  request.r(i2269[0], i2269[1], 0, i2268, 'm_Sprite')
  i2268.m_Type = i2269[2]
  i2268.m_PreserveAspect = !!i2269[3]
  i2268.m_FillCenter = !!i2269[4]
  i2268.m_FillMethod = i2269[5]
  i2268.m_FillAmount = i2269[6]
  i2268.m_FillClockwise = !!i2269[7]
  i2268.m_FillOrigin = i2269[8]
  i2268.m_UseSpriteMesh = !!i2269[9]
  i2268.m_PixelsPerUnitMultiplier = i2269[10]
  request.r(i2269[11], i2269[12], 0, i2268, 'm_Material')
  i2268.m_Maskable = !!i2269[13]
  i2268.m_Color = new pc.Color(i2269[14], i2269[15], i2269[16], i2269[17])
  i2268.m_RaycastTarget = !!i2269[18]
  i2268.m_RaycastPadding = new pc.Vec4( i2269[19], i2269[20], i2269[21], i2269[22] )
  return i2268
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i2270 = root || request.c( 'WaterSplash' )
  var i2271 = data
  request.r(i2271[0], i2271[1], 0, i2270, 'tf')
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2273 = data
  i2272.center = new pc.Vec3( i2273[0], i2273[1], i2273[2] )
  i2272.radius = i2273[3]
  i2272.enabled = !!i2273[4]
  i2272.isTrigger = !!i2273[5]
  request.r(i2273[6], i2273[7], 0, i2272, 'material')
  return i2272
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i2274 = root || request.c( 'ItemDraggable' )
  var i2275 = data
  i2274.isDraggable = !!i2275[0]
  request.r(i2275[1], i2275[2], 0, i2274, 'returnTransform')
  i2274.setParentToReturnTransform = !!i2275[3]
  i2274.returnToStartOnDragFailed = !!i2275[4]
  i2274.returnToExactReturnTransformPosition = !!i2275[5]
  i2274.cacheStartPosWhenStart = !!i2275[6]
  i2274.targetItemType = i2275[7]
  request.r(i2275[8], i2275[9], 0, i2274, 'item')
  i2274.checkState = !!i2275[10]
  request.r(i2275[11], i2275[12], 0, i2274, 'shadowObject')
  i2274.playReturnToStartFinishSound = !!i2275[13]
  i2274.returnToStartFinishFxType = i2275[14]
  i2274.spawnBreakHeartOnDropFail = !!i2275[15]
  i2274.playBeginDragSound = !!i2275[16]
  i2274.beginDragFxType = i2275[17]
  i2274.liftOffset = i2275[18]
  i2274.dragScaleMultiplier = i2275[19]
  i2274.dragScaleDuration = i2275[20]
  i2274.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i2275[21], i2274.onBeginDrag)
  i2274.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i2275[22], i2274.onDropSuccess)
  i2274.onDropFail = request.d('UnityEngine.Events.UnityEvent', i2275[23], i2274.onDropFail)
  i2274.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i2275[24], i2274.onReturnToStartComplete)
  return i2274
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2276 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2277 = data
  i2276.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2277[0], i2276.m_PersistentCalls)
  return i2276
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2278 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2279 = data
  var i2281 = i2279[0]
  var i2280 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.add(request.d('UnityEngine.Events.PersistentCall', i2281[i + 0]));
  }
  i2278.m_Calls = i2280
  return i2278
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2285 = data
  request.r(i2285[0], i2285[1], 0, i2284, 'm_Target')
  i2284.m_TargetAssemblyTypeName = i2285[2]
  i2284.m_MethodName = i2285[3]
  i2284.m_Mode = i2285[4]
  i2284.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2285[5], i2284.m_Arguments)
  i2284.m_CallState = i2285[6]
  return i2284
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2287 = data
  request.r(i2287[0], i2287[1], 0, i2286, 'm_ObjectArgument')
  i2286.m_ObjectArgumentAssemblyTypeName = i2287[2]
  i2286.m_IntArgument = i2287[3]
  i2286.m_FloatArgument = i2287[4]
  i2286.m_StringArgument = i2287[5]
  i2286.m_BoolArgument = !!i2287[6]
  return i2286
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i2288 = root || request.c( 'ItemMoveToTarget' )
  var i2289 = data
  request.r(i2289[0], i2289[1], 0, i2288, 'defaultTarget')
  i2288.duration = i2289[2]
  i2288.useAnimationCurve = !!i2289[3]
  i2288.moveCurve = new pc.AnimationCurve( { keys_flow: i2289[4] } )
  i2288.easeType = i2289[5]
  i2288.moveType = i2289[6]
  i2288.jumpPower = i2289[7]
  i2288.numJumps = i2289[8]
  i2288.rotate360DuringJump = !!i2289[9]
  i2288.flipRotate = !!i2289[10]
  i2288.angleRotate = i2289[11]
  i2288.scaleOnMove = !!i2289[12]
  i2288.endScaleMultiplier = i2289[13]
  i2288.setParentToTarget = !!i2289[14]
  i2288.onComplete = request.d('UnityEngine.Events.UnityEvent', i2289[15], i2288.onComplete)
  i2288.lockInputWhileMoving = !!i2289[16]
  i2288.resetParentBeforeMove = !!i2289[17]
  return i2288
}

Deserializers["Paper"] = function (request, data, root) {
  var i2290 = root || request.c( 'Paper' )
  var i2291 = data
  i2290.isUse = !!i2291[0]
  request.r(i2291[1], i2291[2], 0, i2290, 'paper')
  request.r(i2291[3], i2291[4], 0, i2290, 'paperTrash')
  request.r(i2291[5], i2291[6], 0, i2290, 'itemDragRaycastTarget')
  request.r(i2291[7], i2291[8], 0, i2290, 'curentCollider')
  i2290.isDone = !!i2291[9]
  i2290.onProcess = !!i2291[10]
  i2290.requireMatchingTargetTypeForHandTut = !!i2291[11]
  request.r(i2291[12], i2291[13], 0, i2290, 'itemDraggable')
  request.r(i2291[14], i2291[15], 0, i2290, 'itemClickable')
  request.r(i2291[16], i2291[17], 0, i2290, 'itemStirring')
  request.r(i2291[18], i2291[19], 0, i2290, 'itemKnifeSpriteMaskCutter')
  request.r(i2291[20], i2291[21], 0, i2290, 'itemSpriteMaskPainter')
  request.r(i2291[22], i2291[23], 0, i2290, 'itemDragSpriteMaskPainter')
  request.r(i2291[24], i2291[25], 0, i2290, 'itemMoveToTarget')
  request.r(i2291[26], i2291[27], 0, i2290, 'animator')
  i2290.itemType = i2291[28]
  request.r(i2291[29], i2291[30], 0, i2290, 'spriteRenderer')
  i2290.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2291[31], i2290.onKnifeIn)
  request.r(i2291[32], i2291[33], 0, i2290, 'knifePos')
  i2290.heartEffectScale = i2291[34]
  i2290.breakHeartEffectScale = i2291[35]
  i2290.blinkEffectScale = i2291[36]
  i2290.mergeEffectScale = i2291[37]
  i2290.playMoveToTargetFinishSound = !!i2291[38]
  i2290.moveToTargetFinishFxType = i2291[39]
  i2290.fxSpawnZPos = i2291[40]
  request.r(i2291[41], i2291[42], 0, i2290, 'tf')
  return i2290
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i2292 = root || request.c( 'ItemDragRaycastTarget' )
  var i2293 = data
  i2292.targetToFind = i2293[0]
  i2292.targetItemTypeWhenHit = i2293[1]
  i2292.targetItemTypeOnDropFail = i2293[2]
  request.r(i2293[3], i2293[4], 0, i2292, 'raycastPoint')
  i2292.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2293[5] )
  i2292.rayDistance = i2293[6]
  i2292.updateMoveDefaultTarget = !!i2293[7]
  i2292.invokeOnlyWhenTargetChanged = !!i2293[8]
  i2292.targetChangeEnabled = !!i2293[9]
  i2292.restoreTargetOnDropFail = !!i2293[10]
  i2292.resetCurrentTargetOnNoHit = !!i2293[11]
  i2292.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i2293[12], i2292.onTargetFound)
  i2292.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i2293[13], i2292.onTargetFoundWithItem)
  return i2292
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i2294 = root || request.c( 'ItemRaycastTargetEvent' )
  var i2295 = data
  i2294.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2295[0], i2294.m_PersistentCalls)
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2297 = data
  request.r(i2297[0], i2297[1], 0, i2296, 'animatorController')
  request.r(i2297[2], i2297[3], 0, i2296, 'avatar')
  i2296.updateMode = i2297[4]
  i2296.hasTransformHierarchy = !!i2297[5]
  i2296.applyRootMotion = !!i2297[6]
  var i2299 = i2297[7]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 2) {
  request.r(i2299[i + 0], i2299[i + 1], 2, i2298, '')
  }
  i2296.humanBones = i2298
  i2296.enabled = !!i2297[8]
  return i2296
}

Deserializers["ItemSound"] = function (request, data, root) {
  var i2302 = root || request.c( 'ItemSound' )
  var i2303 = data
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2305 = data
  i2304.name = i2305[0]
  i2304.index = i2305[1]
  i2304.startup = !!i2305[2]
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2307 = data
  i2306.planeDistance = i2307[0]
  i2306.referencePixelsPerUnit = i2307[1]
  i2306.isFallbackOverlay = !!i2307[2]
  i2306.renderMode = i2307[3]
  i2306.renderOrder = i2307[4]
  i2306.sortingLayerName = i2307[5]
  i2306.sortingOrder = i2307[6]
  i2306.scaleFactor = i2307[7]
  request.r(i2307[8], i2307[9], 0, i2306, 'worldCamera')
  i2306.overrideSorting = !!i2307[10]
  i2306.pixelPerfect = !!i2307[11]
  i2306.targetDisplay = i2307[12]
  i2306.overridePixelPerfect = !!i2307[13]
  i2306.enabled = !!i2307[14]
  return i2306
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2308 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2309 = data
  i2308.m_UiScaleMode = i2309[0]
  i2308.m_ReferencePixelsPerUnit = i2309[1]
  i2308.m_ScaleFactor = i2309[2]
  i2308.m_ReferenceResolution = new pc.Vec2( i2309[3], i2309[4] )
  i2308.m_ScreenMatchMode = i2309[5]
  i2308.m_MatchWidthOrHeight = i2309[6]
  i2308.m_PhysicalUnit = i2309[7]
  i2308.m_FallbackScreenDPI = i2309[8]
  i2308.m_DefaultSpriteDPI = i2309[9]
  i2308.m_DynamicPixelsPerUnit = i2309[10]
  i2308.m_PresetInfoIsWorld = !!i2309[11]
  return i2308
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2310 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2311 = data
  i2310.m_IgnoreReversedGraphics = !!i2311[0]
  i2310.m_BlockingObjects = i2311[1]
  i2310.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2311[2] )
  return i2310
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2312 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2313 = data
  i2312.m_hasFontAssetChanged = !!i2313[0]
  request.r(i2313[1], i2313[2], 0, i2312, 'm_baseMaterial')
  i2312.m_maskOffset = new pc.Vec4( i2313[3], i2313[4], i2313[5], i2313[6] )
  i2312.m_text = i2313[7]
  i2312.m_isRightToLeft = !!i2313[8]
  request.r(i2313[9], i2313[10], 0, i2312, 'm_fontAsset')
  request.r(i2313[11], i2313[12], 0, i2312, 'm_sharedMaterial')
  var i2315 = i2313[13]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 2) {
  request.r(i2315[i + 0], i2315[i + 1], 2, i2314, '')
  }
  i2312.m_fontSharedMaterials = i2314
  request.r(i2313[14], i2313[15], 0, i2312, 'm_fontMaterial')
  var i2317 = i2313[16]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 2) {
  request.r(i2317[i + 0], i2317[i + 1], 2, i2316, '')
  }
  i2312.m_fontMaterials = i2316
  i2312.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2313[17], i2313[18], i2313[19], i2313[20])
  i2312.m_fontColor = new pc.Color(i2313[21], i2313[22], i2313[23], i2313[24])
  i2312.m_enableVertexGradient = !!i2313[25]
  i2312.m_colorMode = i2313[26]
  i2312.m_fontColorGradient = request.d('TMPro.VertexGradient', i2313[27], i2312.m_fontColorGradient)
  request.r(i2313[28], i2313[29], 0, i2312, 'm_fontColorGradientPreset')
  request.r(i2313[30], i2313[31], 0, i2312, 'm_spriteAsset')
  i2312.m_tintAllSprites = !!i2313[32]
  request.r(i2313[33], i2313[34], 0, i2312, 'm_StyleSheet')
  i2312.m_TextStyleHashCode = i2313[35]
  i2312.m_overrideHtmlColors = !!i2313[36]
  i2312.m_faceColor = UnityEngine.Color32.ConstructColor(i2313[37], i2313[38], i2313[39], i2313[40])
  i2312.m_fontSize = i2313[41]
  i2312.m_fontSizeBase = i2313[42]
  i2312.m_fontWeight = i2313[43]
  i2312.m_enableAutoSizing = !!i2313[44]
  i2312.m_fontSizeMin = i2313[45]
  i2312.m_fontSizeMax = i2313[46]
  i2312.m_fontStyle = i2313[47]
  i2312.m_HorizontalAlignment = i2313[48]
  i2312.m_VerticalAlignment = i2313[49]
  i2312.m_textAlignment = i2313[50]
  i2312.m_characterSpacing = i2313[51]
  i2312.m_wordSpacing = i2313[52]
  i2312.m_lineSpacing = i2313[53]
  i2312.m_lineSpacingMax = i2313[54]
  i2312.m_paragraphSpacing = i2313[55]
  i2312.m_charWidthMaxAdj = i2313[56]
  i2312.m_TextWrappingMode = i2313[57]
  i2312.m_wordWrappingRatios = i2313[58]
  i2312.m_overflowMode = i2313[59]
  request.r(i2313[60], i2313[61], 0, i2312, 'm_linkedTextComponent')
  request.r(i2313[62], i2313[63], 0, i2312, 'parentLinkedComponent')
  i2312.m_enableKerning = !!i2313[64]
  var i2319 = i2313[65]
  var i2318 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.add(i2319[i + 0]);
  }
  i2312.m_ActiveFontFeatures = i2318
  i2312.m_enableExtraPadding = !!i2313[66]
  i2312.checkPaddingRequired = !!i2313[67]
  i2312.m_isRichText = !!i2313[68]
  i2312.m_parseCtrlCharacters = !!i2313[69]
  i2312.m_isOrthographic = !!i2313[70]
  i2312.m_isCullingEnabled = !!i2313[71]
  i2312.m_horizontalMapping = i2313[72]
  i2312.m_verticalMapping = i2313[73]
  i2312.m_uvLineOffset = i2313[74]
  i2312.m_geometrySortingOrder = i2313[75]
  i2312.m_IsTextObjectScaleStatic = !!i2313[76]
  i2312.m_VertexBufferAutoSizeReduction = !!i2313[77]
  i2312.m_useMaxVisibleDescender = !!i2313[78]
  i2312.m_pageToDisplay = i2313[79]
  i2312.m_margin = new pc.Vec4( i2313[80], i2313[81], i2313[82], i2313[83] )
  i2312.m_isUsingLegacyAnimationComponent = !!i2313[84]
  i2312.m_isVolumetricText = !!i2313[85]
  request.r(i2313[86], i2313[87], 0, i2312, 'm_Material')
  i2312.m_EmojiFallbackSupport = !!i2313[88]
  i2312.m_Maskable = !!i2313[89]
  i2312.m_Color = new pc.Color(i2313[90], i2313[91], i2313[92], i2313[93])
  i2312.m_RaycastTarget = !!i2313[94]
  i2312.m_RaycastPadding = new pc.Vec4( i2313[95], i2313[96], i2313[97], i2313[98] )
  return i2312
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2320 = root || request.c( 'TMPro.VertexGradient' )
  var i2321 = data
  i2320.topLeft = new pc.Color(i2321[0], i2321[1], i2321[2], i2321[3])
  i2320.topRight = new pc.Color(i2321[4], i2321[5], i2321[6], i2321[7])
  i2320.bottomLeft = new pc.Color(i2321[8], i2321[9], i2321[10], i2321[11])
  i2320.bottomRight = new pc.Color(i2321[12], i2321[13], i2321[14], i2321[15])
  return i2320
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2324 = root || request.c( 'UnityEngine.UI.Button' )
  var i2325 = data
  i2324.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2325[0], i2324.m_OnClick)
  i2324.m_Navigation = request.d('UnityEngine.UI.Navigation', i2325[1], i2324.m_Navigation)
  i2324.m_Transition = i2325[2]
  i2324.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2325[3], i2324.m_Colors)
  i2324.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2325[4], i2324.m_SpriteState)
  i2324.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2325[5], i2324.m_AnimationTriggers)
  i2324.m_Interactable = !!i2325[6]
  request.r(i2325[7], i2325[8], 0, i2324, 'm_TargetGraphic')
  return i2324
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2327 = data
  i2326.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2327[0], i2326.m_PersistentCalls)
  return i2326
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2329 = data
  i2328.m_Mode = i2329[0]
  i2328.m_WrapAround = !!i2329[1]
  request.r(i2329[2], i2329[3], 0, i2328, 'm_SelectOnUp')
  request.r(i2329[4], i2329[5], 0, i2328, 'm_SelectOnDown')
  request.r(i2329[6], i2329[7], 0, i2328, 'm_SelectOnLeft')
  request.r(i2329[8], i2329[9], 0, i2328, 'm_SelectOnRight')
  return i2328
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2331 = data
  i2330.m_NormalColor = new pc.Color(i2331[0], i2331[1], i2331[2], i2331[3])
  i2330.m_HighlightedColor = new pc.Color(i2331[4], i2331[5], i2331[6], i2331[7])
  i2330.m_PressedColor = new pc.Color(i2331[8], i2331[9], i2331[10], i2331[11])
  i2330.m_SelectedColor = new pc.Color(i2331[12], i2331[13], i2331[14], i2331[15])
  i2330.m_DisabledColor = new pc.Color(i2331[16], i2331[17], i2331[18], i2331[19])
  i2330.m_ColorMultiplier = i2331[20]
  i2330.m_FadeDuration = i2331[21]
  return i2330
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2333 = data
  request.r(i2333[0], i2333[1], 0, i2332, 'm_HighlightedSprite')
  request.r(i2333[2], i2333[3], 0, i2332, 'm_PressedSprite')
  request.r(i2333[4], i2333[5], 0, i2332, 'm_SelectedSprite')
  request.r(i2333[6], i2333[7], 0, i2332, 'm_DisabledSprite')
  return i2332
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2334 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2335 = data
  i2334.m_NormalTrigger = i2335[0]
  i2334.m_HighlightedTrigger = i2335[1]
  i2334.m_PressedTrigger = i2335[2]
  i2334.m_SelectedTrigger = i2335[3]
  i2334.m_DisabledTrigger = i2335[4]
  return i2334
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2336 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2337 = data
  request.r(i2337[0], i2337[1], 0, i2336, 'm_FillRect')
  request.r(i2337[2], i2337[3], 0, i2336, 'm_HandleRect')
  i2336.m_Direction = i2337[4]
  i2336.m_MinValue = i2337[5]
  i2336.m_MaxValue = i2337[6]
  i2336.m_WholeNumbers = !!i2337[7]
  i2336.m_Value = i2337[8]
  i2336.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2337[9], i2336.m_OnValueChanged)
  i2336.m_Navigation = request.d('UnityEngine.UI.Navigation', i2337[10], i2336.m_Navigation)
  i2336.m_Transition = i2337[11]
  i2336.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2337[12], i2336.m_Colors)
  i2336.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2337[13], i2336.m_SpriteState)
  i2336.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2337[14], i2336.m_AnimationTriggers)
  i2336.m_Interactable = !!i2337[15]
  request.r(i2337[16], i2337[17], 0, i2336, 'm_TargetGraphic')
  return i2336
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2338 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2339 = data
  i2338.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2339[0], i2338.m_PersistentCalls)
  return i2338
}

Deserializers["ProgressSlider"] = function (request, data, root) {
  var i2340 = root || request.c( 'ProgressSlider' )
  var i2341 = data
  request.r(i2341[0], i2341[1], 0, i2340, 'progressSlider')
  i2340.maxProgressItems = i2341[2]
  i2340.startProgressItems = i2341[3]
  request.r(i2341[4], i2341[5], 0, i2340, 'progressText')
  return i2340
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i2342 = root || request.c( 'Ply_Pool' )
  var i2343 = data
  var i2345 = i2343[0]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.push( request.d('Ply_Pool+PoolAmount', i2345[i + 0]) );
  }
  i2342.poolAmounts = i2344
  request.r(i2343[1], i2343[2], 0, i2342, 'poolHolder')
  return i2342
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i2348 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i2349 = data
  i2348.type = i2349[0]
  i2348.amount = i2349[1]
  request.r(i2349[2], i2349[3], 0, i2348, 'gameUnit')
  return i2348
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2350 = root || request.c( 'Ply_SoundManager' )
  var i2351 = data
  var i2353 = i2351[0]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Ply_SoundManager+FxAudio', i2353[i + 0]) );
  }
  i2350.fxAudios = i2352
  var i2355 = i2351[1]
  var i2354 = []
  for(var i = 0; i < i2355.length; i += 2) {
  request.r(i2355[i + 0], i2355[i + 1], 2, i2354, '')
  }
  i2350.audioClips = i2354
  request.r(i2351[2], i2351[3], 0, i2350, 'sound')
  return i2350
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i2358 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i2359 = data
  i2358.fxType = i2359[0]
  request.r(i2359[1], i2359[2], 0, i2358, 'audioClip')
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2363 = data
  request.r(i2363[0], i2363[1], 0, i2362, 'clip')
  request.r(i2363[2], i2363[3], 0, i2362, 'outputAudioMixerGroup')
  i2362.playOnAwake = !!i2363[4]
  i2362.loop = !!i2363[5]
  i2362.time = i2363[6]
  i2362.volume = i2363[7]
  i2362.pitch = i2363[8]
  i2362.enabled = !!i2363[9]
  return i2362
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2364 = root || request.c( 'GameManager' )
  var i2365 = data
  i2364.isPlaying = !!i2365[0]
  i2364.isTutorial = !!i2365[1]
  i2364.isGotoStore = !!i2365[2]
  i2364.isLoseGame = !!i2365[3]
  i2364.countMove = i2365[4]
  i2364.currentLayer = i2365[5]
  request.r(i2365[6], i2365[7], 0, i2364, 'trashCan')
  request.r(i2365[8], i2365[9], 0, i2364, 'step1')
  request.r(i2365[10], i2365[11], 0, i2364, 'paperBox')
  return i2364
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2366 = root || request.c( 'UIManager' )
  var i2367 = data
  request.r(i2367[0], i2367[1], 0, i2366, 'winUI')
  request.r(i2367[2], i2367[3], 0, i2366, 'loseUI')
  request.r(i2367[4], i2367[5], 0, i2366, 'tutorial')
  request.r(i2367[6], i2367[7], 0, i2366, 'verticalUI')
  request.r(i2367[8], i2367[9], 0, i2366, 'horizontalUI')
  request.r(i2367[10], i2367[11], 0, i2366, 'downloadBtn')
  request.r(i2367[12], i2367[13], 0, i2366, 'horizontalDownloadBtn')
  request.r(i2367[14], i2367[15], 0, i2366, 'textAnim')
  i2366.isGoogleBuild = !!i2367[16]
  i2366.screenWidth = i2367[17]
  i2366.screenHeight = i2367[18]
  i2366.scaleHeightOnWidth = i2367[19]
  i2366.isVertical = !!i2367[20]
  i2366.isScreenVertical = !!i2367[21]
  request.r(i2367[22], i2367[23], 0, i2366, 'cam')
  i2366.verticalUIHeightOnWidthRatio = i2367[24]
  i2366.scaleCameraOnValidate = !!i2367[25]
  i2366.screenVerticalHeightOnWidthRatio = i2367[26]
  i2366.useContinuousScaling = !!i2367[27]
  i2366.baseOrthographicSize = i2367[28]
  i2366.baseAspect = i2367[29]
  i2366.landscapeSizeRatio = i2367[30]
  i2366.defaultPortraitSizeRatio = i2367[31]
  var i2369 = i2367[32]
  var i2368 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.add(request.d('ScreenScaleStep', i2369[i + 0]));
  }
  i2366.discreteScaleSteps = i2368
  i2366.usePerspectiveCamera = !!i2367[33]
  request.r(i2367[34], i2367[35], 0, i2366, 'perspectiveFocus')
  i2366.perspectiveFocusDistance = i2367[36]
  i2366.perspectivePadding = i2367[37]
  i2366.fitRendererBounds = !!i2367[38]
  request.r(i2367[39], i2367[40], 0, i2366, 'boundsRoot')
  var i2371 = i2367[41]
  var i2370 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i2371.length; i += 2) {
  request.r(i2371[i + 0], i2371[i + 1], 1, i2370, '')
  }
  i2366.boundsRenderers = i2370
  return i2366
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i2374 = root || request.c( 'ScreenScaleStep' )
  var i2375 = data
  i2374.heightOnWidthRatio = i2375[0]
  i2374.orthographicSize = i2375[1]
  return i2374
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2378 = root || request.c( 'InputManager' )
  var i2379 = data
  i2378.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2379[0] )
  i2378.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i2379[1] )
  i2378.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2379[2] )
  i2378.isDragging = !!i2379[3]
  return i2378
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i2380 = root || request.c( 'HandTutManager' )
  var i2381 = data
  var i2383 = i2381[0]
  var i2382 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2383.length; i += 2) {
  request.r(i2383[i + 0], i2383[i + 1], 1, i2382, '')
  }
  i2380.items = i2382
  request.r(i2381[1], i2381[2], 0, i2380, 'knife')
  request.r(i2381[3], i2381[4], 0, i2380, 'knife2')
  request.r(i2381[5], i2381[6], 0, i2380, 'handTutObject')
  request.r(i2381[7], i2381[8], 0, i2380, 'tapToCookObject')
  request.r(i2381[9], i2381[10], 0, i2380, 'oilItem')
  request.r(i2381[11], i2381[12], 0, i2380, 'stoveToggleEvent')
  request.r(i2381[13], i2381[14], 0, i2380, 'waterToggleEvent')
  request.r(i2381[15], i2381[16], 0, i2380, 'sinkBlock')
  var i2385 = i2381[17]
  var i2384 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i2385.length; i += 2) {
  request.r(i2385[i + 0], i2385[i + 1], 1, i2384, '')
  }
  i2380.itemsInWater = i2384
  i2380.noDelayItemCount = i2381[18]
  i2380.breakHeartNoDelayThreshold = i2381[19]
  i2380.shortIdleDelay = i2381[20]
  i2380.maxHandTutShowCount = i2381[21]
  i2380.showSinkWaterTutorialOnStart = !!i2381[22]
  i2380.waitForBowlIntro = !!i2381[23]
  i2380.idleDelay = i2381[24]
  i2380.firstHandTutDelay = i2381[25]
  i2380.phaseHandTutDelay = i2381[26]
  i2380.moveDuration = i2381[27]
  i2380.dragFadeDuration = i2381[28]
  i2380.clickScaleDuration = i2381[29]
  i2380.waitAtEndDuration = i2381[30]
  i2380.handZPosition = i2381[31]
  i2380.clickScaleMultiplier = i2381[32]
  i2380.moveEase = i2381[33]
  return i2380
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i2390 = root || request.c( 'SortChildByZPos' )
  var i2391 = data
  request.r(i2391[0], i2391[1], 0, i2390, 'transformToSort')
  var i2393 = i2391[2]
  var i2392 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2393.length; i += 2) {
  request.r(i2393[i + 0], i2393[i + 1], 1, i2392, '')
  }
  i2390.childrenToSort = i2392
  i2390.zOffset = i2391[3]
  i2390.baseZ = i2391[4]
  return i2390
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i2396 = root || request.c( 'PhaseManager' )
  var i2397 = data
  var i2399 = i2397[0]
  var i2398 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i2399.length; i += 1) {
    i2398.add(request.d('PhaseData', i2399[i + 0]));
  }
  i2396.phases = i2398
  i2396.transitionType = i2397[1]
  i2396.transitionDuration = i2397[2]
  i2396.delayBeforeNextPhase = i2397[3]
  i2396.offScreenLeftX = i2397[4]
  i2396.offScreenRightX = i2397[5]
  i2396.offScreenBottomY = i2397[6]
  i2396.offScreenTopY = i2397[7]
  i2396.centerScreenX = i2397[8]
  request.r(i2397[9], i2397[10], 0, i2396, 'phaseTransitionObject')
  i2396.phaseTransitionObjectDuration = i2397[11]
  i2396.currentPhaseIndex = i2397[12]
  i2396.currentStepCount = i2397[13]
  i2396.isECPopup = !!i2397[14]
  return i2396
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i2402 = root || request.c( 'PhaseData' )
  var i2403 = data
  request.r(i2403[0], i2403[1], 0, i2402, 'phaseObject')
  i2402.totalSteps = i2403[2]
  i2402.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i2403[3], i2402.onPhaseReady)
  return i2402
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i2404 = root || request.c( 'ItemTypeDoneManager' )
  var i2405 = data
  var i2407 = i2405[0]
  var i2406 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i2407[i + 0]));
  }
  i2404.itemTypeGroups = i2406
  return i2404
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i2410 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i2411 = data
  i2410.itemType = i2411[0]
  var i2413 = i2411[1]
  var i2412 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2413.length; i += 2) {
  request.r(i2413[i + 0], i2413[i + 1], 1, i2412, '')
  }
  i2410.items = i2412
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2415 = data
  i2414.aspect = i2415[0]
  i2414.orthographic = !!i2415[1]
  i2414.orthographicSize = i2415[2]
  i2414.backgroundColor = new pc.Color(i2415[3], i2415[4], i2415[5], i2415[6])
  i2414.nearClipPlane = i2415[7]
  i2414.farClipPlane = i2415[8]
  i2414.fieldOfView = i2415[9]
  i2414.depth = i2415[10]
  i2414.clearFlags = i2415[11]
  i2414.cullingMask = i2415[12]
  i2414.rect = i2415[13]
  request.r(i2415[14], i2415[15], 0, i2414, 'targetTexture')
  i2414.usePhysicalProperties = !!i2415[16]
  i2414.focalLength = i2415[17]
  i2414.sensorSize = new pc.Vec2( i2415[18], i2415[19] )
  i2414.lensShift = new pc.Vec2( i2415[20], i2415[21] )
  i2414.gateFit = i2415[22]
  i2414.commandBufferCount = i2415[23]
  i2414.cameraType = i2415[24]
  i2414.enabled = !!i2415[25]
  return i2414
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2416 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2417 = data
  request.r(i2417[0], i2417[1], 0, i2416, 'm_FirstSelected')
  i2416.m_sendNavigationEvents = !!i2417[2]
  i2416.m_DragThreshold = i2417[3]
  return i2416
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2418 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2419 = data
  i2418.m_HorizontalAxis = i2419[0]
  i2418.m_VerticalAxis = i2419[1]
  i2418.m_SubmitButton = i2419[2]
  i2418.m_CancelButton = i2419[3]
  i2418.m_InputActionsPerSecond = i2419[4]
  i2418.m_RepeatDelay = i2419[5]
  i2418.m_ForceModuleActive = !!i2419[6]
  i2418.m_SendPointerHoverToParent = !!i2419[7]
  return i2418
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i2420 = root || request.c( 'ItemClickable' )
  var i2421 = data
  i2420.requiredClicks = i2421[0]
  i2420.infiniteClick = !!i2421[1]
  i2420.canClick = !!i2421[2]
  i2420.disableAfterClick = !!i2421[3]
  i2420.onClick = request.d('UnityEngine.Events.UnityEvent', i2421[4], i2420.onClick)
  var i2423 = i2421[5]
  var i2422 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.add(request.d('UnityEngine.Events.UnityEvent', i2423[i + 0]));
  }
  i2420.sequentialOnClicks = i2422
  i2420.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i2421[6], i2420.onClickComplete)
  return i2420
}

Deserializers["Item"] = function (request, data, root) {
  var i2426 = root || request.c( 'Item' )
  var i2427 = data
  i2426.isDone = !!i2427[0]
  i2426.onProcess = !!i2427[1]
  i2426.requireMatchingTargetTypeForHandTut = !!i2427[2]
  request.r(i2427[3], i2427[4], 0, i2426, 'itemDraggable')
  request.r(i2427[5], i2427[6], 0, i2426, 'itemClickable')
  request.r(i2427[7], i2427[8], 0, i2426, 'itemStirring')
  request.r(i2427[9], i2427[10], 0, i2426, 'itemKnifeSpriteMaskCutter')
  request.r(i2427[11], i2427[12], 0, i2426, 'itemSpriteMaskPainter')
  request.r(i2427[13], i2427[14], 0, i2426, 'itemDragSpriteMaskPainter')
  request.r(i2427[15], i2427[16], 0, i2426, 'itemMoveToTarget')
  request.r(i2427[17], i2427[18], 0, i2426, 'animator')
  i2426.itemType = i2427[19]
  request.r(i2427[20], i2427[21], 0, i2426, 'spriteRenderer')
  i2426.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2427[22], i2426.onKnifeIn)
  request.r(i2427[23], i2427[24], 0, i2426, 'knifePos')
  i2426.heartEffectScale = i2427[25]
  i2426.breakHeartEffectScale = i2427[26]
  i2426.blinkEffectScale = i2427[27]
  i2426.mergeEffectScale = i2427[28]
  i2426.playMoveToTargetFinishSound = !!i2427[29]
  i2426.moveToTargetFinishFxType = i2427[30]
  i2426.fxSpawnZPos = i2427[31]
  request.r(i2427[32], i2427[33], 0, i2426, 'tf')
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2429 = data
  i2428.center = new pc.Vec3( i2429[0], i2429[1], i2429[2] )
  i2428.radius = i2429[3]
  i2428.height = i2429[4]
  i2428.direction = i2429[5]
  i2428.enabled = !!i2429[6]
  i2428.isTrigger = !!i2429[7]
  request.r(i2429[8], i2429[9], 0, i2428, 'material')
  return i2428
}

Deserializers["Pan"] = function (request, data, root) {
  var i2430 = root || request.c( 'Pan' )
  var i2431 = data
  request.r(i2431[0], i2431[1], 0, i2430, 'fryingFX')
  i2430.isOilIn = !!i2431[2]
  i2430.isTurnOnStove = !!i2431[3]
  request.r(i2431[4], i2431[5], 0, i2430, 'stoveBtn')
  request.r(i2431[6], i2431[7], 0, i2430, 'spartula')
  i2430.stoveShakeDelay = i2431[8]
  i2430.stoveShakeDuration = i2431[9]
  var i2433 = i2431[10]
  var i2432 = []
  for(var i = 0; i < i2433.length; i += 2) {
  request.r(i2433[i + 0], i2433[i + 1], 2, i2432, '')
  }
  i2430.plates = i2432
  i2430.plateCount = i2431[11]
  request.r(i2431[12], i2431[13], 0, i2430, 'waterPot')
  var i2435 = i2431[14]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 2) {
  request.r(i2435[i + 0], i2435[i + 1], 2, i2434, '')
  }
  i2430.otherPot = i2434
  i2430.otherPotCount = i2431[15]
  i2430.isDone = !!i2431[16]
  i2430.onProcess = !!i2431[17]
  i2430.requireMatchingTargetTypeForHandTut = !!i2431[18]
  request.r(i2431[19], i2431[20], 0, i2430, 'itemDraggable')
  request.r(i2431[21], i2431[22], 0, i2430, 'itemClickable')
  request.r(i2431[23], i2431[24], 0, i2430, 'itemStirring')
  request.r(i2431[25], i2431[26], 0, i2430, 'itemKnifeSpriteMaskCutter')
  request.r(i2431[27], i2431[28], 0, i2430, 'itemSpriteMaskPainter')
  request.r(i2431[29], i2431[30], 0, i2430, 'itemDragSpriteMaskPainter')
  request.r(i2431[31], i2431[32], 0, i2430, 'itemMoveToTarget')
  request.r(i2431[33], i2431[34], 0, i2430, 'animator')
  i2430.itemType = i2431[35]
  request.r(i2431[36], i2431[37], 0, i2430, 'spriteRenderer')
  i2430.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2431[38], i2430.onKnifeIn)
  request.r(i2431[39], i2431[40], 0, i2430, 'knifePos')
  i2430.heartEffectScale = i2431[41]
  i2430.breakHeartEffectScale = i2431[42]
  i2430.blinkEffectScale = i2431[43]
  i2430.mergeEffectScale = i2431[44]
  i2430.playMoveToTargetFinishSound = !!i2431[45]
  i2430.moveToTargetFinishFxType = i2431[46]
  i2430.fxSpawnZPos = i2431[47]
  request.r(i2431[48], i2431[49], 0, i2430, 'tf')
  return i2430
}

Deserializers["Spartula"] = function (request, data, root) {
  var i2438 = root || request.c( 'Spartula' )
  var i2439 = data
  i2438.isStir1 = !!i2439[0]
  i2438.isDone = !!i2439[1]
  i2438.onProcess = !!i2439[2]
  i2438.requireMatchingTargetTypeForHandTut = !!i2439[3]
  request.r(i2439[4], i2439[5], 0, i2438, 'itemDraggable')
  request.r(i2439[6], i2439[7], 0, i2438, 'itemClickable')
  request.r(i2439[8], i2439[9], 0, i2438, 'itemStirring')
  request.r(i2439[10], i2439[11], 0, i2438, 'itemKnifeSpriteMaskCutter')
  request.r(i2439[12], i2439[13], 0, i2438, 'itemSpriteMaskPainter')
  request.r(i2439[14], i2439[15], 0, i2438, 'itemDragSpriteMaskPainter')
  request.r(i2439[16], i2439[17], 0, i2438, 'itemMoveToTarget')
  request.r(i2439[18], i2439[19], 0, i2438, 'animator')
  i2438.itemType = i2439[20]
  request.r(i2439[21], i2439[22], 0, i2438, 'spriteRenderer')
  i2438.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2439[23], i2438.onKnifeIn)
  request.r(i2439[24], i2439[25], 0, i2438, 'knifePos')
  i2438.heartEffectScale = i2439[26]
  i2438.breakHeartEffectScale = i2439[27]
  i2438.blinkEffectScale = i2439[28]
  i2438.mergeEffectScale = i2439[29]
  i2438.playMoveToTargetFinishSound = !!i2439[30]
  i2438.moveToTargetFinishFxType = i2439[31]
  i2438.fxSpawnZPos = i2439[32]
  request.r(i2439[33], i2439[34], 0, i2438, 'tf')
  return i2438
}

Deserializers["ItemStirring"] = function (request, data, root) {
  var i2440 = root || request.c( 'ItemStirring' )
  var i2441 = data
  i2440.stirRadius = i2441[0]
  request.r(i2441[1], i2441[2], 0, i2440, 'stirrerTransform')
  request.r(i2441[3], i2441[4], 0, i2440, 'centerPoint')
  i2440.movementMode = i2441[5]
  i2440.lineLength = i2441[6]
  i2440.lineDirection = new pc.Vec3( i2441[7], i2441[8], i2441[9] )
  i2440.flipScaleYByLineDragDirection = !!i2441[10]
  request.r(i2441[11], i2441[12], 0, i2440, 'flipScaleTarget')
  request.r(i2441[13], i2441[14], 0, i2440, 'targetAnimator')
  i2440.targetStateName = i2441[15]
  i2440.targetLayer = i2441[16]
  i2440.stoppedSpeed = i2441[17]
  i2440.minDragDistanceToAnimate = i2441[18]
  i2440.dragSpeedMultiplier = i2441[19]
  i2440.minAnimatorSpeed = i2441[20]
  i2440.maxAnimatorSpeed = i2441[21]
  i2440.speedBlendDuration = i2441[22]
  i2440.completeNormalizedTime = i2441[23]
  i2440.resetAnimationOnFirstBegin = !!i2441[24]
  var i2443 = i2441[25]
  var i2442 = new (System.Collections.Generic.List$1(Bridge.ns('StirMilestone')))
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.add(request.d('StirMilestone', i2443[i + 0]));
  }
  i2440.milestones = i2442
  i2440.spawnProgressBarOnStir = !!i2441[26]
  request.r(i2441[27], i2441[28], 0, i2440, 'spawnProgressBarPoint')
  i2440.rollingSoundCooldown = i2441[29]
  i2440.onStirBegin = request.d('UnityEngine.Events.UnityEvent', i2441[30], i2440.onStirBegin)
  i2440.onStirComplete = request.d('UnityEngine.Events.UnityEvent', i2441[31], i2440.onStirComplete)
  return i2440
}

Deserializers["StirMilestone"] = function (request, data, root) {
  var i2446 = root || request.c( 'StirMilestone' )
  var i2447 = data
  i2446.distanceThreshold = i2447[0]
  i2446.onMilestoneReached = request.d('UnityEngine.Events.UnityEvent', i2447[1], i2446.onMilestoneReached)
  i2446.isReached = !!i2447[2]
  return i2446
}

Deserializers["ItemDragChildRotator"] = function (request, data, root) {
  var i2448 = root || request.c( 'ItemDragChildRotator' )
  var i2449 = data
  request.r(i2449[0], i2449[1], 0, i2448, 'rotateTarget')
  i2448.dragEulerAngles = new pc.Vec3( i2449[2], i2449[3], i2449[4] )
  i2448.useLocalRotation = !!i2449[5]
  i2448.rotateRelative = !!i2449[6]
  i2448.rotateDuration = i2449[7]
  i2448.rotateEase = i2449[8]
  i2448.rotateMode = i2449[9]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2451 = data
  i2450.frontSortingLayerID = i2451[0]
  i2450.frontSortingOrder = i2451[1]
  i2450.backSortingLayerID = i2451[2]
  i2450.backSortingOrder = i2451[3]
  i2450.alphaCutoff = i2451[4]
  request.r(i2451[5], i2451[6], 0, i2450, 'sprite')
  i2450.tileMode = i2451[7]
  i2450.isCustomRangeActive = !!i2451[8]
  i2450.spriteSortPoint = i2451[9]
  i2450.enabled = !!i2451[10]
  request.r(i2451[11], i2451[12], 0, i2450, 'sharedMaterial')
  var i2453 = i2451[13]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 2) {
  request.r(i2453[i + 0], i2453[i + 1], 2, i2452, '')
  }
  i2450.sharedMaterials = i2452
  i2450.receiveShadows = !!i2451[14]
  i2450.shadowCastingMode = i2451[15]
  i2450.sortingLayerID = i2451[16]
  i2450.sortingOrder = i2451[17]
  i2450.lightmapIndex = i2451[18]
  i2450.lightmapSceneIndex = i2451[19]
  i2450.lightmapScaleOffset = new pc.Vec4( i2451[20], i2451[21], i2451[22], i2451[23] )
  i2450.lightProbeUsage = i2451[24]
  i2450.reflectionProbeUsage = i2451[25]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2455 = data
  i2454.ambientIntensity = i2455[0]
  i2454.reflectionIntensity = i2455[1]
  i2454.ambientMode = i2455[2]
  i2454.ambientLight = new pc.Color(i2455[3], i2455[4], i2455[5], i2455[6])
  i2454.ambientSkyColor = new pc.Color(i2455[7], i2455[8], i2455[9], i2455[10])
  i2454.ambientGroundColor = new pc.Color(i2455[11], i2455[12], i2455[13], i2455[14])
  i2454.ambientEquatorColor = new pc.Color(i2455[15], i2455[16], i2455[17], i2455[18])
  i2454.fogColor = new pc.Color(i2455[19], i2455[20], i2455[21], i2455[22])
  i2454.fogEndDistance = i2455[23]
  i2454.fogStartDistance = i2455[24]
  i2454.fogDensity = i2455[25]
  i2454.fog = !!i2455[26]
  request.r(i2455[27], i2455[28], 0, i2454, 'skybox')
  i2454.fogMode = i2455[29]
  var i2457 = i2455[30]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2457[i + 0]) );
  }
  i2454.lightmaps = i2456
  i2454.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2455[31], i2454.lightProbes)
  i2454.lightmapsMode = i2455[32]
  i2454.mixedBakeMode = i2455[33]
  i2454.environmentLightingMode = i2455[34]
  i2454.ambientProbe = new pc.SphericalHarmonicsL2(i2455[35])
  i2454.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2455[36])
  i2454.useReferenceAmbientProbe = !!i2455[37]
  request.r(i2455[38], i2455[39], 0, i2454, 'customReflection')
  request.r(i2455[40], i2455[41], 0, i2454, 'defaultReflection')
  i2454.defaultReflectionMode = i2455[42]
  i2454.defaultReflectionResolution = i2455[43]
  i2454.sunLightObjectId = i2455[44]
  i2454.pixelLightCount = i2455[45]
  i2454.defaultReflectionHDR = !!i2455[46]
  i2454.hasLightDataAsset = !!i2455[47]
  i2454.hasManualGenerate = !!i2455[48]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2461 = data
  request.r(i2461[0], i2461[1], 0, i2460, 'lightmapColor')
  request.r(i2461[2], i2461[3], 0, i2460, 'lightmapDirection')
  request.r(i2461[4], i2461[5], 0, i2460, 'shadowMask')
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2462 = root || new UnityEngine.LightProbes()
  var i2463 = data
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2471 = data
  var i2473 = i2471[0]
  var i2472 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2473[i + 0]));
  }
  i2470.ShaderCompilationErrors = i2472
  i2470.name = i2471[1]
  i2470.guid = i2471[2]
  var i2475 = i2471[3]
  var i2474 = []
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.push( i2475[i + 0] );
  }
  i2470.shaderDefinedKeywords = i2474
  var i2477 = i2471[4]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2477[i + 0]) );
  }
  i2470.passes = i2476
  var i2479 = i2471[5]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 1) {
    i2478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2479[i + 0]) );
  }
  i2470.usePasses = i2478
  var i2481 = i2471[6]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2481[i + 0]) );
  }
  i2470.defaultParameterValues = i2480
  request.r(i2471[7], i2471[8], 0, i2470, 'unityFallbackShader')
  i2470.readDepth = !!i2471[9]
  i2470.hasDepthOnlyPass = !!i2471[10]
  i2470.isCreatedByShaderGraph = !!i2471[11]
  i2470.disableBatching = !!i2471[12]
  i2470.compiled = !!i2471[13]
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2485 = data
  i2484.shaderName = i2485[0]
  i2484.errorMessage = i2485[1]
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2490 = root || new pc.UnityShaderPass()
  var i2491 = data
  i2490.id = i2491[0]
  i2490.subShaderIndex = i2491[1]
  i2490.name = i2491[2]
  i2490.passType = i2491[3]
  i2490.grabPassTextureName = i2491[4]
  i2490.usePass = !!i2491[5]
  i2490.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2491[6], i2490.zTest)
  i2490.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2491[7], i2490.zWrite)
  i2490.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2491[8], i2490.culling)
  i2490.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2491[9], i2490.blending)
  i2490.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2491[10], i2490.alphaBlending)
  i2490.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2491[11], i2490.colorWriteMask)
  i2490.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2491[12], i2490.offsetUnits)
  i2490.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2491[13], i2490.offsetFactor)
  i2490.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2491[14], i2490.stencilRef)
  i2490.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2491[15], i2490.stencilReadMask)
  i2490.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2491[16], i2490.stencilWriteMask)
  i2490.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2491[17], i2490.stencilOp)
  i2490.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2491[18], i2490.stencilOpFront)
  i2490.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2491[19], i2490.stencilOpBack)
  var i2493 = i2491[20]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2493[i + 0]) );
  }
  i2490.tags = i2492
  var i2495 = i2491[21]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.push( i2495[i + 0] );
  }
  i2490.passDefinedKeywords = i2494
  var i2497 = i2491[22]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2497[i + 0]) );
  }
  i2490.passDefinedKeywordGroups = i2496
  var i2499 = i2491[23]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 1) {
    i2498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2499[i + 0]) );
  }
  i2490.variants = i2498
  var i2501 = i2491[24]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2501[i + 0]) );
  }
  i2490.excludedVariants = i2500
  i2490.hasDepthReader = !!i2491[25]
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2503 = data
  i2502.val = i2503[0]
  i2502.name = i2503[1]
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2505 = data
  i2504.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2505[0], i2504.src)
  i2504.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2505[1], i2504.dst)
  i2504.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2505[2], i2504.op)
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2507 = data
  i2506.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2507[0], i2506.pass)
  i2506.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2507[1], i2506.fail)
  i2506.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2507[2], i2506.zFail)
  i2506.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2507[3], i2506.comp)
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2511 = data
  i2510.name = i2511[0]
  i2510.value = i2511[1]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2515 = data
  var i2517 = i2515[0]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.push( i2517[i + 0] );
  }
  i2514.keywords = i2516
  i2514.hasDiscard = !!i2515[1]
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2521 = data
  i2520.passId = i2521[0]
  i2520.subShaderIndex = i2521[1]
  var i2523 = i2521[2]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( i2523[i + 0] );
  }
  i2520.keywords = i2522
  i2520.vertexProgram = i2521[3]
  i2520.fragmentProgram = i2521[4]
  i2520.exportedForWebGl2 = !!i2521[5]
  i2520.readDepth = !!i2521[6]
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2527 = data
  request.r(i2527[0], i2527[1], 0, i2526, 'shader')
  i2526.pass = i2527[2]
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2531 = data
  i2530.name = i2531[0]
  i2530.type = i2531[1]
  i2530.value = new pc.Vec4( i2531[2], i2531[3], i2531[4], i2531[5] )
  i2530.textureValue = i2531[6]
  i2530.shaderPropertyFlag = i2531[7]
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2533 = data
  i2532.name = i2533[0]
  request.r(i2533[1], i2533[2], 0, i2532, 'texture')
  i2532.aabb = i2533[3]
  i2532.vertices = i2533[4]
  i2532.triangles = i2533[5]
  i2532.textureRect = UnityEngine.Rect.MinMaxRect(i2533[6], i2533[7], i2533[8], i2533[9])
  i2532.packedRect = UnityEngine.Rect.MinMaxRect(i2533[10], i2533[11], i2533[12], i2533[13])
  i2532.border = new pc.Vec4( i2533[14], i2533[15], i2533[16], i2533[17] )
  i2532.transparency = i2533[18]
  i2532.bounds = i2533[19]
  i2532.pixelsPerUnit = i2533[20]
  i2532.textureWidth = i2533[21]
  i2532.textureHeight = i2533[22]
  i2532.nativeSize = new pc.Vec2( i2533[23], i2533[24] )
  i2532.pivot = new pc.Vec2( i2533[25], i2533[26] )
  i2532.textureRectOffset = new pc.Vec2( i2533[27], i2533[28] )
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2535 = data
  i2534.name = i2535[0]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2537 = data
  i2536.name = i2537[0]
  i2536.wrapMode = i2537[1]
  i2536.isLooping = !!i2537[2]
  i2536.length = i2537[3]
  var i2539 = i2537[4]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2539[i + 0]) );
  }
  i2536.curves = i2538
  var i2541 = i2537[5]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2541[i + 0]) );
  }
  i2536.events = i2540
  i2536.halfPrecision = !!i2537[6]
  i2536._frameRate = i2537[7]
  i2536.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2537[8], i2536.localBounds)
  i2536.hasMuscleCurves = !!i2537[9]
  var i2543 = i2537[10]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( i2543[i + 0] );
  }
  i2536.clipMuscleConstant = i2542
  i2536.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2537[11], i2536.clipBindingConstant)
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2547 = data
  i2546.path = i2547[0]
  i2546.hash = i2547[1]
  i2546.componentType = i2547[2]
  i2546.property = i2547[3]
  i2546.keys = i2547[4]
  var i2549 = i2547[5]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2549[i + 0]) );
  }
  i2546.objectReferenceKeys = i2548
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2553 = data
  i2552.time = i2553[0]
  request.r(i2553[1], i2553[2], 0, i2552, 'value')
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2557 = data
  i2556.functionName = i2557[0]
  i2556.floatParameter = i2557[1]
  i2556.intParameter = i2557[2]
  i2556.stringParameter = i2557[3]
  request.r(i2557[4], i2557[5], 0, i2556, 'objectReferenceParameter')
  i2556.time = i2557[6]
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2559 = data
  i2558.center = new pc.Vec3( i2559[0], i2559[1], i2559[2] )
  i2558.extends = new pc.Vec3( i2559[3], i2559[4], i2559[5] )
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2563 = data
  var i2565 = i2563[0]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.push( i2565[i + 0] );
  }
  i2562.genericBindings = i2564
  var i2567 = i2563[1]
  var i2566 = []
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.push( i2567[i + 0] );
  }
  i2562.pptrCurveMapping = i2566
  return i2562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2569 = data
  i2568.name = i2569[0]
  var i2571 = i2569[1]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2571[i + 0]) );
  }
  i2568.layers = i2570
  var i2573 = i2569[2]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2573[i + 0]) );
  }
  i2568.parameters = i2572
  i2568.animationClips = i2569[3]
  i2568.avatarUnsupported = i2569[4]
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2577 = data
  i2576.name = i2577[0]
  i2576.defaultWeight = i2577[1]
  i2576.blendingMode = i2577[2]
  i2576.avatarMask = i2577[3]
  i2576.syncedLayerIndex = i2577[4]
  i2576.syncedLayerAffectsTiming = !!i2577[5]
  i2576.syncedLayers = i2577[6]
  i2576.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2577[7], i2576.stateMachine)
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2579 = data
  i2578.id = i2579[0]
  i2578.name = i2579[1]
  i2578.path = i2579[2]
  var i2581 = i2579[3]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2581[i + 0]) );
  }
  i2578.states = i2580
  var i2583 = i2579[4]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2583[i + 0]) );
  }
  i2578.machines = i2582
  var i2585 = i2579[5]
  var i2584 = []
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2585[i + 0]) );
  }
  i2578.entryStateTransitions = i2584
  var i2587 = i2579[6]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2587[i + 0]) );
  }
  i2578.exitStateTransitions = i2586
  var i2589 = i2579[7]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2589[i + 0]) );
  }
  i2578.anyStateTransitions = i2588
  i2578.defaultStateId = i2579[8]
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2593 = data
  i2592.id = i2593[0]
  i2592.name = i2593[1]
  i2592.cycleOffset = i2593[2]
  i2592.cycleOffsetParameter = i2593[3]
  i2592.cycleOffsetParameterActive = !!i2593[4]
  i2592.mirror = !!i2593[5]
  i2592.mirrorParameter = i2593[6]
  i2592.mirrorParameterActive = !!i2593[7]
  i2592.motionId = i2593[8]
  i2592.nameHash = i2593[9]
  i2592.fullPathHash = i2593[10]
  i2592.speed = i2593[11]
  i2592.speedParameter = i2593[12]
  i2592.speedParameterActive = !!i2593[13]
  i2592.tag = i2593[14]
  i2592.tagHash = i2593[15]
  i2592.writeDefaultValues = !!i2593[16]
  var i2595 = i2593[17]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 2) {
  request.r(i2595[i + 0], i2595[i + 1], 2, i2594, '')
  }
  i2592.behaviours = i2594
  var i2597 = i2593[18]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2597[i + 0]) );
  }
  i2592.transitions = i2596
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2603 = data
  i2602.fullPath = i2603[0]
  i2602.canTransitionToSelf = !!i2603[1]
  i2602.duration = i2603[2]
  i2602.exitTime = i2603[3]
  i2602.hasExitTime = !!i2603[4]
  i2602.hasFixedDuration = !!i2603[5]
  i2602.interruptionSource = i2603[6]
  i2602.offset = i2603[7]
  i2602.orderedInterruption = !!i2603[8]
  i2602.destinationStateId = i2603[9]
  i2602.isExit = !!i2603[10]
  i2602.mute = !!i2603[11]
  i2602.solo = !!i2603[12]
  var i2605 = i2603[13]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2605[i + 0]) );
  }
  i2602.conditions = i2604
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2611 = data
  i2610.destinationStateId = i2611[0]
  i2610.isExit = !!i2611[1]
  i2610.mute = !!i2611[2]
  i2610.solo = !!i2611[3]
  var i2613 = i2611[4]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2613[i + 0]) );
  }
  i2610.conditions = i2612
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2617 = data
  i2616.defaultBool = !!i2617[0]
  i2616.defaultFloat = i2617[1]
  i2616.defaultInt = i2617[2]
  i2616.name = i2617[3]
  i2616.nameHash = i2617[4]
  i2616.type = i2617[5]
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2621 = data
  i2620.mode = i2621[0]
  i2620.parameter = i2621[1]
  i2620.threshold = i2621[2]
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2623 = data
  i2622.name = i2623[0]
  i2622.bytes64 = i2623[1]
  i2622.data = i2623[2]
  return i2622
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2624 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2625 = data
  i2624.normalStyle = i2625[0]
  i2624.normalSpacingOffset = i2625[1]
  i2624.boldStyle = i2625[2]
  i2624.boldSpacing = i2625[3]
  i2624.italicStyle = i2625[4]
  i2624.tabSize = i2625[5]
  request.r(i2625[6], i2625[7], 0, i2624, 'atlas')
  i2624.m_SourceFontFileGUID = i2625[8]
  i2624.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2625[9], i2624.m_CreationSettings)
  request.r(i2625[10], i2625[11], 0, i2624, 'm_SourceFontFile')
  i2624.m_SourceFontFilePath = i2625[12]
  i2624.m_AtlasPopulationMode = i2625[13]
  i2624.InternalDynamicOS = !!i2625[14]
  var i2627 = i2625[15]
  var i2626 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2627.length; i += 1) {
    i2626.add(request.d('UnityEngine.TextCore.Glyph', i2627[i + 0]));
  }
  i2624.m_GlyphTable = i2626
  var i2629 = i2625[16]
  var i2628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.add(request.d('TMPro.TMP_Character', i2629[i + 0]));
  }
  i2624.m_CharacterTable = i2628
  var i2631 = i2625[17]
  var i2630 = []
  for(var i = 0; i < i2631.length; i += 2) {
  request.r(i2631[i + 0], i2631[i + 1], 2, i2630, '')
  }
  i2624.m_AtlasTextures = i2630
  i2624.m_AtlasTextureIndex = i2625[18]
  i2624.m_IsMultiAtlasTexturesEnabled = !!i2625[19]
  i2624.m_GetFontFeatures = !!i2625[20]
  i2624.m_ClearDynamicDataOnBuild = !!i2625[21]
  i2624.m_AtlasWidth = i2625[22]
  i2624.m_AtlasHeight = i2625[23]
  i2624.m_AtlasPadding = i2625[24]
  i2624.m_AtlasRenderMode = i2625[25]
  var i2633 = i2625[26]
  var i2632 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.add(request.d('UnityEngine.TextCore.GlyphRect', i2633[i + 0]));
  }
  i2624.m_UsedGlyphRects = i2632
  var i2635 = i2625[27]
  var i2634 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.add(request.d('UnityEngine.TextCore.GlyphRect', i2635[i + 0]));
  }
  i2624.m_FreeGlyphRects = i2634
  i2624.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2625[28], i2624.m_FontFeatureTable)
  i2624.m_ShouldReimportFontFeatures = !!i2625[29]
  var i2637 = i2625[30]
  var i2636 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2637.length; i += 2) {
  request.r(i2637[i + 0], i2637[i + 1], 1, i2636, '')
  }
  i2624.m_FallbackFontAssetTable = i2636
  var i2639 = i2625[31]
  var i2638 = []
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.push( request.d('TMPro.TMP_FontWeightPair', i2639[i + 0]) );
  }
  i2624.m_FontWeightTable = i2638
  var i2641 = i2625[32]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.push( request.d('TMPro.TMP_FontWeightPair', i2641[i + 0]) );
  }
  i2624.fontWeights = i2640
  i2624.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2625[33], i2624.m_fontInfo)
  var i2643 = i2625[34]
  var i2642 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.add(request.d('TMPro.TMP_Glyph', i2643[i + 0]));
  }
  i2624.m_glyphInfoList = i2642
  i2624.m_KerningTable = request.d('TMPro.KerningTable', i2625[35], i2624.m_KerningTable)
  var i2645 = i2625[36]
  var i2644 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2645.length; i += 2) {
  request.r(i2645[i + 0], i2645[i + 1], 1, i2644, '')
  }
  i2624.fallbackFontAssets = i2644
  i2624.m_Version = i2625[37]
  i2624.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2625[38], i2624.m_FaceInfo)
  request.r(i2625[39], i2625[40], 0, i2624, 'm_Material')
  return i2624
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2646 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2647 = data
  i2646.sourceFontFileName = i2647[0]
  i2646.sourceFontFileGUID = i2647[1]
  i2646.faceIndex = i2647[2]
  i2646.pointSizeSamplingMode = i2647[3]
  i2646.pointSize = i2647[4]
  i2646.padding = i2647[5]
  i2646.paddingMode = i2647[6]
  i2646.packingMode = i2647[7]
  i2646.atlasWidth = i2647[8]
  i2646.atlasHeight = i2647[9]
  i2646.characterSetSelectionMode = i2647[10]
  i2646.characterSequence = i2647[11]
  i2646.referencedFontAssetGUID = i2647[12]
  i2646.referencedTextAssetGUID = i2647[13]
  i2646.fontStyle = i2647[14]
  i2646.fontStyleModifier = i2647[15]
  i2646.renderMode = i2647[16]
  i2646.includeFontFeatures = !!i2647[17]
  return i2646
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2650 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2651 = data
  i2650.m_Index = i2651[0]
  i2650.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2651[1], i2650.m_Metrics)
  i2650.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2651[2], i2650.m_GlyphRect)
  i2650.m_Scale = i2651[3]
  i2650.m_AtlasIndex = i2651[4]
  i2650.m_ClassDefinitionType = i2651[5]
  return i2650
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2652 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2653 = data
  i2652.m_Width = i2653[0]
  i2652.m_Height = i2653[1]
  i2652.m_HorizontalBearingX = i2653[2]
  i2652.m_HorizontalBearingY = i2653[3]
  i2652.m_HorizontalAdvance = i2653[4]
  return i2652
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2654 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2655 = data
  i2654.m_X = i2655[0]
  i2654.m_Y = i2655[1]
  i2654.m_Width = i2655[2]
  i2654.m_Height = i2655[3]
  return i2654
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2658 = root || request.c( 'TMPro.TMP_Character' )
  var i2659 = data
  i2658.m_ElementType = i2659[0]
  i2658.m_Unicode = i2659[1]
  i2658.m_GlyphIndex = i2659[2]
  i2658.m_Scale = i2659[3]
  return i2658
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2664 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2665 = data
  var i2667 = i2665[0]
  var i2666 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.add(request.d('TMPro.MultipleSubstitutionRecord', i2667[i + 0]));
  }
  i2664.m_MultipleSubstitutionRecords = i2666
  var i2669 = i2665[1]
  var i2668 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.add(request.d('TMPro.LigatureSubstitutionRecord', i2669[i + 0]));
  }
  i2664.m_LigatureSubstitutionRecords = i2668
  var i2671 = i2665[2]
  var i2670 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2671[i + 0]));
  }
  i2664.m_GlyphPairAdjustmentRecords = i2670
  var i2673 = i2665[3]
  var i2672 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2673[i + 0]));
  }
  i2664.m_MarkToBaseAdjustmentRecords = i2672
  var i2675 = i2665[4]
  var i2674 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2675[i + 0]));
  }
  i2664.m_MarkToMarkAdjustmentRecords = i2674
  return i2664
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2678 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2679 = data
  i2678.m_TargetGlyphID = i2679[0]
  i2678.m_SubstituteGlyphIDs = i2679[1]
  return i2678
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2682 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2683 = data
  i2682.m_ComponentGlyphIDs = i2683[0]
  i2682.m_LigatureGlyphID = i2683[1]
  return i2682
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2686 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2687 = data
  i2686.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2687[0], i2686.m_FirstAdjustmentRecord)
  i2686.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2687[1], i2686.m_SecondAdjustmentRecord)
  i2686.m_FeatureLookupFlags = i2687[2]
  return i2686
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2690 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2691 = data
  i2690.m_BaseGlyphID = i2691[0]
  i2690.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2691[1], i2690.m_BaseGlyphAnchorPoint)
  i2690.m_MarkGlyphID = i2691[2]
  i2690.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2691[3], i2690.m_MarkPositionAdjustment)
  return i2690
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2694 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2695 = data
  i2694.m_BaseMarkGlyphID = i2695[0]
  i2694.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2695[1], i2694.m_BaseMarkGlyphAnchorPoint)
  i2694.m_CombiningMarkGlyphID = i2695[2]
  i2694.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2695[3], i2694.m_CombiningMarkPositionAdjustment)
  return i2694
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2700 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2701 = data
  request.r(i2701[0], i2701[1], 0, i2700, 'regularTypeface')
  request.r(i2701[2], i2701[3], 0, i2700, 'italicTypeface')
  return i2700
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2702 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2703 = data
  i2702.Name = i2703[0]
  i2702.PointSize = i2703[1]
  i2702.Scale = i2703[2]
  i2702.CharacterCount = i2703[3]
  i2702.LineHeight = i2703[4]
  i2702.Baseline = i2703[5]
  i2702.Ascender = i2703[6]
  i2702.CapHeight = i2703[7]
  i2702.Descender = i2703[8]
  i2702.CenterLine = i2703[9]
  i2702.SuperscriptOffset = i2703[10]
  i2702.SubscriptOffset = i2703[11]
  i2702.SubSize = i2703[12]
  i2702.Underline = i2703[13]
  i2702.UnderlineThickness = i2703[14]
  i2702.strikethrough = i2703[15]
  i2702.strikethroughThickness = i2703[16]
  i2702.TabWidth = i2703[17]
  i2702.Padding = i2703[18]
  i2702.AtlasWidth = i2703[19]
  i2702.AtlasHeight = i2703[20]
  return i2702
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2706 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2707 = data
  i2706.id = i2707[0]
  i2706.x = i2707[1]
  i2706.y = i2707[2]
  i2706.width = i2707[3]
  i2706.height = i2707[4]
  i2706.xOffset = i2707[5]
  i2706.yOffset = i2707[6]
  i2706.xAdvance = i2707[7]
  i2706.scale = i2707[8]
  return i2706
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2708 = root || request.c( 'TMPro.KerningTable' )
  var i2709 = data
  var i2711 = i2709[0]
  var i2710 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.add(request.d('TMPro.KerningPair', i2711[i + 0]));
  }
  i2708.kerningPairs = i2710
  return i2708
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2714 = root || request.c( 'TMPro.KerningPair' )
  var i2715 = data
  i2714.xOffset = i2715[0]
  i2714.m_FirstGlyph = i2715[1]
  i2714.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2715[2], i2714.m_FirstGlyphAdjustments)
  i2714.m_SecondGlyph = i2715[3]
  i2714.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2715[4], i2714.m_SecondGlyphAdjustments)
  i2714.m_IgnoreSpacingAdjustments = !!i2715[5]
  return i2714
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2716 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2717 = data
  i2716.m_FaceIndex = i2717[0]
  i2716.m_FamilyName = i2717[1]
  i2716.m_StyleName = i2717[2]
  i2716.m_PointSize = i2717[3]
  i2716.m_Scale = i2717[4]
  i2716.m_UnitsPerEM = i2717[5]
  i2716.m_LineHeight = i2717[6]
  i2716.m_AscentLine = i2717[7]
  i2716.m_CapLine = i2717[8]
  i2716.m_MeanLine = i2717[9]
  i2716.m_Baseline = i2717[10]
  i2716.m_DescentLine = i2717[11]
  i2716.m_SuperscriptOffset = i2717[12]
  i2716.m_SuperscriptSize = i2717[13]
  i2716.m_SubscriptOffset = i2717[14]
  i2716.m_SubscriptSize = i2717[15]
  i2716.m_UnderlineOffset = i2717[16]
  i2716.m_UnderlineThickness = i2717[17]
  i2716.m_StrikethroughOffset = i2717[18]
  i2716.m_StrikethroughThickness = i2717[19]
  i2716.m_TabWidth = i2717[20]
  return i2716
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2718 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2719 = data
  i2718.useSafeMode = !!i2719[0]
  i2718.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2719[1], i2718.safeModeOptions)
  i2718.timeScale = i2719[2]
  i2718.unscaledTimeScale = i2719[3]
  i2718.useSmoothDeltaTime = !!i2719[4]
  i2718.maxSmoothUnscaledTime = i2719[5]
  i2718.rewindCallbackMode = i2719[6]
  i2718.showUnityEditorReport = !!i2719[7]
  i2718.logBehaviour = i2719[8]
  i2718.drawGizmos = !!i2719[9]
  i2718.defaultRecyclable = !!i2719[10]
  i2718.defaultAutoPlay = i2719[11]
  i2718.defaultUpdateType = i2719[12]
  i2718.defaultTimeScaleIndependent = !!i2719[13]
  i2718.defaultEaseType = i2719[14]
  i2718.defaultEaseOvershootOrAmplitude = i2719[15]
  i2718.defaultEasePeriod = i2719[16]
  i2718.defaultAutoKill = !!i2719[17]
  i2718.defaultLoopType = i2719[18]
  i2718.debugMode = !!i2719[19]
  i2718.debugStoreTargetId = !!i2719[20]
  i2718.showPreviewPanel = !!i2719[21]
  i2718.storeSettingsLocation = i2719[22]
  i2718.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2719[23], i2718.modules)
  i2718.createASMDEF = !!i2719[24]
  i2718.showPlayingTweens = !!i2719[25]
  i2718.showPausedTweens = !!i2719[26]
  return i2718
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2720 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2721 = data
  i2720.logBehaviour = i2721[0]
  i2720.nestedTweenFailureBehaviour = i2721[1]
  return i2720
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2722 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2723 = data
  i2722.showPanel = !!i2723[0]
  i2722.audioEnabled = !!i2723[1]
  i2722.physicsEnabled = !!i2723[2]
  i2722.physics2DEnabled = !!i2723[3]
  i2722.spriteEnabled = !!i2723[4]
  i2722.uiEnabled = !!i2723[5]
  i2722.uiToolkitEnabled = !!i2723[6]
  i2722.textMeshProEnabled = !!i2723[7]
  i2722.tk2DEnabled = !!i2723[8]
  i2722.deAudioEnabled = !!i2723[9]
  i2722.deUnityExtendedEnabled = !!i2723[10]
  i2722.epoOutlineEnabled = !!i2723[11]
  return i2722
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2724 = root || request.c( 'TMPro.TMP_Settings' )
  var i2725 = data
  i2724.assetVersion = i2725[0]
  i2724.m_TextWrappingMode = i2725[1]
  i2724.m_enableKerning = !!i2725[2]
  var i2727 = i2725[3]
  var i2726 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.add(i2727[i + 0]);
  }
  i2724.m_ActiveFontFeatures = i2726
  i2724.m_enableExtraPadding = !!i2725[4]
  i2724.m_enableTintAllSprites = !!i2725[5]
  i2724.m_enableParseEscapeCharacters = !!i2725[6]
  i2724.m_EnableRaycastTarget = !!i2725[7]
  i2724.m_GetFontFeaturesAtRuntime = !!i2725[8]
  i2724.m_missingGlyphCharacter = i2725[9]
  i2724.m_ClearDynamicDataOnBuild = !!i2725[10]
  i2724.m_warningsDisabled = !!i2725[11]
  request.r(i2725[12], i2725[13], 0, i2724, 'm_defaultFontAsset')
  i2724.m_defaultFontAssetPath = i2725[14]
  i2724.m_defaultFontSize = i2725[15]
  i2724.m_defaultAutoSizeMinRatio = i2725[16]
  i2724.m_defaultAutoSizeMaxRatio = i2725[17]
  i2724.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2725[18], i2725[19] )
  i2724.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2725[20], i2725[21] )
  i2724.m_autoSizeTextContainer = !!i2725[22]
  i2724.m_IsTextObjectScaleStatic = !!i2725[23]
  var i2729 = i2725[24]
  var i2728 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2729.length; i += 2) {
  request.r(i2729[i + 0], i2729[i + 1], 1, i2728, '')
  }
  i2724.m_fallbackFontAssets = i2728
  i2724.m_matchMaterialPreset = !!i2725[25]
  i2724.m_HideSubTextObjects = !!i2725[26]
  request.r(i2725[27], i2725[28], 0, i2724, 'm_defaultSpriteAsset')
  i2724.m_defaultSpriteAssetPath = i2725[29]
  i2724.m_enableEmojiSupport = !!i2725[30]
  i2724.m_MissingCharacterSpriteUnicode = i2725[31]
  var i2731 = i2725[32]
  var i2730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2731.length; i += 2) {
  request.r(i2731[i + 0], i2731[i + 1], 1, i2730, '')
  }
  i2724.m_EmojiFallbackTextAssets = i2730
  i2724.m_defaultColorGradientPresetsPath = i2725[33]
  request.r(i2725[34], i2725[35], 0, i2724, 'm_defaultStyleSheet')
  i2724.m_StyleSheetsResourcePath = i2725[36]
  request.r(i2725[37], i2725[38], 0, i2724, 'm_leadingCharacters')
  request.r(i2725[39], i2725[40], 0, i2724, 'm_followingCharacters')
  i2724.m_UseModernHangulLineBreakingRules = !!i2725[41]
  return i2724
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2734 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2735 = data
  request.r(i2735[0], i2735[1], 0, i2734, 'spriteSheet')
  var i2737 = i2735[2]
  var i2736 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2737.length; i += 1) {
    i2736.add(request.d('TMPro.TMP_Sprite', i2737[i + 0]));
  }
  i2734.spriteInfoList = i2736
  var i2739 = i2735[3]
  var i2738 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2739.length; i += 2) {
  request.r(i2739[i + 0], i2739[i + 1], 1, i2738, '')
  }
  i2734.fallbackSpriteAssets = i2738
  var i2741 = i2735[4]
  var i2740 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.add(request.d('TMPro.TMP_SpriteCharacter', i2741[i + 0]));
  }
  i2734.m_SpriteCharacterTable = i2740
  var i2743 = i2735[5]
  var i2742 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2743.length; i += 1) {
    i2742.add(request.d('TMPro.TMP_SpriteGlyph', i2743[i + 0]));
  }
  i2734.m_GlyphTable = i2742
  i2734.m_Version = i2735[6]
  i2734.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2735[7], i2734.m_FaceInfo)
  request.r(i2735[8], i2735[9], 0, i2734, 'm_Material')
  return i2734
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2746 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2747 = data
  i2746.name = i2747[0]
  i2746.hashCode = i2747[1]
  i2746.unicode = i2747[2]
  i2746.pivot = new pc.Vec2( i2747[3], i2747[4] )
  request.r(i2747[5], i2747[6], 0, i2746, 'sprite')
  i2746.id = i2747[7]
  i2746.x = i2747[8]
  i2746.y = i2747[9]
  i2746.width = i2747[10]
  i2746.height = i2747[11]
  i2746.xOffset = i2747[12]
  i2746.yOffset = i2747[13]
  i2746.xAdvance = i2747[14]
  i2746.scale = i2747[15]
  return i2746
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2752 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2753 = data
  i2752.m_Name = i2753[0]
  i2752.m_ElementType = i2753[1]
  i2752.m_Unicode = i2753[2]
  i2752.m_GlyphIndex = i2753[3]
  i2752.m_Scale = i2753[4]
  return i2752
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2756 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2757 = data
  request.r(i2757[0], i2757[1], 0, i2756, 'sprite')
  i2756.m_Index = i2757[2]
  i2756.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2757[3], i2756.m_Metrics)
  i2756.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2757[4], i2756.m_GlyphRect)
  i2756.m_Scale = i2757[5]
  i2756.m_AtlasIndex = i2757[6]
  i2756.m_ClassDefinitionType = i2757[7]
  return i2756
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2758 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2759 = data
  var i2761 = i2759[0]
  var i2760 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2761.length; i += 1) {
    i2760.add(request.d('TMPro.TMP_Style', i2761[i + 0]));
  }
  i2758.m_StyleList = i2760
  return i2758
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2764 = root || request.c( 'TMPro.TMP_Style' )
  var i2765 = data
  i2764.m_Name = i2765[0]
  i2764.m_HashCode = i2765[1]
  i2764.m_OpeningDefinition = i2765[2]
  i2764.m_ClosingDefinition = i2765[3]
  i2764.m_OpeningTagArray = i2765[4]
  i2764.m_ClosingTagArray = i2765[5]
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2767 = data
  var i2769 = i2767[0]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2769[i + 0]) );
  }
  i2766.files = i2768
  i2766.componentToPrefabIds = i2767[1]
  return i2766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2773 = data
  i2772.path = i2773[0]
  request.r(i2773[1], i2773[2], 0, i2772, 'unityObject')
  return i2772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2775 = data
  var i2777 = i2775[0]
  var i2776 = []
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2777[i + 0]) );
  }
  i2774.scriptsExecutionOrder = i2776
  var i2779 = i2775[1]
  var i2778 = []
  for(var i = 0; i < i2779.length; i += 1) {
    i2778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2779[i + 0]) );
  }
  i2774.sortingLayers = i2778
  var i2781 = i2775[2]
  var i2780 = []
  for(var i = 0; i < i2781.length; i += 1) {
    i2780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2781[i + 0]) );
  }
  i2774.cullingLayers = i2780
  i2774.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2775[3], i2774.timeSettings)
  i2774.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2775[4], i2774.physicsSettings)
  i2774.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2775[5], i2774.physics2DSettings)
  i2774.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2775[6], i2774.qualitySettings)
  i2774.enableRealtimeShadows = !!i2775[7]
  i2774.enableAutoInstancing = !!i2775[8]
  i2774.enableStaticBatching = !!i2775[9]
  i2774.enableDynamicBatching = !!i2775[10]
  i2774.lightmapEncodingQuality = i2775[11]
  i2774.desiredColorSpace = i2775[12]
  var i2783 = i2775[13]
  var i2782 = []
  for(var i = 0; i < i2783.length; i += 1) {
    i2782.push( i2783[i + 0] );
  }
  i2774.allTags = i2782
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2787 = data
  i2786.name = i2787[0]
  i2786.value = i2787[1]
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2791 = data
  i2790.id = i2791[0]
  i2790.name = i2791[1]
  i2790.value = i2791[2]
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2795 = data
  i2794.id = i2795[0]
  i2794.name = i2795[1]
  return i2794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2797 = data
  i2796.fixedDeltaTime = i2797[0]
  i2796.maximumDeltaTime = i2797[1]
  i2796.timeScale = i2797[2]
  i2796.maximumParticleTimestep = i2797[3]
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2799 = data
  i2798.gravity = new pc.Vec3( i2799[0], i2799[1], i2799[2] )
  i2798.defaultSolverIterations = i2799[3]
  i2798.bounceThreshold = i2799[4]
  i2798.autoSyncTransforms = !!i2799[5]
  i2798.autoSimulation = !!i2799[6]
  var i2801 = i2799[7]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2801[i + 0]) );
  }
  i2798.collisionMatrix = i2800
  return i2798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2805 = data
  i2804.enabled = !!i2805[0]
  i2804.layerId = i2805[1]
  i2804.otherLayerId = i2805[2]
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2807 = data
  request.r(i2807[0], i2807[1], 0, i2806, 'material')
  i2806.gravity = new pc.Vec2( i2807[2], i2807[3] )
  i2806.positionIterations = i2807[4]
  i2806.velocityIterations = i2807[5]
  i2806.velocityThreshold = i2807[6]
  i2806.maxLinearCorrection = i2807[7]
  i2806.maxAngularCorrection = i2807[8]
  i2806.maxTranslationSpeed = i2807[9]
  i2806.maxRotationSpeed = i2807[10]
  i2806.baumgarteScale = i2807[11]
  i2806.baumgarteTOIScale = i2807[12]
  i2806.timeToSleep = i2807[13]
  i2806.linearSleepTolerance = i2807[14]
  i2806.angularSleepTolerance = i2807[15]
  i2806.defaultContactOffset = i2807[16]
  i2806.autoSimulation = !!i2807[17]
  i2806.queriesHitTriggers = !!i2807[18]
  i2806.queriesStartInColliders = !!i2807[19]
  i2806.callbacksOnDisable = !!i2807[20]
  i2806.reuseCollisionCallbacks = !!i2807[21]
  i2806.autoSyncTransforms = !!i2807[22]
  var i2809 = i2807[23]
  var i2808 = []
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2809[i + 0]) );
  }
  i2806.collisionMatrix = i2808
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2813 = data
  i2812.enabled = !!i2813[0]
  i2812.layerId = i2813[1]
  i2812.otherLayerId = i2813[2]
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2815 = data
  var i2817 = i2815[0]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2817[i + 0]) );
  }
  i2814.qualityLevels = i2816
  var i2819 = i2815[1]
  var i2818 = []
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.push( i2819[i + 0] );
  }
  i2814.names = i2818
  i2814.shadows = i2815[2]
  i2814.anisotropicFiltering = i2815[3]
  i2814.antiAliasing = i2815[4]
  i2814.lodBias = i2815[5]
  i2814.shadowCascades = i2815[6]
  i2814.shadowDistance = i2815[7]
  i2814.shadowmaskMode = i2815[8]
  i2814.shadowProjection = i2815[9]
  i2814.shadowResolution = i2815[10]
  i2814.softParticles = !!i2815[11]
  i2814.softVegetation = !!i2815[12]
  i2814.activeColorSpace = i2815[13]
  i2814.desiredColorSpace = i2815[14]
  i2814.masterTextureLimit = i2815[15]
  i2814.maxQueuedFrames = i2815[16]
  i2814.particleRaycastBudget = i2815[17]
  i2814.pixelLightCount = i2815[18]
  i2814.realtimeReflectionProbes = !!i2815[19]
  i2814.shadowCascade2Split = i2815[20]
  i2814.shadowCascade4Split = new pc.Vec3( i2815[21], i2815[22], i2815[23] )
  i2814.streamingMipmapsActive = !!i2815[24]
  i2814.vSyncCount = i2815[25]
  i2814.asyncUploadBufferSize = i2815[26]
  i2814.asyncUploadTimeSlice = i2815[27]
  i2814.billboardsFaceCameraPosition = !!i2815[28]
  i2814.shadowNearPlaneOffset = i2815[29]
  i2814.streamingMipmapsMemoryBudget = i2815[30]
  i2814.maximumLODLevel = i2815[31]
  i2814.streamingMipmapsAddAllCameras = !!i2815[32]
  i2814.streamingMipmapsMaxLevelReduction = i2815[33]
  i2814.streamingMipmapsRenderersPerFrame = i2815[34]
  i2814.resolutionScalingFixedDPIFactor = i2815[35]
  i2814.streamingMipmapsMaxFileIORequests = i2815[36]
  i2814.currentQualityLevel = i2815[37]
  return i2814
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2822 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2823 = data
  i2822.m_GlyphIndex = i2823[0]
  i2822.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2823[1], i2822.m_GlyphValueRecord)
  return i2822
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2824 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2825 = data
  i2824.m_XCoordinate = i2825[0]
  i2824.m_YCoordinate = i2825[1]
  return i2824
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2826 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2827 = data
  i2826.m_XPositionAdjustment = i2827[0]
  i2826.m_YPositionAdjustment = i2827[1]
  return i2826
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2828 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2829 = data
  i2828.xPlacement = i2829[0]
  i2828.yPlacement = i2829[1]
  i2828.xAdvance = i2829[2]
  i2828.yAdvance = i2829[3]
  return i2828
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2830 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2831 = data
  i2830.m_XPlacement = i2831[0]
  i2830.m_YPlacement = i2831[1]
  i2830.m_XAdvance = i2831[2]
  i2830.m_YAdvance = i2831[3]
  return i2830
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[73],"74":[28],"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[83],"84":[83],"85":[83],"86":[83],"87":[83],"88":[83],"89":[83],"90":[83],"91":[83],"92":[83],"93":[83],"94":[83],"95":[83],"96":[28],"97":[98],"99":[100],"101":[100],"27":[13],"102":[59],"103":[20],"55":[104],"58":[20],"20":[104],"24":[20],"105":[20],"106":[104],"107":[104],"57":[104],"108":[13],"109":[16,13],"110":[98],"111":[16,13],"112":[25,98],"113":[98],"114":[98,115],"116":[76],"117":[83],"118":[119],"120":[121],"122":[5],"123":[28],"124":[125],"126":[13],"127":[98,13],"32":[13,16],"128":[13],"129":[16,13],"130":[98],"131":[16,13],"132":[13],"133":[134],"135":[134],"136":[134],"137":[13],"138":[13],"30":[27],"15":[16,13],"139":[13],"29":[27],"140":[13],"141":[13],"142":[13],"143":[13],"144":[13],"145":[13],"146":[13],"147":[13],"148":[13],"149":[16,13],"150":[13],"151":[13],"152":[13],"36":[13],"153":[16,13],"154":[13],"155":[53],"156":[53],"54":[53],"157":[53],"158":[28],"159":[28]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","WaterSplash","UnityEngine.SphereCollider","ItemDraggable","Paper","ItemMoveToTarget","UnityEngine.GameObject","ItemDragRaycastTarget","UnityEngine.Animator","ItemSound","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","UnityEngine.UI.Slider","ProgressSlider","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","InputManager","HandTutManager","Pan","Item","Spartula","SortChildByZPos","PhaseManager","ItemTypeDoneManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ItemClickable","UnityEngine.CapsuleCollider","ItemStirring","ItemDragChildRotator","UnityEngine.SpriteMask","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BrushMaskUnit","OilBrush","UnityEngine.Collider","ItemDragSpriteMaskPainter","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "42.7";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "5015";

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

Deserializers.buildID = "0535d6ff-e06c-4847-a377-4f34bc65ca6d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

