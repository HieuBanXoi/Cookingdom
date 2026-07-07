var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2148 = root || request.c( 'UnityEngine.JointSpring' )
  var i2149 = data
  i2148.spring = i2149[0]
  i2148.damper = i2149[1]
  i2148.targetPosition = i2149[2]
  return i2148
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2150 = root || request.c( 'UnityEngine.JointMotor' )
  var i2151 = data
  i2150.m_TargetVelocity = i2151[0]
  i2150.m_Force = i2151[1]
  i2150.m_FreeSpin = i2151[2]
  return i2150
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2152 = root || request.c( 'UnityEngine.JointLimits' )
  var i2153 = data
  i2152.m_Min = i2153[0]
  i2152.m_Max = i2153[1]
  i2152.m_Bounciness = i2153[2]
  i2152.m_BounceMinVelocity = i2153[3]
  i2152.m_ContactDistance = i2153[4]
  i2152.minBounce = i2153[5]
  i2152.maxBounce = i2153[6]
  return i2152
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2154 = root || request.c( 'UnityEngine.JointDrive' )
  var i2155 = data
  i2154.m_PositionSpring = i2155[0]
  i2154.m_PositionDamper = i2155[1]
  i2154.m_MaximumForce = i2155[2]
  i2154.m_UseAcceleration = i2155[3]
  return i2154
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2156 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2157 = data
  i2156.m_Spring = i2157[0]
  i2156.m_Damper = i2157[1]
  return i2156
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2158 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2159 = data
  i2158.m_Limit = i2159[0]
  i2158.m_Bounciness = i2159[1]
  i2158.m_ContactDistance = i2159[2]
  return i2158
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2161 = data
  i2160.m_ExtremumSlip = i2161[0]
  i2160.m_ExtremumValue = i2161[1]
  i2160.m_AsymptoteSlip = i2161[2]
  i2160.m_AsymptoteValue = i2161[3]
  i2160.m_Stiffness = i2161[4]
  return i2160
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2162 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2163 = data
  i2162.m_LowerAngle = i2163[0]
  i2162.m_UpperAngle = i2163[1]
  return i2162
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2164 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2165 = data
  i2164.m_MotorSpeed = i2165[0]
  i2164.m_MaximumMotorTorque = i2165[1]
  return i2164
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2166 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2167 = data
  i2166.m_DampingRatio = i2167[0]
  i2166.m_Frequency = i2167[1]
  i2166.m_Angle = i2167[2]
  return i2166
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2168 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2169 = data
  i2168.m_LowerTranslation = i2169[0]
  i2168.m_UpperTranslation = i2169[1]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2170 = root || new pc.UnityMaterial()
  var i2171 = data
  i2170.name = i2171[0]
  request.r(i2171[1], i2171[2], 0, i2170, 'shader')
  i2170.renderQueue = i2171[3]
  i2170.enableInstancing = !!i2171[4]
  var i2173 = i2171[5]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2173[i + 0]) );
  }
  i2170.floatParameters = i2172
  var i2175 = i2171[6]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2175[i + 0]) );
  }
  i2170.colorParameters = i2174
  var i2177 = i2171[7]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2177[i + 0]) );
  }
  i2170.vectorParameters = i2176
  var i2179 = i2171[8]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2179[i + 0]) );
  }
  i2170.textureParameters = i2178
  var i2181 = i2171[9]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 1) {
    i2180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2181[i + 0]) );
  }
  i2170.materialFlags = i2180
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2185 = data
  i2184.name = i2185[0]
  i2184.value = i2185[1]
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2189 = data
  i2188.name = i2189[0]
  i2188.value = new pc.Color(i2189[1], i2189[2], i2189[3], i2189[4])
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2193 = data
  i2192.name = i2193[0]
  i2192.value = new pc.Vec4( i2193[1], i2193[2], i2193[3], i2193[4] )
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2197 = data
  i2196.name = i2197[0]
  request.r(i2197[1], i2197[2], 0, i2196, 'value')
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2201 = data
  i2200.name = i2201[0]
  i2200.enabled = !!i2201[1]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2203 = data
  i2202.name = i2203[0]
  i2202.width = i2203[1]
  i2202.height = i2203[2]
  i2202.mipmapCount = i2203[3]
  i2202.anisoLevel = i2203[4]
  i2202.filterMode = i2203[5]
  i2202.hdr = !!i2203[6]
  i2202.format = i2203[7]
  i2202.wrapMode = i2203[8]
  i2202.alphaIsTransparency = !!i2203[9]
  i2202.alphaSource = i2203[10]
  i2202.graphicsFormat = i2203[11]
  i2202.sRGBTexture = !!i2203[12]
  i2202.desiredColorSpace = i2203[13]
  i2202.wrapU = i2203[14]
  i2202.wrapV = i2203[15]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2205 = data
  i2204.position = new pc.Vec3( i2205[0], i2205[1], i2205[2] )
  i2204.scale = new pc.Vec3( i2205[3], i2205[4], i2205[5] )
  i2204.rotation = new pc.Quat(i2205[6], i2205[7], i2205[8], i2205[9])
  return i2204
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i2206 = root || request.c( 'HeartEffect' )
  var i2207 = data
  i2206.defaultLifeTime = i2207[0]
  request.r(i2207[1], i2207[2], 0, i2206, 'tf')
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2209 = data
  i2208.color = new pc.Color(i2209[0], i2209[1], i2209[2], i2209[3])
  request.r(i2209[4], i2209[5], 0, i2208, 'sprite')
  i2208.flipX = !!i2209[6]
  i2208.flipY = !!i2209[7]
  i2208.drawMode = i2209[8]
  i2208.size = new pc.Vec2( i2209[9], i2209[10] )
  i2208.tileMode = i2209[11]
  i2208.adaptiveModeThreshold = i2209[12]
  i2208.maskInteraction = i2209[13]
  i2208.spriteSortPoint = i2209[14]
  i2208.enabled = !!i2209[15]
  request.r(i2209[16], i2209[17], 0, i2208, 'sharedMaterial')
  var i2211 = i2209[18]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 2) {
  request.r(i2211[i + 0], i2211[i + 1], 2, i2210, '')
  }
  i2208.sharedMaterials = i2210
  i2208.receiveShadows = !!i2209[19]
  i2208.shadowCastingMode = i2209[20]
  i2208.sortingLayerID = i2209[21]
  i2208.sortingOrder = i2209[22]
  i2208.lightmapIndex = i2209[23]
  i2208.lightmapSceneIndex = i2209[24]
  i2208.lightmapScaleOffset = new pc.Vec4( i2209[25], i2209[26], i2209[27], i2209[28] )
  i2208.lightProbeUsage = i2209[29]
  i2208.reflectionProbeUsage = i2209[30]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2215 = data
  i2214.name = i2215[0]
  i2214.tagId = i2215[1]
  i2214.enabled = !!i2215[2]
  i2214.isStatic = !!i2215[3]
  i2214.layer = i2215[4]
  return i2214
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i2216 = root || request.c( 'HeartBreakEffect' )
  var i2217 = data
  i2216.defaultLifeTime = i2217[0]
  request.r(i2217[1], i2217[2], 0, i2216, 'tf')
  return i2216
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i2218 = root || request.c( 'BlinkEffect' )
  var i2219 = data
  request.r(i2219[0], i2219[1], 0, i2218, 'tf')
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2221 = data
  request.r(i2221[0], i2221[1], 0, i2220, 'mesh')
  i2220.meshCount = i2221[2]
  i2220.activeVertexStreamsCount = i2221[3]
  i2220.alignment = i2221[4]
  i2220.renderMode = i2221[5]
  i2220.sortMode = i2221[6]
  i2220.lengthScale = i2221[7]
  i2220.velocityScale = i2221[8]
  i2220.cameraVelocityScale = i2221[9]
  i2220.normalDirection = i2221[10]
  i2220.sortingFudge = i2221[11]
  i2220.minParticleSize = i2221[12]
  i2220.maxParticleSize = i2221[13]
  i2220.pivot = new pc.Vec3( i2221[14], i2221[15], i2221[16] )
  request.r(i2221[17], i2221[18], 0, i2220, 'trailMaterial')
  i2220.applyActiveColorSpace = !!i2221[19]
  i2220.enabled = !!i2221[20]
  request.r(i2221[21], i2221[22], 0, i2220, 'sharedMaterial')
  var i2223 = i2221[23]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 2) {
  request.r(i2223[i + 0], i2223[i + 1], 2, i2222, '')
  }
  i2220.sharedMaterials = i2222
  i2220.receiveShadows = !!i2221[24]
  i2220.shadowCastingMode = i2221[25]
  i2220.sortingLayerID = i2221[26]
  i2220.sortingOrder = i2221[27]
  i2220.lightmapIndex = i2221[28]
  i2220.lightmapSceneIndex = i2221[29]
  i2220.lightmapScaleOffset = new pc.Vec4( i2221[30], i2221[31], i2221[32], i2221[33] )
  i2220.lightProbeUsage = i2221[34]
  i2220.reflectionProbeUsage = i2221[35]
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2225 = data
  i2224.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2225[0], i2224.main)
  i2224.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2225[1], i2224.colorBySpeed)
  i2224.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2225[2], i2224.colorOverLifetime)
  i2224.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2225[3], i2224.emission)
  i2224.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2225[4], i2224.rotationBySpeed)
  i2224.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2225[5], i2224.rotationOverLifetime)
  i2224.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2225[6], i2224.shape)
  i2224.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2225[7], i2224.sizeBySpeed)
  i2224.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2225[8], i2224.sizeOverLifetime)
  i2224.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2225[9], i2224.textureSheetAnimation)
  i2224.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2225[10], i2224.velocityOverLifetime)
  i2224.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2225[11], i2224.noise)
  i2224.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2225[12], i2224.inheritVelocity)
  i2224.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2225[13], i2224.forceOverLifetime)
  i2224.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2225[14], i2224.limitVelocityOverLifetime)
  i2224.useAutoRandomSeed = !!i2225[15]
  i2224.randomSeed = i2225[16]
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2226 = root || new pc.ParticleSystemMain()
  var i2227 = data
  i2226.duration = i2227[0]
  i2226.loop = !!i2227[1]
  i2226.prewarm = !!i2227[2]
  i2226.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[3], i2226.startDelay)
  i2226.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[4], i2226.startLifetime)
  i2226.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[5], i2226.startSpeed)
  i2226.startSize3D = !!i2227[6]
  i2226.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[7], i2226.startSizeX)
  i2226.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[8], i2226.startSizeY)
  i2226.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[9], i2226.startSizeZ)
  i2226.startRotation3D = !!i2227[10]
  i2226.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[11], i2226.startRotationX)
  i2226.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[12], i2226.startRotationY)
  i2226.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[13], i2226.startRotationZ)
  i2226.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2227[14], i2226.startColor)
  i2226.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[15], i2226.gravityModifier)
  i2226.simulationSpace = i2227[16]
  request.r(i2227[17], i2227[18], 0, i2226, 'customSimulationSpace')
  i2226.simulationSpeed = i2227[19]
  i2226.useUnscaledTime = !!i2227[20]
  i2226.scalingMode = i2227[21]
  i2226.playOnAwake = !!i2227[22]
  i2226.maxParticles = i2227[23]
  i2226.emitterVelocityMode = i2227[24]
  i2226.stopAction = i2227[25]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2228 = root || new pc.MinMaxCurve()
  var i2229 = data
  i2228.mode = i2229[0]
  i2228.curveMin = new pc.AnimationCurve( { keys_flow: i2229[1] } )
  i2228.curveMax = new pc.AnimationCurve( { keys_flow: i2229[2] } )
  i2228.curveMultiplier = i2229[3]
  i2228.constantMin = i2229[4]
  i2228.constantMax = i2229[5]
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2230 = root || new pc.MinMaxGradient()
  var i2231 = data
  i2230.mode = i2231[0]
  i2230.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2231[1], i2230.gradientMin)
  i2230.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2231[2], i2230.gradientMax)
  i2230.colorMin = new pc.Color(i2231[3], i2231[4], i2231[5], i2231[6])
  i2230.colorMax = new pc.Color(i2231[7], i2231[8], i2231[9], i2231[10])
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2233 = data
  i2232.mode = i2233[0]
  var i2235 = i2233[1]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 1) {
    i2234.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2235[i + 0]) );
  }
  i2232.colorKeys = i2234
  var i2237 = i2233[2]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2237[i + 0]) );
  }
  i2232.alphaKeys = i2236
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2238 = root || new pc.ParticleSystemColorBySpeed()
  var i2239 = data
  i2238.enabled = !!i2239[0]
  i2238.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2239[1], i2238.color)
  i2238.range = new pc.Vec2( i2239[2], i2239[3] )
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2243 = data
  i2242.color = new pc.Color(i2243[0], i2243[1], i2243[2], i2243[3])
  i2242.time = i2243[4]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2247 = data
  i2246.alpha = i2247[0]
  i2246.time = i2247[1]
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2248 = root || new pc.ParticleSystemColorOverLifetime()
  var i2249 = data
  i2248.enabled = !!i2249[0]
  i2248.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2249[1], i2248.color)
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2250 = root || new pc.ParticleSystemEmitter()
  var i2251 = data
  i2250.enabled = !!i2251[0]
  i2250.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[1], i2250.rateOverTime)
  i2250.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[2], i2250.rateOverDistance)
  var i2253 = i2251[3]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 1) {
    i2252.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2253[i + 0]) );
  }
  i2250.bursts = i2252
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2256 = root || new pc.ParticleSystemBurst()
  var i2257 = data
  i2256.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[0], i2256.count)
  i2256.cycleCount = i2257[1]
  i2256.minCount = i2257[2]
  i2256.maxCount = i2257[3]
  i2256.repeatInterval = i2257[4]
  i2256.time = i2257[5]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2258 = root || new pc.ParticleSystemRotationBySpeed()
  var i2259 = data
  i2258.enabled = !!i2259[0]
  i2258.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2259[1], i2258.x)
  i2258.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2259[2], i2258.y)
  i2258.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2259[3], i2258.z)
  i2258.separateAxes = !!i2259[4]
  i2258.range = new pc.Vec2( i2259[5], i2259[6] )
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2260 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2261 = data
  i2260.enabled = !!i2261[0]
  i2260.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[1], i2260.x)
  i2260.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[2], i2260.y)
  i2260.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[3], i2260.z)
  i2260.separateAxes = !!i2261[4]
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2262 = root || new pc.ParticleSystemShape()
  var i2263 = data
  i2262.enabled = !!i2263[0]
  i2262.shapeType = i2263[1]
  i2262.randomDirectionAmount = i2263[2]
  i2262.sphericalDirectionAmount = i2263[3]
  i2262.randomPositionAmount = i2263[4]
  i2262.alignToDirection = !!i2263[5]
  i2262.radius = i2263[6]
  i2262.radiusMode = i2263[7]
  i2262.radiusSpread = i2263[8]
  i2262.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[9], i2262.radiusSpeed)
  i2262.radiusThickness = i2263[10]
  i2262.angle = i2263[11]
  i2262.length = i2263[12]
  i2262.boxThickness = new pc.Vec3( i2263[13], i2263[14], i2263[15] )
  i2262.meshShapeType = i2263[16]
  request.r(i2263[17], i2263[18], 0, i2262, 'mesh')
  request.r(i2263[19], i2263[20], 0, i2262, 'meshRenderer')
  request.r(i2263[21], i2263[22], 0, i2262, 'skinnedMeshRenderer')
  i2262.useMeshMaterialIndex = !!i2263[23]
  i2262.meshMaterialIndex = i2263[24]
  i2262.useMeshColors = !!i2263[25]
  i2262.normalOffset = i2263[26]
  i2262.arc = i2263[27]
  i2262.arcMode = i2263[28]
  i2262.arcSpread = i2263[29]
  i2262.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[30], i2262.arcSpeed)
  i2262.donutRadius = i2263[31]
  i2262.position = new pc.Vec3( i2263[32], i2263[33], i2263[34] )
  i2262.rotation = new pc.Vec3( i2263[35], i2263[36], i2263[37] )
  i2262.scale = new pc.Vec3( i2263[38], i2263[39], i2263[40] )
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2264 = root || new pc.ParticleSystemSizeBySpeed()
  var i2265 = data
  i2264.enabled = !!i2265[0]
  i2264.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[1], i2264.x)
  i2264.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[2], i2264.y)
  i2264.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[3], i2264.z)
  i2264.separateAxes = !!i2265[4]
  i2264.range = new pc.Vec2( i2265[5], i2265[6] )
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2266 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2267 = data
  i2266.enabled = !!i2267[0]
  i2266.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[1], i2266.x)
  i2266.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[2], i2266.y)
  i2266.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[3], i2266.z)
  i2266.separateAxes = !!i2267[4]
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2268 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2269 = data
  i2268.enabled = !!i2269[0]
  i2268.mode = i2269[1]
  i2268.animation = i2269[2]
  i2268.numTilesX = i2269[3]
  i2268.numTilesY = i2269[4]
  i2268.useRandomRow = !!i2269[5]
  i2268.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[6], i2268.frameOverTime)
  i2268.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[7], i2268.startFrame)
  i2268.cycleCount = i2269[8]
  i2268.rowIndex = i2269[9]
  i2268.flipU = i2269[10]
  i2268.flipV = i2269[11]
  i2268.spriteCount = i2269[12]
  var i2271 = i2269[13]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 2) {
  request.r(i2271[i + 0], i2271[i + 1], 2, i2270, '')
  }
  i2268.sprites = i2270
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2274 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2275 = data
  i2274.enabled = !!i2275[0]
  i2274.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[1], i2274.x)
  i2274.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[2], i2274.y)
  i2274.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[3], i2274.z)
  i2274.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[4], i2274.radial)
  i2274.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[5], i2274.speedModifier)
  i2274.space = i2275[6]
  i2274.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[7], i2274.orbitalX)
  i2274.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[8], i2274.orbitalY)
  i2274.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[9], i2274.orbitalZ)
  i2274.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[10], i2274.orbitalOffsetX)
  i2274.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[11], i2274.orbitalOffsetY)
  i2274.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[12], i2274.orbitalOffsetZ)
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2276 = root || new pc.ParticleSystemNoise()
  var i2277 = data
  i2276.enabled = !!i2277[0]
  i2276.separateAxes = !!i2277[1]
  i2276.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2277[2], i2276.strengthX)
  i2276.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2277[3], i2276.strengthY)
  i2276.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2277[4], i2276.strengthZ)
  i2276.frequency = i2277[5]
  i2276.damping = !!i2277[6]
  i2276.octaveCount = i2277[7]
  i2276.octaveMultiplier = i2277[8]
  i2276.octaveScale = i2277[9]
  i2276.quality = i2277[10]
  i2276.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2277[11], i2276.scrollSpeed)
  i2276.scrollSpeedMultiplier = i2277[12]
  i2276.remapEnabled = !!i2277[13]
  i2276.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2277[14], i2276.remapX)
  i2276.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2277[15], i2276.remapY)
  i2276.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2277[16], i2276.remapZ)
  i2276.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2277[17], i2276.positionAmount)
  i2276.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2277[18], i2276.rotationAmount)
  i2276.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2277[19], i2276.sizeAmount)
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2278 = root || new pc.ParticleSystemInheritVelocity()
  var i2279 = data
  i2278.enabled = !!i2279[0]
  i2278.mode = i2279[1]
  i2278.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2279[2], i2278.curve)
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2280 = root || new pc.ParticleSystemForceOverLifetime()
  var i2281 = data
  i2280.enabled = !!i2281[0]
  i2280.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[1], i2280.x)
  i2280.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[2], i2280.y)
  i2280.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[3], i2280.z)
  i2280.space = i2281[4]
  i2280.randomized = !!i2281[5]
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2282 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2283 = data
  i2282.enabled = !!i2283[0]
  i2282.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[1], i2282.limit)
  i2282.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[2], i2282.limitX)
  i2282.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[3], i2282.limitY)
  i2282.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[4], i2282.limitZ)
  i2282.dampen = i2283[5]
  i2282.separateAxes = !!i2283[6]
  i2282.space = i2283[7]
  i2282.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[8], i2282.drag)
  i2282.multiplyDragByParticleSize = !!i2283[9]
  i2282.multiplyDragByParticleVelocity = !!i2283[10]
  return i2282
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i2284 = root || request.c( 'StarExploreFX' )
  var i2285 = data
  request.r(i2285[0], i2285[1], 0, i2284, 'tf')
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2287 = data
  i2286.pivot = new pc.Vec2( i2287[0], i2287[1] )
  i2286.anchorMin = new pc.Vec2( i2287[2], i2287[3] )
  i2286.anchorMax = new pc.Vec2( i2287[4], i2287[5] )
  i2286.sizeDelta = new pc.Vec2( i2287[6], i2287[7] )
  i2286.anchoredPosition3D = new pc.Vec3( i2287[8], i2287[9], i2287[10] )
  i2286.rotation = new pc.Quat(i2287[11], i2287[12], i2287[13], i2287[14])
  i2286.scale = new pc.Vec3( i2287[15], i2287[16], i2287[17] )
  return i2286
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i2288 = root || request.c( 'ClockTimer' )
  var i2289 = data
  request.r(i2289[0], i2289[1], 0, i2288, 'fillImage')
  request.r(i2289[2], i2289[3], 0, i2288, 'tf')
  i2288.spawnZoomDuration = i2289[4]
  i2288.despawnZoomDuration = i2289[5]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2291 = data
  i2290.cullTransparentMesh = !!i2291[0]
  return i2290
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2292 = root || request.c( 'UnityEngine.UI.Image' )
  var i2293 = data
  request.r(i2293[0], i2293[1], 0, i2292, 'm_Sprite')
  i2292.m_Type = i2293[2]
  i2292.m_PreserveAspect = !!i2293[3]
  i2292.m_FillCenter = !!i2293[4]
  i2292.m_FillMethod = i2293[5]
  i2292.m_FillAmount = i2293[6]
  i2292.m_FillClockwise = !!i2293[7]
  i2292.m_FillOrigin = i2293[8]
  i2292.m_UseSpriteMesh = !!i2293[9]
  i2292.m_PixelsPerUnitMultiplier = i2293[10]
  request.r(i2293[11], i2293[12], 0, i2292, 'm_Material')
  i2292.m_Maskable = !!i2293[13]
  i2292.m_Color = new pc.Color(i2293[14], i2293[15], i2293[16], i2293[17])
  i2292.m_RaycastTarget = !!i2293[18]
  i2292.m_RaycastPadding = new pc.Vec4( i2293[19], i2293[20], i2293[21], i2293[22] )
  return i2292
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i2294 = root || request.c( 'WaterSplash' )
  var i2295 = data
  request.r(i2295[0], i2295[1], 0, i2294, 'tf')
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2297 = data
  i2296.center = new pc.Vec3( i2297[0], i2297[1], i2297[2] )
  i2296.radius = i2297[3]
  i2296.enabled = !!i2297[4]
  i2296.isTrigger = !!i2297[5]
  request.r(i2297[6], i2297[7], 0, i2296, 'material')
  return i2296
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i2298 = root || request.c( 'ItemDraggable' )
  var i2299 = data
  i2298.isDraggable = !!i2299[0]
  request.r(i2299[1], i2299[2], 0, i2298, 'returnTransform')
  i2298.setParentToReturnTransform = !!i2299[3]
  i2298.returnToStartOnDragFailed = !!i2299[4]
  i2298.returnToExactReturnTransformPosition = !!i2299[5]
  i2298.targetItemType = i2299[6]
  request.r(i2299[7], i2299[8], 0, i2298, 'item')
  i2298.checkState = !!i2299[9]
  request.r(i2299[10], i2299[11], 0, i2298, 'shadowObject')
  i2298.playReturnToStartFinishSound = !!i2299[12]
  i2298.returnToStartFinishFxType = i2299[13]
  i2298.spawnBreakHeartOnDropFail = !!i2299[14]
  i2298.playBeginDragSound = !!i2299[15]
  i2298.beginDragFxType = i2299[16]
  i2298.liftOffset = i2299[17]
  i2298.dragScaleMultiplier = i2299[18]
  i2298.dragScaleDuration = i2299[19]
  i2298.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i2299[20], i2298.onBeginDrag)
  i2298.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i2299[21], i2298.onDropSuccess)
  i2298.onDropFail = request.d('UnityEngine.Events.UnityEvent', i2299[22], i2298.onDropFail)
  i2298.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i2299[23], i2298.onReturnToStartComplete)
  return i2298
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2300 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2301 = data
  i2300.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2301[0], i2300.m_PersistentCalls)
  return i2300
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2302 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2303 = data
  var i2305 = i2303[0]
  var i2304 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.add(request.d('UnityEngine.Events.PersistentCall', i2305[i + 0]));
  }
  i2302.m_Calls = i2304
  return i2302
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2308 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2309 = data
  request.r(i2309[0], i2309[1], 0, i2308, 'm_Target')
  i2308.m_TargetAssemblyTypeName = i2309[2]
  i2308.m_MethodName = i2309[3]
  i2308.m_Mode = i2309[4]
  i2308.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2309[5], i2308.m_Arguments)
  i2308.m_CallState = i2309[6]
  return i2308
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2310 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2311 = data
  request.r(i2311[0], i2311[1], 0, i2310, 'm_ObjectArgument')
  i2310.m_ObjectArgumentAssemblyTypeName = i2311[2]
  i2310.m_IntArgument = i2311[3]
  i2310.m_FloatArgument = i2311[4]
  i2310.m_StringArgument = i2311[5]
  i2310.m_BoolArgument = !!i2311[6]
  return i2310
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i2312 = root || request.c( 'ItemMoveToTarget' )
  var i2313 = data
  request.r(i2313[0], i2313[1], 0, i2312, 'defaultTarget')
  i2312.duration = i2313[2]
  i2312.useAnimationCurve = !!i2313[3]
  i2312.moveCurve = new pc.AnimationCurve( { keys_flow: i2313[4] } )
  i2312.easeType = i2313[5]
  i2312.moveType = i2313[6]
  i2312.jumpPower = i2313[7]
  i2312.numJumps = i2313[8]
  i2312.rotate360DuringJump = !!i2313[9]
  i2312.flipRotate = !!i2313[10]
  i2312.angleRotate = i2313[11]
  i2312.scaleOnMove = !!i2313[12]
  i2312.endScaleMultiplier = i2313[13]
  i2312.setParentToTarget = !!i2313[14]
  i2312.onComplete = request.d('UnityEngine.Events.UnityEvent', i2313[15], i2312.onComplete)
  i2312.lockInputWhileMoving = !!i2313[16]
  i2312.resetParentBeforeMove = !!i2313[17]
  return i2312
}

Deserializers["Paper"] = function (request, data, root) {
  var i2314 = root || request.c( 'Paper' )
  var i2315 = data
  i2314.isUse = !!i2315[0]
  request.r(i2315[1], i2315[2], 0, i2314, 'paper')
  request.r(i2315[3], i2315[4], 0, i2314, 'paperTrash')
  request.r(i2315[5], i2315[6], 0, i2314, 'itemDragRaycastTarget')
  request.r(i2315[7], i2315[8], 0, i2314, 'curentCollider')
  i2314.isDone = !!i2315[9]
  i2314.onProcess = !!i2315[10]
  i2314.requireMatchingTargetTypeForHandTut = !!i2315[11]
  request.r(i2315[12], i2315[13], 0, i2314, 'itemDraggable')
  request.r(i2315[14], i2315[15], 0, i2314, 'itemClickable')
  request.r(i2315[16], i2315[17], 0, i2314, 'itemStirring')
  request.r(i2315[18], i2315[19], 0, i2314, 'itemKnifeSpriteMaskCutter')
  request.r(i2315[20], i2315[21], 0, i2314, 'itemSpriteMaskPainter')
  request.r(i2315[22], i2315[23], 0, i2314, 'itemDragSpriteMaskPainter')
  request.r(i2315[24], i2315[25], 0, i2314, 'itemMoveToTarget')
  request.r(i2315[26], i2315[27], 0, i2314, 'animator')
  i2314.itemType = i2315[28]
  request.r(i2315[29], i2315[30], 0, i2314, 'spriteRenderer')
  i2314.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2315[31], i2314.onKnifeIn)
  request.r(i2315[32], i2315[33], 0, i2314, 'knifePos')
  i2314.heartEffectScale = i2315[34]
  i2314.breakHeartEffectScale = i2315[35]
  i2314.blinkEffectScale = i2315[36]
  i2314.mergeEffectScale = i2315[37]
  i2314.playMoveToTargetFinishSound = !!i2315[38]
  i2314.moveToTargetFinishFxType = i2315[39]
  i2314.fxSpawnZPos = i2315[40]
  request.r(i2315[41], i2315[42], 0, i2314, 'tf')
  return i2314
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i2316 = root || request.c( 'ItemDragRaycastTarget' )
  var i2317 = data
  i2316.targetToFind = i2317[0]
  i2316.targetItemTypeWhenHit = i2317[1]
  i2316.targetItemTypeOnDropFail = i2317[2]
  request.r(i2317[3], i2317[4], 0, i2316, 'raycastPoint')
  i2316.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2317[5] )
  i2316.rayDistance = i2317[6]
  i2316.updateMoveDefaultTarget = !!i2317[7]
  i2316.invokeOnlyWhenTargetChanged = !!i2317[8]
  i2316.targetChangeEnabled = !!i2317[9]
  i2316.restoreTargetOnDropFail = !!i2317[10]
  i2316.resetCurrentTargetOnNoHit = !!i2317[11]
  i2316.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i2317[12], i2316.onTargetFound)
  i2316.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i2317[13], i2316.onTargetFoundWithItem)
  return i2316
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i2318 = root || request.c( 'ItemRaycastTargetEvent' )
  var i2319 = data
  i2318.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2319[0], i2318.m_PersistentCalls)
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2321 = data
  request.r(i2321[0], i2321[1], 0, i2320, 'animatorController')
  request.r(i2321[2], i2321[3], 0, i2320, 'avatar')
  i2320.updateMode = i2321[4]
  i2320.hasTransformHierarchy = !!i2321[5]
  i2320.applyRootMotion = !!i2321[6]
  var i2323 = i2321[7]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 2) {
  request.r(i2323[i + 0], i2323[i + 1], 2, i2322, '')
  }
  i2320.humanBones = i2322
  i2320.enabled = !!i2321[8]
  return i2320
}

Deserializers["ItemSound"] = function (request, data, root) {
  var i2326 = root || request.c( 'ItemSound' )
  var i2327 = data
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2329 = data
  i2328.name = i2329[0]
  i2328.index = i2329[1]
  i2328.startup = !!i2329[2]
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2331 = data
  i2330.planeDistance = i2331[0]
  i2330.referencePixelsPerUnit = i2331[1]
  i2330.isFallbackOverlay = !!i2331[2]
  i2330.renderMode = i2331[3]
  i2330.renderOrder = i2331[4]
  i2330.sortingLayerName = i2331[5]
  i2330.sortingOrder = i2331[6]
  i2330.scaleFactor = i2331[7]
  request.r(i2331[8], i2331[9], 0, i2330, 'worldCamera')
  i2330.overrideSorting = !!i2331[10]
  i2330.pixelPerfect = !!i2331[11]
  i2330.targetDisplay = i2331[12]
  i2330.overridePixelPerfect = !!i2331[13]
  i2330.enabled = !!i2331[14]
  return i2330
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2333 = data
  i2332.m_UiScaleMode = i2333[0]
  i2332.m_ReferencePixelsPerUnit = i2333[1]
  i2332.m_ScaleFactor = i2333[2]
  i2332.m_ReferenceResolution = new pc.Vec2( i2333[3], i2333[4] )
  i2332.m_ScreenMatchMode = i2333[5]
  i2332.m_MatchWidthOrHeight = i2333[6]
  i2332.m_PhysicalUnit = i2333[7]
  i2332.m_FallbackScreenDPI = i2333[8]
  i2332.m_DefaultSpriteDPI = i2333[9]
  i2332.m_DynamicPixelsPerUnit = i2333[10]
  i2332.m_PresetInfoIsWorld = !!i2333[11]
  return i2332
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2334 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2335 = data
  i2334.m_IgnoreReversedGraphics = !!i2335[0]
  i2334.m_BlockingObjects = i2335[1]
  i2334.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2335[2] )
  return i2334
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2336 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2337 = data
  i2336.m_hasFontAssetChanged = !!i2337[0]
  request.r(i2337[1], i2337[2], 0, i2336, 'm_baseMaterial')
  i2336.m_maskOffset = new pc.Vec4( i2337[3], i2337[4], i2337[5], i2337[6] )
  i2336.m_text = i2337[7]
  i2336.m_isRightToLeft = !!i2337[8]
  request.r(i2337[9], i2337[10], 0, i2336, 'm_fontAsset')
  request.r(i2337[11], i2337[12], 0, i2336, 'm_sharedMaterial')
  var i2339 = i2337[13]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 2) {
  request.r(i2339[i + 0], i2339[i + 1], 2, i2338, '')
  }
  i2336.m_fontSharedMaterials = i2338
  request.r(i2337[14], i2337[15], 0, i2336, 'm_fontMaterial')
  var i2341 = i2337[16]
  var i2340 = []
  for(var i = 0; i < i2341.length; i += 2) {
  request.r(i2341[i + 0], i2341[i + 1], 2, i2340, '')
  }
  i2336.m_fontMaterials = i2340
  i2336.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2337[17], i2337[18], i2337[19], i2337[20])
  i2336.m_fontColor = new pc.Color(i2337[21], i2337[22], i2337[23], i2337[24])
  i2336.m_enableVertexGradient = !!i2337[25]
  i2336.m_colorMode = i2337[26]
  i2336.m_fontColorGradient = request.d('TMPro.VertexGradient', i2337[27], i2336.m_fontColorGradient)
  request.r(i2337[28], i2337[29], 0, i2336, 'm_fontColorGradientPreset')
  request.r(i2337[30], i2337[31], 0, i2336, 'm_spriteAsset')
  i2336.m_tintAllSprites = !!i2337[32]
  request.r(i2337[33], i2337[34], 0, i2336, 'm_StyleSheet')
  i2336.m_TextStyleHashCode = i2337[35]
  i2336.m_overrideHtmlColors = !!i2337[36]
  i2336.m_faceColor = UnityEngine.Color32.ConstructColor(i2337[37], i2337[38], i2337[39], i2337[40])
  i2336.m_fontSize = i2337[41]
  i2336.m_fontSizeBase = i2337[42]
  i2336.m_fontWeight = i2337[43]
  i2336.m_enableAutoSizing = !!i2337[44]
  i2336.m_fontSizeMin = i2337[45]
  i2336.m_fontSizeMax = i2337[46]
  i2336.m_fontStyle = i2337[47]
  i2336.m_HorizontalAlignment = i2337[48]
  i2336.m_VerticalAlignment = i2337[49]
  i2336.m_textAlignment = i2337[50]
  i2336.m_characterSpacing = i2337[51]
  i2336.m_wordSpacing = i2337[52]
  i2336.m_lineSpacing = i2337[53]
  i2336.m_lineSpacingMax = i2337[54]
  i2336.m_paragraphSpacing = i2337[55]
  i2336.m_charWidthMaxAdj = i2337[56]
  i2336.m_TextWrappingMode = i2337[57]
  i2336.m_wordWrappingRatios = i2337[58]
  i2336.m_overflowMode = i2337[59]
  request.r(i2337[60], i2337[61], 0, i2336, 'm_linkedTextComponent')
  request.r(i2337[62], i2337[63], 0, i2336, 'parentLinkedComponent')
  i2336.m_enableKerning = !!i2337[64]
  var i2343 = i2337[65]
  var i2342 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.add(i2343[i + 0]);
  }
  i2336.m_ActiveFontFeatures = i2342
  i2336.m_enableExtraPadding = !!i2337[66]
  i2336.checkPaddingRequired = !!i2337[67]
  i2336.m_isRichText = !!i2337[68]
  i2336.m_parseCtrlCharacters = !!i2337[69]
  i2336.m_isOrthographic = !!i2337[70]
  i2336.m_isCullingEnabled = !!i2337[71]
  i2336.m_horizontalMapping = i2337[72]
  i2336.m_verticalMapping = i2337[73]
  i2336.m_uvLineOffset = i2337[74]
  i2336.m_geometrySortingOrder = i2337[75]
  i2336.m_IsTextObjectScaleStatic = !!i2337[76]
  i2336.m_VertexBufferAutoSizeReduction = !!i2337[77]
  i2336.m_useMaxVisibleDescender = !!i2337[78]
  i2336.m_pageToDisplay = i2337[79]
  i2336.m_margin = new pc.Vec4( i2337[80], i2337[81], i2337[82], i2337[83] )
  i2336.m_isUsingLegacyAnimationComponent = !!i2337[84]
  i2336.m_isVolumetricText = !!i2337[85]
  request.r(i2337[86], i2337[87], 0, i2336, 'm_Material')
  i2336.m_EmojiFallbackSupport = !!i2337[88]
  i2336.m_Maskable = !!i2337[89]
  i2336.m_Color = new pc.Color(i2337[90], i2337[91], i2337[92], i2337[93])
  i2336.m_RaycastTarget = !!i2337[94]
  i2336.m_RaycastPadding = new pc.Vec4( i2337[95], i2337[96], i2337[97], i2337[98] )
  return i2336
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2344 = root || request.c( 'TMPro.VertexGradient' )
  var i2345 = data
  i2344.topLeft = new pc.Color(i2345[0], i2345[1], i2345[2], i2345[3])
  i2344.topRight = new pc.Color(i2345[4], i2345[5], i2345[6], i2345[7])
  i2344.bottomLeft = new pc.Color(i2345[8], i2345[9], i2345[10], i2345[11])
  i2344.bottomRight = new pc.Color(i2345[12], i2345[13], i2345[14], i2345[15])
  return i2344
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2348 = root || request.c( 'UnityEngine.UI.Button' )
  var i2349 = data
  i2348.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2349[0], i2348.m_OnClick)
  i2348.m_Navigation = request.d('UnityEngine.UI.Navigation', i2349[1], i2348.m_Navigation)
  i2348.m_Transition = i2349[2]
  i2348.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2349[3], i2348.m_Colors)
  i2348.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2349[4], i2348.m_SpriteState)
  i2348.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2349[5], i2348.m_AnimationTriggers)
  i2348.m_Interactable = !!i2349[6]
  request.r(i2349[7], i2349[8], 0, i2348, 'm_TargetGraphic')
  return i2348
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2350 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2351 = data
  i2350.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2351[0], i2350.m_PersistentCalls)
  return i2350
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2352 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2353 = data
  i2352.m_Mode = i2353[0]
  i2352.m_WrapAround = !!i2353[1]
  request.r(i2353[2], i2353[3], 0, i2352, 'm_SelectOnUp')
  request.r(i2353[4], i2353[5], 0, i2352, 'm_SelectOnDown')
  request.r(i2353[6], i2353[7], 0, i2352, 'm_SelectOnLeft')
  request.r(i2353[8], i2353[9], 0, i2352, 'm_SelectOnRight')
  return i2352
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2354 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2355 = data
  i2354.m_NormalColor = new pc.Color(i2355[0], i2355[1], i2355[2], i2355[3])
  i2354.m_HighlightedColor = new pc.Color(i2355[4], i2355[5], i2355[6], i2355[7])
  i2354.m_PressedColor = new pc.Color(i2355[8], i2355[9], i2355[10], i2355[11])
  i2354.m_SelectedColor = new pc.Color(i2355[12], i2355[13], i2355[14], i2355[15])
  i2354.m_DisabledColor = new pc.Color(i2355[16], i2355[17], i2355[18], i2355[19])
  i2354.m_ColorMultiplier = i2355[20]
  i2354.m_FadeDuration = i2355[21]
  return i2354
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2356 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'm_HighlightedSprite')
  request.r(i2357[2], i2357[3], 0, i2356, 'm_PressedSprite')
  request.r(i2357[4], i2357[5], 0, i2356, 'm_SelectedSprite')
  request.r(i2357[6], i2357[7], 0, i2356, 'm_DisabledSprite')
  return i2356
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2358 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2359 = data
  i2358.m_NormalTrigger = i2359[0]
  i2358.m_HighlightedTrigger = i2359[1]
  i2358.m_PressedTrigger = i2359[2]
  i2358.m_SelectedTrigger = i2359[3]
  i2358.m_DisabledTrigger = i2359[4]
  return i2358
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i2360 = root || request.c( 'Ply_Pool' )
  var i2361 = data
  var i2363 = i2361[0]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('Ply_Pool+PoolAmount', i2363[i + 0]) );
  }
  i2360.poolAmounts = i2362
  request.r(i2361[1], i2361[2], 0, i2360, 'poolHolder')
  return i2360
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i2366 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i2367 = data
  i2366.type = i2367[0]
  i2366.amount = i2367[1]
  request.r(i2367[2], i2367[3], 0, i2366, 'gameUnit')
  return i2366
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2368 = root || request.c( 'Ply_SoundManager' )
  var i2369 = data
  var i2371 = i2369[0]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( request.d('Ply_SoundManager+FxAudio', i2371[i + 0]) );
  }
  i2368.fxAudios = i2370
  var i2373 = i2369[1]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 2) {
  request.r(i2373[i + 0], i2373[i + 1], 2, i2372, '')
  }
  i2368.audioClips = i2372
  request.r(i2369[2], i2369[3], 0, i2368, 'sound')
  return i2368
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i2376 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i2377 = data
  i2376.fxType = i2377[0]
  request.r(i2377[1], i2377[2], 0, i2376, 'audioClip')
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2381 = data
  request.r(i2381[0], i2381[1], 0, i2380, 'clip')
  request.r(i2381[2], i2381[3], 0, i2380, 'outputAudioMixerGroup')
  i2380.playOnAwake = !!i2381[4]
  i2380.loop = !!i2381[5]
  i2380.time = i2381[6]
  i2380.volume = i2381[7]
  i2380.pitch = i2381[8]
  i2380.enabled = !!i2381[9]
  return i2380
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2382 = root || request.c( 'GameManager' )
  var i2383 = data
  i2382.isPlaying = !!i2383[0]
  i2382.isTutorial = !!i2383[1]
  i2382.isGotoStore = !!i2383[2]
  i2382.isLoseGame = !!i2383[3]
  i2382.countMove = i2383[4]
  i2382.currentLayer = i2383[5]
  request.r(i2383[6], i2383[7], 0, i2382, 'trashCan')
  request.r(i2383[8], i2383[9], 0, i2382, 'step1')
  request.r(i2383[10], i2383[11], 0, i2382, 'paperBox')
  return i2382
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2384 = root || request.c( 'UIManager' )
  var i2385 = data
  request.r(i2385[0], i2385[1], 0, i2384, 'winUI')
  request.r(i2385[2], i2385[3], 0, i2384, 'loseUI')
  request.r(i2385[4], i2385[5], 0, i2384, 'tutorial')
  request.r(i2385[6], i2385[7], 0, i2384, 'verticalUI')
  request.r(i2385[8], i2385[9], 0, i2384, 'horizontalUI')
  request.r(i2385[10], i2385[11], 0, i2384, 'downloadBtn')
  request.r(i2385[12], i2385[13], 0, i2384, 'horizontalDownloadBtn')
  request.r(i2385[14], i2385[15], 0, i2384, 'textAnim')
  i2384.isGoogleBuild = !!i2385[16]
  i2384.screenWidth = i2385[17]
  i2384.screenHeight = i2385[18]
  i2384.scaleHeightOnWidth = i2385[19]
  i2384.isVertical = !!i2385[20]
  i2384.isScreenVertical = !!i2385[21]
  request.r(i2385[22], i2385[23], 0, i2384, 'cam')
  i2384.verticalUIHeightOnWidthRatio = i2385[24]
  i2384.scaleCameraOnValidate = !!i2385[25]
  i2384.screenVerticalHeightOnWidthRatio = i2385[26]
  i2384.useContinuousScaling = !!i2385[27]
  i2384.baseOrthographicSize = i2385[28]
  i2384.baseAspect = i2385[29]
  i2384.landscapeSizeRatio = i2385[30]
  i2384.defaultPortraitSizeRatio = i2385[31]
  var i2387 = i2385[32]
  var i2386 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i2387.length; i += 1) {
    i2386.add(request.d('ScreenScaleStep', i2387[i + 0]));
  }
  i2384.discreteScaleSteps = i2386
  i2384.usePerspectiveCamera = !!i2385[33]
  request.r(i2385[34], i2385[35], 0, i2384, 'perspectiveFocus')
  i2384.perspectiveFocusDistance = i2385[36]
  i2384.perspectivePadding = i2385[37]
  i2384.fitRendererBounds = !!i2385[38]
  request.r(i2385[39], i2385[40], 0, i2384, 'boundsRoot')
  var i2389 = i2385[41]
  var i2388 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i2389.length; i += 2) {
  request.r(i2389[i + 0], i2389[i + 1], 1, i2388, '')
  }
  i2384.boundsRenderers = i2388
  return i2384
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i2392 = root || request.c( 'ScreenScaleStep' )
  var i2393 = data
  i2392.heightOnWidthRatio = i2393[0]
  i2392.orthographicSize = i2393[1]
  return i2392
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2396 = root || request.c( 'InputManager' )
  var i2397 = data
  i2396.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2397[0] )
  i2396.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i2397[1] )
  i2396.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2397[2] )
  i2396.isDragging = !!i2397[3]
  return i2396
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i2398 = root || request.c( 'HandTutManager' )
  var i2399 = data
  var i2401 = i2399[0]
  var i2400 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2401.length; i += 2) {
  request.r(i2401[i + 0], i2401[i + 1], 1, i2400, '')
  }
  i2398.items = i2400
  request.r(i2399[1], i2399[2], 0, i2398, 'knife')
  request.r(i2399[3], i2399[4], 0, i2398, 'knife2')
  request.r(i2399[5], i2399[6], 0, i2398, 'handTutObject')
  request.r(i2399[7], i2399[8], 0, i2398, 'tapToCookObject')
  request.r(i2399[9], i2399[10], 0, i2398, 'oilItem')
  request.r(i2399[11], i2399[12], 0, i2398, 'stoveToggleEvent')
  request.r(i2399[13], i2399[14], 0, i2398, 'waterToggleEvent')
  request.r(i2399[15], i2399[16], 0, i2398, 'sinkBlock')
  var i2403 = i2399[17]
  var i2402 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i2403.length; i += 2) {
  request.r(i2403[i + 0], i2403[i + 1], 1, i2402, '')
  }
  i2398.itemsInWater = i2402
  i2398.noDelayItemCount = i2399[18]
  i2398.breakHeartNoDelayThreshold = i2399[19]
  i2398.shortIdleDelay = i2399[20]
  i2398.maxHandTutShowCount = i2399[21]
  i2398.showSinkWaterTutorialOnStart = !!i2399[22]
  i2398.waitForBowlIntro = !!i2399[23]
  i2398.idleDelay = i2399[24]
  i2398.firstHandTutDelay = i2399[25]
  i2398.phaseHandTutDelay = i2399[26]
  i2398.moveDuration = i2399[27]
  i2398.dragFadeDuration = i2399[28]
  i2398.clickScaleDuration = i2399[29]
  i2398.waitAtEndDuration = i2399[30]
  i2398.handZPosition = i2399[31]
  i2398.clickScaleMultiplier = i2399[32]
  i2398.moveEase = i2399[33]
  return i2398
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i2408 = root || request.c( 'SortChildByZPos' )
  var i2409 = data
  request.r(i2409[0], i2409[1], 0, i2408, 'transformToSort')
  var i2411 = i2409[2]
  var i2410 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2411.length; i += 2) {
  request.r(i2411[i + 0], i2411[i + 1], 1, i2410, '')
  }
  i2408.childrenToSort = i2410
  i2408.zOffset = i2409[3]
  i2408.baseZ = i2409[4]
  return i2408
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i2414 = root || request.c( 'PhaseManager' )
  var i2415 = data
  var i2417 = i2415[0]
  var i2416 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.add(request.d('PhaseData', i2417[i + 0]));
  }
  i2414.phases = i2416
  i2414.transitionType = i2415[1]
  i2414.transitionDuration = i2415[2]
  i2414.delayBeforeNextPhase = i2415[3]
  i2414.offScreenLeftX = i2415[4]
  i2414.offScreenRightX = i2415[5]
  i2414.offScreenBottomY = i2415[6]
  i2414.offScreenTopY = i2415[7]
  i2414.centerScreenX = i2415[8]
  request.r(i2415[9], i2415[10], 0, i2414, 'phaseTransitionObject')
  i2414.phaseTransitionObjectDuration = i2415[11]
  i2414.currentPhaseIndex = i2415[12]
  i2414.currentStepCount = i2415[13]
  i2414.isECPopup = !!i2415[14]
  return i2414
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i2420 = root || request.c( 'PhaseData' )
  var i2421 = data
  request.r(i2421[0], i2421[1], 0, i2420, 'phaseObject')
  i2420.totalSteps = i2421[2]
  i2420.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i2421[3], i2420.onPhaseReady)
  return i2420
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i2422 = root || request.c( 'ItemTypeDoneManager' )
  var i2423 = data
  var i2425 = i2423[0]
  var i2424 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i2425[i + 0]));
  }
  i2422.itemTypeGroups = i2424
  return i2422
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i2428 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i2429 = data
  i2428.itemType = i2429[0]
  var i2431 = i2429[1]
  var i2430 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2431.length; i += 2) {
  request.r(i2431[i + 0], i2431[i + 1], 1, i2430, '')
  }
  i2428.items = i2430
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2433 = data
  i2432.aspect = i2433[0]
  i2432.orthographic = !!i2433[1]
  i2432.orthographicSize = i2433[2]
  i2432.backgroundColor = new pc.Color(i2433[3], i2433[4], i2433[5], i2433[6])
  i2432.nearClipPlane = i2433[7]
  i2432.farClipPlane = i2433[8]
  i2432.fieldOfView = i2433[9]
  i2432.depth = i2433[10]
  i2432.clearFlags = i2433[11]
  i2432.cullingMask = i2433[12]
  i2432.rect = i2433[13]
  request.r(i2433[14], i2433[15], 0, i2432, 'targetTexture')
  i2432.usePhysicalProperties = !!i2433[16]
  i2432.focalLength = i2433[17]
  i2432.sensorSize = new pc.Vec2( i2433[18], i2433[19] )
  i2432.lensShift = new pc.Vec2( i2433[20], i2433[21] )
  i2432.gateFit = i2433[22]
  i2432.commandBufferCount = i2433[23]
  i2432.cameraType = i2433[24]
  i2432.enabled = !!i2433[25]
  return i2432
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2434 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'm_FirstSelected')
  i2434.m_sendNavigationEvents = !!i2435[2]
  i2434.m_DragThreshold = i2435[3]
  return i2434
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2436 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2437 = data
  i2436.m_HorizontalAxis = i2437[0]
  i2436.m_VerticalAxis = i2437[1]
  i2436.m_SubmitButton = i2437[2]
  i2436.m_CancelButton = i2437[3]
  i2436.m_InputActionsPerSecond = i2437[4]
  i2436.m_RepeatDelay = i2437[5]
  i2436.m_ForceModuleActive = !!i2437[6]
  i2436.m_SendPointerHoverToParent = !!i2437[7]
  return i2436
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i2438 = root || request.c( 'Ply_ToggleEvent' )
  var i2439 = data
  i2438.isOn = !!i2439[0]
  i2438.applyStateOnEnable = !!i2439[1]
  i2438.applyStateOnClick = !!i2439[2]
  request.r(i2439[3], i2439[4], 0, i2438, 'targetObject')
  i2438.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i2439[5], i2438.onTurnOn)
  i2438.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i2439[6], i2438.onTurnOff)
  return i2438
}

Deserializers["SinkBlock"] = function (request, data, root) {
  var i2440 = root || request.c( 'SinkBlock' )
  var i2441 = data
  request.r(i2441[0], i2441[1], 0, i2440, 'sink')
  i2440.startsInside = !!i2441[2]
  i2440.insideTargetType = i2441[3]
  request.r(i2441[4], i2441[5], 0, i2440, 'insideDefaultTarget')
  i2440.outsideTargetType = i2441[6]
  request.r(i2441[7], i2441[8], 0, i2440, 'outsideDefaultTarget')
  i2440.isDone = !!i2441[9]
  i2440.onProcess = !!i2441[10]
  i2440.requireMatchingTargetTypeForHandTut = !!i2441[11]
  request.r(i2441[12], i2441[13], 0, i2440, 'itemDraggable')
  request.r(i2441[14], i2441[15], 0, i2440, 'itemClickable')
  request.r(i2441[16], i2441[17], 0, i2440, 'itemStirring')
  request.r(i2441[18], i2441[19], 0, i2440, 'itemKnifeSpriteMaskCutter')
  request.r(i2441[20], i2441[21], 0, i2440, 'itemSpriteMaskPainter')
  request.r(i2441[22], i2441[23], 0, i2440, 'itemDragSpriteMaskPainter')
  request.r(i2441[24], i2441[25], 0, i2440, 'itemMoveToTarget')
  request.r(i2441[26], i2441[27], 0, i2440, 'animator')
  i2440.itemType = i2441[28]
  request.r(i2441[29], i2441[30], 0, i2440, 'spriteRenderer')
  i2440.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2441[31], i2440.onKnifeIn)
  request.r(i2441[32], i2441[33], 0, i2440, 'knifePos')
  i2440.heartEffectScale = i2441[34]
  i2440.breakHeartEffectScale = i2441[35]
  i2440.blinkEffectScale = i2441[36]
  i2440.mergeEffectScale = i2441[37]
  i2440.playMoveToTargetFinishSound = !!i2441[38]
  i2440.moveToTargetFinishFxType = i2441[39]
  i2440.fxSpawnZPos = i2441[40]
  request.r(i2441[41], i2441[42], 0, i2440, 'tf')
  return i2440
}

Deserializers["Sink"] = function (request, data, root) {
  var i2442 = root || request.c( 'Sink' )
  var i2443 = data
  i2442.isClose = !!i2443[0]
  i2442.isWaterDrop = !!i2443[1]
  i2442.isWaterIn = !!i2443[2]
  request.r(i2443[3], i2443[4], 0, i2442, 'waterSplashPos')
  request.r(i2443[5], i2443[6], 0, i2442, 'faucetAnimator')
  request.r(i2443[7], i2443[8], 0, i2442, 'basinAnimator')
  request.r(i2443[9], i2443[10], 0, i2442, 'waterDrop')
  request.r(i2443[11], i2443[12], 0, i2442, 'waterIn')
  request.r(i2443[13], i2443[14], 0, i2442, 'basinWaterRenderer')
  i2442.emptyWaterRect = UnityEngine.Rect.MinMaxRect(i2443[15], i2443[16], i2443[17], i2443[18])
  i2442.fullWaterRect = UnityEngine.Rect.MinMaxRect(i2443[19], i2443[20], i2443[21], i2443[22])
  i2442.waterRiseDuration = i2443[23]
  i2442.waterFallDuration = i2443[24]
  i2442.waterRiseEase = i2443[25]
  i2442.waterFallEase = i2443[26]
  i2442.drawWaterRects = !!i2443[27]
  i2442.emptyRectColor = new pc.Color(i2443[28], i2443[29], i2443[30], i2443[31])
  i2442.fullRectColor = new pc.Color(i2443[32], i2443[33], i2443[34], i2443[35])
  request.r(i2443[36], i2443[37], 0, i2442, 'waterDropTransform')
  i2442.emptyWaterDropPoint = new pc.Vec3( i2443[38], i2443[39], i2443[40] )
  i2442.fullWaterDropPoint = new pc.Vec3( i2443[41], i2443[42], i2443[43] )
  i2442.drawWaterDropPoints = !!i2443[44]
  i2442.waterDropPointRadius = i2443[45]
  i2442.emptyWaterDropPointColor = new pc.Color(i2443[46], i2443[47], i2443[48], i2443[49])
  i2442.fullWaterDropPointColor = new pc.Color(i2443[50], i2443[51], i2443[52], i2443[53])
  var i2445 = i2443[54]
  var i2444 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i2445.length; i += 2) {
  request.r(i2445[i + 0], i2445[i + 1], 1, i2444, '')
  }
  i2442.inWaterItems = i2444
  i2442.onWaterIn = request.d('UnityEngine.Events.UnityEvent', i2443[55], i2442.onWaterIn)
  i2442.onNoWaterIn = request.d('UnityEngine.Events.UnityEvent', i2443[56], i2442.onNoWaterIn)
  i2442.isDone = !!i2443[57]
  i2442.onProcess = !!i2443[58]
  i2442.requireMatchingTargetTypeForHandTut = !!i2443[59]
  request.r(i2443[60], i2443[61], 0, i2442, 'itemDraggable')
  request.r(i2443[62], i2443[63], 0, i2442, 'itemClickable')
  request.r(i2443[64], i2443[65], 0, i2442, 'itemStirring')
  request.r(i2443[66], i2443[67], 0, i2442, 'itemKnifeSpriteMaskCutter')
  request.r(i2443[68], i2443[69], 0, i2442, 'itemSpriteMaskPainter')
  request.r(i2443[70], i2443[71], 0, i2442, 'itemDragSpriteMaskPainter')
  request.r(i2443[72], i2443[73], 0, i2442, 'itemMoveToTarget')
  request.r(i2443[74], i2443[75], 0, i2442, 'animator')
  i2442.itemType = i2443[76]
  request.r(i2443[77], i2443[78], 0, i2442, 'spriteRenderer')
  i2442.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2443[79], i2442.onKnifeIn)
  request.r(i2443[80], i2443[81], 0, i2442, 'knifePos')
  i2442.heartEffectScale = i2443[82]
  i2442.breakHeartEffectScale = i2443[83]
  i2442.blinkEffectScale = i2443[84]
  i2442.mergeEffectScale = i2443[85]
  i2442.playMoveToTargetFinishSound = !!i2443[86]
  i2442.moveToTargetFinishFxType = i2443[87]
  i2442.fxSpawnZPos = i2443[88]
  request.r(i2443[89], i2443[90], 0, i2442, 'tf')
  i2442.waterState = i2443[91]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2447 = data
  i2446.center = new pc.Vec3( i2447[0], i2447[1], i2447[2] )
  i2446.size = new pc.Vec3( i2447[3], i2447[4], i2447[5] )
  i2446.enabled = !!i2447[6]
  i2446.isTrigger = !!i2447[7]
  request.r(i2447[8], i2447[9], 0, i2446, 'material')
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2449 = data
  i2448.frontSortingLayerID = i2449[0]
  i2448.frontSortingOrder = i2449[1]
  i2448.backSortingLayerID = i2449[2]
  i2448.backSortingOrder = i2449[3]
  i2448.alphaCutoff = i2449[4]
  request.r(i2449[5], i2449[6], 0, i2448, 'sprite')
  i2448.tileMode = i2449[7]
  i2448.isCustomRangeActive = !!i2449[8]
  i2448.spriteSortPoint = i2449[9]
  i2448.enabled = !!i2449[10]
  request.r(i2449[11], i2449[12], 0, i2448, 'sharedMaterial')
  var i2451 = i2449[13]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 2) {
  request.r(i2451[i + 0], i2451[i + 1], 2, i2450, '')
  }
  i2448.sharedMaterials = i2450
  i2448.receiveShadows = !!i2449[14]
  i2448.shadowCastingMode = i2449[15]
  i2448.sortingLayerID = i2449[16]
  i2448.sortingOrder = i2449[17]
  i2448.lightmapIndex = i2449[18]
  i2448.lightmapSceneIndex = i2449[19]
  i2448.lightmapScaleOffset = new pc.Vec4( i2449[20], i2449[21], i2449[22], i2449[23] )
  i2448.lightProbeUsage = i2449[24]
  i2448.reflectionProbeUsage = i2449[25]
  return i2448
}

Deserializers["Item"] = function (request, data, root) {
  var i2452 = root || request.c( 'Item' )
  var i2453 = data
  i2452.isDone = !!i2453[0]
  i2452.onProcess = !!i2453[1]
  i2452.requireMatchingTargetTypeForHandTut = !!i2453[2]
  request.r(i2453[3], i2453[4], 0, i2452, 'itemDraggable')
  request.r(i2453[5], i2453[6], 0, i2452, 'itemClickable')
  request.r(i2453[7], i2453[8], 0, i2452, 'itemStirring')
  request.r(i2453[9], i2453[10], 0, i2452, 'itemKnifeSpriteMaskCutter')
  request.r(i2453[11], i2453[12], 0, i2452, 'itemSpriteMaskPainter')
  request.r(i2453[13], i2453[14], 0, i2452, 'itemDragSpriteMaskPainter')
  request.r(i2453[15], i2453[16], 0, i2452, 'itemMoveToTarget')
  request.r(i2453[17], i2453[18], 0, i2452, 'animator')
  i2452.itemType = i2453[19]
  request.r(i2453[20], i2453[21], 0, i2452, 'spriteRenderer')
  i2452.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2453[22], i2452.onKnifeIn)
  request.r(i2453[23], i2453[24], 0, i2452, 'knifePos')
  i2452.heartEffectScale = i2453[25]
  i2452.breakHeartEffectScale = i2453[26]
  i2452.blinkEffectScale = i2453[27]
  i2452.mergeEffectScale = i2453[28]
  i2452.playMoveToTargetFinishSound = !!i2453[29]
  i2452.moveToTargetFinishFxType = i2453[30]
  i2452.fxSpawnZPos = i2453[31]
  request.r(i2453[32], i2453[33], 0, i2452, 'tf')
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2455 = data
  i2454.center = new pc.Vec3( i2455[0], i2455[1], i2455[2] )
  i2454.radius = i2455[3]
  i2454.height = i2455[4]
  i2454.direction = i2455[5]
  i2454.enabled = !!i2455[6]
  i2454.isTrigger = !!i2455[7]
  request.r(i2455[8], i2455[9], 0, i2454, 'material')
  return i2454
}

Deserializers["CuttingBoard"] = function (request, data, root) {
  var i2456 = root || request.c( 'CuttingBoard' )
  var i2457 = data
  i2456.punchScale = new pc.Vec3( i2457[0], i2457[1], i2457[2] )
  i2456.punchDuration = i2457[3]
  i2456.isDone = !!i2457[4]
  i2456.onProcess = !!i2457[5]
  i2456.requireMatchingTargetTypeForHandTut = !!i2457[6]
  request.r(i2457[7], i2457[8], 0, i2456, 'itemDraggable')
  request.r(i2457[9], i2457[10], 0, i2456, 'itemClickable')
  request.r(i2457[11], i2457[12], 0, i2456, 'itemStirring')
  request.r(i2457[13], i2457[14], 0, i2456, 'itemKnifeSpriteMaskCutter')
  request.r(i2457[15], i2457[16], 0, i2456, 'itemSpriteMaskPainter')
  request.r(i2457[17], i2457[18], 0, i2456, 'itemDragSpriteMaskPainter')
  request.r(i2457[19], i2457[20], 0, i2456, 'itemMoveToTarget')
  request.r(i2457[21], i2457[22], 0, i2456, 'animator')
  i2456.itemType = i2457[23]
  request.r(i2457[24], i2457[25], 0, i2456, 'spriteRenderer')
  i2456.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2457[26], i2456.onKnifeIn)
  request.r(i2457[27], i2457[28], 0, i2456, 'knifePos')
  i2456.heartEffectScale = i2457[29]
  i2456.breakHeartEffectScale = i2457[30]
  i2456.blinkEffectScale = i2457[31]
  i2456.mergeEffectScale = i2457[32]
  i2456.playMoveToTargetFinishSound = !!i2457[33]
  i2456.moveToTargetFinishFxType = i2457[34]
  i2456.fxSpawnZPos = i2457[35]
  request.r(i2457[36], i2457[37], 0, i2456, 'tf')
  return i2456
}

Deserializers["ItemDragChildRotator"] = function (request, data, root) {
  var i2458 = root || request.c( 'ItemDragChildRotator' )
  var i2459 = data
  request.r(i2459[0], i2459[1], 0, i2458, 'rotateTarget')
  i2458.dragEulerAngles = new pc.Vec3( i2459[2], i2459[3], i2459[4] )
  i2458.useLocalRotation = !!i2459[5]
  i2458.rotateRelative = !!i2459[6]
  i2458.rotateDuration = i2459[7]
  i2458.rotateEase = i2459[8]
  i2458.rotateMode = i2459[9]
  return i2458
}

Deserializers["Knife"] = function (request, data, root) {
  var i2460 = root || request.c( 'Knife' )
  var i2461 = data
  request.r(i2461[0], i2461[1], 0, i2460, 'knifeIdle')
  request.r(i2461[2], i2461[3], 0, i2460, 'knifeOnDrag')
  i2460.knifeOnDragRotationOffset = new pc.Vec3( i2461[4], i2461[5], i2461[6] )
  i2460.knifeOnDragRotateDuration = i2461[7]
  i2460.knifeOnDragRotateEase = i2461[8]
  i2460.isDone = !!i2461[9]
  i2460.onProcess = !!i2461[10]
  i2460.requireMatchingTargetTypeForHandTut = !!i2461[11]
  request.r(i2461[12], i2461[13], 0, i2460, 'itemDraggable')
  request.r(i2461[14], i2461[15], 0, i2460, 'itemClickable')
  request.r(i2461[16], i2461[17], 0, i2460, 'itemStirring')
  request.r(i2461[18], i2461[19], 0, i2460, 'itemKnifeSpriteMaskCutter')
  request.r(i2461[20], i2461[21], 0, i2460, 'itemSpriteMaskPainter')
  request.r(i2461[22], i2461[23], 0, i2460, 'itemDragSpriteMaskPainter')
  request.r(i2461[24], i2461[25], 0, i2460, 'itemMoveToTarget')
  request.r(i2461[26], i2461[27], 0, i2460, 'animator')
  i2460.itemType = i2461[28]
  request.r(i2461[29], i2461[30], 0, i2460, 'spriteRenderer')
  i2460.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2461[31], i2460.onKnifeIn)
  request.r(i2461[32], i2461[33], 0, i2460, 'knifePos')
  i2460.heartEffectScale = i2461[34]
  i2460.breakHeartEffectScale = i2461[35]
  i2460.blinkEffectScale = i2461[36]
  i2460.mergeEffectScale = i2461[37]
  i2460.playMoveToTargetFinishSound = !!i2461[38]
  i2460.moveToTargetFinishFxType = i2461[39]
  i2460.fxSpawnZPos = i2461[40]
  request.r(i2461[41], i2461[42], 0, i2460, 'tf')
  return i2460
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i2462 = root || request.c( 'ItemClickable' )
  var i2463 = data
  i2462.requiredClicks = i2463[0]
  i2462.infiniteClick = !!i2463[1]
  i2462.canClick = !!i2463[2]
  i2462.disableAfterClick = !!i2463[3]
  i2462.onClick = request.d('UnityEngine.Events.UnityEvent', i2463[4], i2462.onClick)
  var i2465 = i2463[5]
  var i2464 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.add(request.d('UnityEngine.Events.UnityEvent', i2465[i + 0]));
  }
  i2462.sequentialOnClicks = i2464
  i2462.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i2463[6], i2462.onClickComplete)
  return i2462
}

Deserializers["ItemWithTrash"] = function (request, data, root) {
  var i2468 = root || request.c( 'ItemWithTrash' )
  var i2469 = data
  var i2471 = i2469[0]
  var i2470 = []
  for(var i = 0; i < i2471.length; i += 2) {
  request.r(i2471[i + 0], i2471[i + 1], 2, i2470, '')
  }
  i2468.requiredItems = i2470
  request.r(i2469[1], i2469[2], 0, i2468, 'nextItem')
  var i2473 = i2469[3]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 2) {
  request.r(i2473[i + 0], i2473[i + 1], 2, i2472, '')
  }
  i2468.trashObjects = i2472
  i2468.isTrashItem = !!i2469[4]
  i2468.isDone = !!i2469[5]
  i2468.onProcess = !!i2469[6]
  i2468.requireMatchingTargetTypeForHandTut = !!i2469[7]
  request.r(i2469[8], i2469[9], 0, i2468, 'itemDraggable')
  request.r(i2469[10], i2469[11], 0, i2468, 'itemClickable')
  request.r(i2469[12], i2469[13], 0, i2468, 'itemStirring')
  request.r(i2469[14], i2469[15], 0, i2468, 'itemKnifeSpriteMaskCutter')
  request.r(i2469[16], i2469[17], 0, i2468, 'itemSpriteMaskPainter')
  request.r(i2469[18], i2469[19], 0, i2468, 'itemDragSpriteMaskPainter')
  request.r(i2469[20], i2469[21], 0, i2468, 'itemMoveToTarget')
  request.r(i2469[22], i2469[23], 0, i2468, 'animator')
  i2468.itemType = i2469[24]
  request.r(i2469[25], i2469[26], 0, i2468, 'spriteRenderer')
  i2468.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2469[27], i2468.onKnifeIn)
  request.r(i2469[28], i2469[29], 0, i2468, 'knifePos')
  i2468.heartEffectScale = i2469[30]
  i2468.breakHeartEffectScale = i2469[31]
  i2468.blinkEffectScale = i2469[32]
  i2468.mergeEffectScale = i2469[33]
  i2468.playMoveToTargetFinishSound = !!i2469[34]
  i2468.moveToTargetFinishFxType = i2469[35]
  i2468.fxSpawnZPos = i2469[36]
  request.r(i2469[37], i2469[38], 0, i2468, 'tf')
  return i2468
}

Deserializers["OilFood"] = function (request, data, root) {
  var i2478 = root || request.c( 'OilFood' )
  var i2479 = data
  i2478.isOilOnce = !!i2479[0]
  i2478.isDone = !!i2479[1]
  i2478.onProcess = !!i2479[2]
  i2478.requireMatchingTargetTypeForHandTut = !!i2479[3]
  request.r(i2479[4], i2479[5], 0, i2478, 'itemDraggable')
  request.r(i2479[6], i2479[7], 0, i2478, 'itemClickable')
  request.r(i2479[8], i2479[9], 0, i2478, 'itemStirring')
  request.r(i2479[10], i2479[11], 0, i2478, 'itemKnifeSpriteMaskCutter')
  request.r(i2479[12], i2479[13], 0, i2478, 'itemSpriteMaskPainter')
  request.r(i2479[14], i2479[15], 0, i2478, 'itemDragSpriteMaskPainter')
  request.r(i2479[16], i2479[17], 0, i2478, 'itemMoveToTarget')
  request.r(i2479[18], i2479[19], 0, i2478, 'animator')
  i2478.itemType = i2479[20]
  request.r(i2479[21], i2479[22], 0, i2478, 'spriteRenderer')
  i2478.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2479[23], i2478.onKnifeIn)
  request.r(i2479[24], i2479[25], 0, i2478, 'knifePos')
  i2478.heartEffectScale = i2479[26]
  i2478.breakHeartEffectScale = i2479[27]
  i2478.blinkEffectScale = i2479[28]
  i2478.mergeEffectScale = i2479[29]
  i2478.playMoveToTargetFinishSound = !!i2479[30]
  i2478.moveToTargetFinishFxType = i2479[31]
  i2478.fxSpawnZPos = i2479[32]
  request.r(i2479[33], i2479[34], 0, i2478, 'tf')
  return i2478
}

Deserializers["OilBrush"] = function (request, data, root) {
  var i2480 = root || request.c( 'OilBrush' )
  var i2481 = data
  var i2483 = i2481[0]
  var i2482 = new (System.Collections.Generic.List$1(Bridge.ns('OilFood')))
  for(var i = 0; i < i2483.length; i += 2) {
  request.r(i2483[i + 0], i2483[i + 1], 1, i2482, '')
  }
  i2480.oilFoods = i2482
  i2480.targetToFind = i2481[1]
  i2480.targetItemTypeWhenHit = i2481[2]
  i2480.targetItemTypeOnDropFail = i2481[3]
  request.r(i2481[4], i2481[5], 0, i2480, 'raycastPoint')
  i2480.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2481[6] )
  i2480.rayDistance = i2481[7]
  i2480.updateMoveDefaultTarget = !!i2481[8]
  i2480.invokeOnlyWhenTargetChanged = !!i2481[9]
  i2480.targetChangeEnabled = !!i2481[10]
  i2480.restoreTargetOnDropFail = !!i2481[11]
  i2480.resetCurrentTargetOnNoHit = !!i2481[12]
  i2480.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i2481[13], i2480.onTargetFound)
  i2480.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i2481[14], i2480.onTargetFoundWithItem)
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2487 = data
  i2486.ambientIntensity = i2487[0]
  i2486.reflectionIntensity = i2487[1]
  i2486.ambientMode = i2487[2]
  i2486.ambientLight = new pc.Color(i2487[3], i2487[4], i2487[5], i2487[6])
  i2486.ambientSkyColor = new pc.Color(i2487[7], i2487[8], i2487[9], i2487[10])
  i2486.ambientGroundColor = new pc.Color(i2487[11], i2487[12], i2487[13], i2487[14])
  i2486.ambientEquatorColor = new pc.Color(i2487[15], i2487[16], i2487[17], i2487[18])
  i2486.fogColor = new pc.Color(i2487[19], i2487[20], i2487[21], i2487[22])
  i2486.fogEndDistance = i2487[23]
  i2486.fogStartDistance = i2487[24]
  i2486.fogDensity = i2487[25]
  i2486.fog = !!i2487[26]
  request.r(i2487[27], i2487[28], 0, i2486, 'skybox')
  i2486.fogMode = i2487[29]
  var i2489 = i2487[30]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2489[i + 0]) );
  }
  i2486.lightmaps = i2488
  i2486.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2487[31], i2486.lightProbes)
  i2486.lightmapsMode = i2487[32]
  i2486.mixedBakeMode = i2487[33]
  i2486.environmentLightingMode = i2487[34]
  i2486.ambientProbe = new pc.SphericalHarmonicsL2(i2487[35])
  i2486.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2487[36])
  i2486.useReferenceAmbientProbe = !!i2487[37]
  request.r(i2487[38], i2487[39], 0, i2486, 'customReflection')
  request.r(i2487[40], i2487[41], 0, i2486, 'defaultReflection')
  i2486.defaultReflectionMode = i2487[42]
  i2486.defaultReflectionResolution = i2487[43]
  i2486.sunLightObjectId = i2487[44]
  i2486.pixelLightCount = i2487[45]
  i2486.defaultReflectionHDR = !!i2487[46]
  i2486.hasLightDataAsset = !!i2487[47]
  i2486.hasManualGenerate = !!i2487[48]
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2493 = data
  request.r(i2493[0], i2493[1], 0, i2492, 'lightmapColor')
  request.r(i2493[2], i2493[3], 0, i2492, 'lightmapDirection')
  request.r(i2493[4], i2493[5], 0, i2492, 'shadowMask')
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2494 = root || new UnityEngine.LightProbes()
  var i2495 = data
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2503 = data
  var i2505 = i2503[0]
  var i2504 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2505[i + 0]));
  }
  i2502.ShaderCompilationErrors = i2504
  i2502.name = i2503[1]
  i2502.guid = i2503[2]
  var i2507 = i2503[3]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( i2507[i + 0] );
  }
  i2502.shaderDefinedKeywords = i2506
  var i2509 = i2503[4]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2509[i + 0]) );
  }
  i2502.passes = i2508
  var i2511 = i2503[5]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2511[i + 0]) );
  }
  i2502.usePasses = i2510
  var i2513 = i2503[6]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2513[i + 0]) );
  }
  i2502.defaultParameterValues = i2512
  request.r(i2503[7], i2503[8], 0, i2502, 'unityFallbackShader')
  i2502.readDepth = !!i2503[9]
  i2502.hasDepthOnlyPass = !!i2503[10]
  i2502.isCreatedByShaderGraph = !!i2503[11]
  i2502.disableBatching = !!i2503[12]
  i2502.compiled = !!i2503[13]
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2517 = data
  i2516.shaderName = i2517[0]
  i2516.errorMessage = i2517[1]
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2522 = root || new pc.UnityShaderPass()
  var i2523 = data
  i2522.id = i2523[0]
  i2522.subShaderIndex = i2523[1]
  i2522.name = i2523[2]
  i2522.passType = i2523[3]
  i2522.grabPassTextureName = i2523[4]
  i2522.usePass = !!i2523[5]
  i2522.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[6], i2522.zTest)
  i2522.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[7], i2522.zWrite)
  i2522.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[8], i2522.culling)
  i2522.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2523[9], i2522.blending)
  i2522.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2523[10], i2522.alphaBlending)
  i2522.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[11], i2522.colorWriteMask)
  i2522.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[12], i2522.offsetUnits)
  i2522.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[13], i2522.offsetFactor)
  i2522.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[14], i2522.stencilRef)
  i2522.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[15], i2522.stencilReadMask)
  i2522.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[16], i2522.stencilWriteMask)
  i2522.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2523[17], i2522.stencilOp)
  i2522.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2523[18], i2522.stencilOpFront)
  i2522.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2523[19], i2522.stencilOpBack)
  var i2525 = i2523[20]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2525[i + 0]) );
  }
  i2522.tags = i2524
  var i2527 = i2523[21]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( i2527[i + 0] );
  }
  i2522.passDefinedKeywords = i2526
  var i2529 = i2523[22]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2529[i + 0]) );
  }
  i2522.passDefinedKeywordGroups = i2528
  var i2531 = i2523[23]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2531[i + 0]) );
  }
  i2522.variants = i2530
  var i2533 = i2523[24]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2533[i + 0]) );
  }
  i2522.excludedVariants = i2532
  i2522.hasDepthReader = !!i2523[25]
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2535 = data
  i2534.val = i2535[0]
  i2534.name = i2535[1]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2537 = data
  i2536.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2537[0], i2536.src)
  i2536.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2537[1], i2536.dst)
  i2536.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2537[2], i2536.op)
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2539 = data
  i2538.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[0], i2538.pass)
  i2538.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[1], i2538.fail)
  i2538.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[2], i2538.zFail)
  i2538.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[3], i2538.comp)
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2543 = data
  i2542.name = i2543[0]
  i2542.value = i2543[1]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2547 = data
  var i2549 = i2547[0]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( i2549[i + 0] );
  }
  i2546.keywords = i2548
  i2546.hasDiscard = !!i2547[1]
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2553 = data
  i2552.passId = i2553[0]
  i2552.subShaderIndex = i2553[1]
  var i2555 = i2553[2]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.push( i2555[i + 0] );
  }
  i2552.keywords = i2554
  i2552.vertexProgram = i2553[3]
  i2552.fragmentProgram = i2553[4]
  i2552.exportedForWebGl2 = !!i2553[5]
  i2552.readDepth = !!i2553[6]
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2559 = data
  request.r(i2559[0], i2559[1], 0, i2558, 'shader')
  i2558.pass = i2559[2]
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2563 = data
  i2562.name = i2563[0]
  i2562.type = i2563[1]
  i2562.value = new pc.Vec4( i2563[2], i2563[3], i2563[4], i2563[5] )
  i2562.textureValue = i2563[6]
  i2562.shaderPropertyFlag = i2563[7]
  return i2562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2565 = data
  i2564.name = i2565[0]
  request.r(i2565[1], i2565[2], 0, i2564, 'texture')
  i2564.aabb = i2565[3]
  i2564.vertices = i2565[4]
  i2564.triangles = i2565[5]
  i2564.textureRect = UnityEngine.Rect.MinMaxRect(i2565[6], i2565[7], i2565[8], i2565[9])
  i2564.packedRect = UnityEngine.Rect.MinMaxRect(i2565[10], i2565[11], i2565[12], i2565[13])
  i2564.border = new pc.Vec4( i2565[14], i2565[15], i2565[16], i2565[17] )
  i2564.transparency = i2565[18]
  i2564.bounds = i2565[19]
  i2564.pixelsPerUnit = i2565[20]
  i2564.textureWidth = i2565[21]
  i2564.textureHeight = i2565[22]
  i2564.nativeSize = new pc.Vec2( i2565[23], i2565[24] )
  i2564.pivot = new pc.Vec2( i2565[25], i2565[26] )
  i2564.textureRectOffset = new pc.Vec2( i2565[27], i2565[28] )
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2567 = data
  i2566.name = i2567[0]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2569 = data
  i2568.name = i2569[0]
  i2568.wrapMode = i2569[1]
  i2568.isLooping = !!i2569[2]
  i2568.length = i2569[3]
  var i2571 = i2569[4]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2571[i + 0]) );
  }
  i2568.curves = i2570
  var i2573 = i2569[5]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2573[i + 0]) );
  }
  i2568.events = i2572
  i2568.halfPrecision = !!i2569[6]
  i2568._frameRate = i2569[7]
  i2568.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2569[8], i2568.localBounds)
  i2568.hasMuscleCurves = !!i2569[9]
  var i2575 = i2569[10]
  var i2574 = []
  for(var i = 0; i < i2575.length; i += 1) {
    i2574.push( i2575[i + 0] );
  }
  i2568.clipMuscleConstant = i2574
  i2568.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2569[11], i2568.clipBindingConstant)
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2579 = data
  i2578.path = i2579[0]
  i2578.hash = i2579[1]
  i2578.componentType = i2579[2]
  i2578.property = i2579[3]
  i2578.keys = i2579[4]
  var i2581 = i2579[5]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2581[i + 0]) );
  }
  i2578.objectReferenceKeys = i2580
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2585 = data
  i2584.time = i2585[0]
  request.r(i2585[1], i2585[2], 0, i2584, 'value')
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2589 = data
  i2588.functionName = i2589[0]
  i2588.floatParameter = i2589[1]
  i2588.intParameter = i2589[2]
  i2588.stringParameter = i2589[3]
  request.r(i2589[4], i2589[5], 0, i2588, 'objectReferenceParameter')
  i2588.time = i2589[6]
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2591 = data
  i2590.center = new pc.Vec3( i2591[0], i2591[1], i2591[2] )
  i2590.extends = new pc.Vec3( i2591[3], i2591[4], i2591[5] )
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2595 = data
  var i2597 = i2595[0]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( i2597[i + 0] );
  }
  i2594.genericBindings = i2596
  var i2599 = i2595[1]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( i2599[i + 0] );
  }
  i2594.pptrCurveMapping = i2598
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2601 = data
  i2600.name = i2601[0]
  var i2603 = i2601[1]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2603[i + 0]) );
  }
  i2600.layers = i2602
  var i2605 = i2601[2]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2605[i + 0]) );
  }
  i2600.parameters = i2604
  i2600.animationClips = i2601[3]
  i2600.avatarUnsupported = i2601[4]
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2609 = data
  i2608.name = i2609[0]
  i2608.defaultWeight = i2609[1]
  i2608.blendingMode = i2609[2]
  i2608.avatarMask = i2609[3]
  i2608.syncedLayerIndex = i2609[4]
  i2608.syncedLayerAffectsTiming = !!i2609[5]
  i2608.syncedLayers = i2609[6]
  i2608.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2609[7], i2608.stateMachine)
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2611 = data
  i2610.id = i2611[0]
  i2610.name = i2611[1]
  i2610.path = i2611[2]
  var i2613 = i2611[3]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2613[i + 0]) );
  }
  i2610.states = i2612
  var i2615 = i2611[4]
  var i2614 = []
  for(var i = 0; i < i2615.length; i += 1) {
    i2614.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2615[i + 0]) );
  }
  i2610.machines = i2614
  var i2617 = i2611[5]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2617[i + 0]) );
  }
  i2610.entryStateTransitions = i2616
  var i2619 = i2611[6]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2619[i + 0]) );
  }
  i2610.exitStateTransitions = i2618
  var i2621 = i2611[7]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2621[i + 0]) );
  }
  i2610.anyStateTransitions = i2620
  i2610.defaultStateId = i2611[8]
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2625 = data
  i2624.id = i2625[0]
  i2624.name = i2625[1]
  i2624.cycleOffset = i2625[2]
  i2624.cycleOffsetParameter = i2625[3]
  i2624.cycleOffsetParameterActive = !!i2625[4]
  i2624.mirror = !!i2625[5]
  i2624.mirrorParameter = i2625[6]
  i2624.mirrorParameterActive = !!i2625[7]
  i2624.motionId = i2625[8]
  i2624.nameHash = i2625[9]
  i2624.fullPathHash = i2625[10]
  i2624.speed = i2625[11]
  i2624.speedParameter = i2625[12]
  i2624.speedParameterActive = !!i2625[13]
  i2624.tag = i2625[14]
  i2624.tagHash = i2625[15]
  i2624.writeDefaultValues = !!i2625[16]
  var i2627 = i2625[17]
  var i2626 = []
  for(var i = 0; i < i2627.length; i += 2) {
  request.r(i2627[i + 0], i2627[i + 1], 2, i2626, '')
  }
  i2624.behaviours = i2626
  var i2629 = i2625[18]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2629[i + 0]) );
  }
  i2624.transitions = i2628
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2635 = data
  i2634.fullPath = i2635[0]
  i2634.canTransitionToSelf = !!i2635[1]
  i2634.duration = i2635[2]
  i2634.exitTime = i2635[3]
  i2634.hasExitTime = !!i2635[4]
  i2634.hasFixedDuration = !!i2635[5]
  i2634.interruptionSource = i2635[6]
  i2634.offset = i2635[7]
  i2634.orderedInterruption = !!i2635[8]
  i2634.destinationStateId = i2635[9]
  i2634.isExit = !!i2635[10]
  i2634.mute = !!i2635[11]
  i2634.solo = !!i2635[12]
  var i2637 = i2635[13]
  var i2636 = []
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2637[i + 0]) );
  }
  i2634.conditions = i2636
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2643 = data
  i2642.destinationStateId = i2643[0]
  i2642.isExit = !!i2643[1]
  i2642.mute = !!i2643[2]
  i2642.solo = !!i2643[3]
  var i2645 = i2643[4]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2645[i + 0]) );
  }
  i2642.conditions = i2644
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2649 = data
  i2648.defaultBool = !!i2649[0]
  i2648.defaultFloat = i2649[1]
  i2648.defaultInt = i2649[2]
  i2648.name = i2649[3]
  i2648.nameHash = i2649[4]
  i2648.type = i2649[5]
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2653 = data
  i2652.mode = i2653[0]
  i2652.parameter = i2653[1]
  i2652.threshold = i2653[2]
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2655 = data
  i2654.name = i2655[0]
  i2654.bytes64 = i2655[1]
  i2654.data = i2655[2]
  return i2654
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2656 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2657 = data
  i2656.normalStyle = i2657[0]
  i2656.normalSpacingOffset = i2657[1]
  i2656.boldStyle = i2657[2]
  i2656.boldSpacing = i2657[3]
  i2656.italicStyle = i2657[4]
  i2656.tabSize = i2657[5]
  request.r(i2657[6], i2657[7], 0, i2656, 'atlas')
  i2656.m_SourceFontFileGUID = i2657[8]
  i2656.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2657[9], i2656.m_CreationSettings)
  request.r(i2657[10], i2657[11], 0, i2656, 'm_SourceFontFile')
  i2656.m_SourceFontFilePath = i2657[12]
  i2656.m_AtlasPopulationMode = i2657[13]
  i2656.InternalDynamicOS = !!i2657[14]
  var i2659 = i2657[15]
  var i2658 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.add(request.d('UnityEngine.TextCore.Glyph', i2659[i + 0]));
  }
  i2656.m_GlyphTable = i2658
  var i2661 = i2657[16]
  var i2660 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.add(request.d('TMPro.TMP_Character', i2661[i + 0]));
  }
  i2656.m_CharacterTable = i2660
  var i2663 = i2657[17]
  var i2662 = []
  for(var i = 0; i < i2663.length; i += 2) {
  request.r(i2663[i + 0], i2663[i + 1], 2, i2662, '')
  }
  i2656.m_AtlasTextures = i2662
  i2656.m_AtlasTextureIndex = i2657[18]
  i2656.m_IsMultiAtlasTexturesEnabled = !!i2657[19]
  i2656.m_GetFontFeatures = !!i2657[20]
  i2656.m_ClearDynamicDataOnBuild = !!i2657[21]
  i2656.m_AtlasWidth = i2657[22]
  i2656.m_AtlasHeight = i2657[23]
  i2656.m_AtlasPadding = i2657[24]
  i2656.m_AtlasRenderMode = i2657[25]
  var i2665 = i2657[26]
  var i2664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.add(request.d('UnityEngine.TextCore.GlyphRect', i2665[i + 0]));
  }
  i2656.m_UsedGlyphRects = i2664
  var i2667 = i2657[27]
  var i2666 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.add(request.d('UnityEngine.TextCore.GlyphRect', i2667[i + 0]));
  }
  i2656.m_FreeGlyphRects = i2666
  i2656.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2657[28], i2656.m_FontFeatureTable)
  i2656.m_ShouldReimportFontFeatures = !!i2657[29]
  var i2669 = i2657[30]
  var i2668 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2669.length; i += 2) {
  request.r(i2669[i + 0], i2669[i + 1], 1, i2668, '')
  }
  i2656.m_FallbackFontAssetTable = i2668
  var i2671 = i2657[31]
  var i2670 = []
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.push( request.d('TMPro.TMP_FontWeightPair', i2671[i + 0]) );
  }
  i2656.m_FontWeightTable = i2670
  var i2673 = i2657[32]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.push( request.d('TMPro.TMP_FontWeightPair', i2673[i + 0]) );
  }
  i2656.fontWeights = i2672
  i2656.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2657[33], i2656.m_fontInfo)
  var i2675 = i2657[34]
  var i2674 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.add(request.d('TMPro.TMP_Glyph', i2675[i + 0]));
  }
  i2656.m_glyphInfoList = i2674
  i2656.m_KerningTable = request.d('TMPro.KerningTable', i2657[35], i2656.m_KerningTable)
  var i2677 = i2657[36]
  var i2676 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2677.length; i += 2) {
  request.r(i2677[i + 0], i2677[i + 1], 1, i2676, '')
  }
  i2656.fallbackFontAssets = i2676
  i2656.m_Version = i2657[37]
  i2656.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2657[38], i2656.m_FaceInfo)
  request.r(i2657[39], i2657[40], 0, i2656, 'm_Material')
  return i2656
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2678 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2679 = data
  i2678.sourceFontFileName = i2679[0]
  i2678.sourceFontFileGUID = i2679[1]
  i2678.faceIndex = i2679[2]
  i2678.pointSizeSamplingMode = i2679[3]
  i2678.pointSize = i2679[4]
  i2678.padding = i2679[5]
  i2678.paddingMode = i2679[6]
  i2678.packingMode = i2679[7]
  i2678.atlasWidth = i2679[8]
  i2678.atlasHeight = i2679[9]
  i2678.characterSetSelectionMode = i2679[10]
  i2678.characterSequence = i2679[11]
  i2678.referencedFontAssetGUID = i2679[12]
  i2678.referencedTextAssetGUID = i2679[13]
  i2678.fontStyle = i2679[14]
  i2678.fontStyleModifier = i2679[15]
  i2678.renderMode = i2679[16]
  i2678.includeFontFeatures = !!i2679[17]
  return i2678
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2682 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2683 = data
  i2682.m_Index = i2683[0]
  i2682.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2683[1], i2682.m_Metrics)
  i2682.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2683[2], i2682.m_GlyphRect)
  i2682.m_Scale = i2683[3]
  i2682.m_AtlasIndex = i2683[4]
  i2682.m_ClassDefinitionType = i2683[5]
  return i2682
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2684 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2685 = data
  i2684.m_Width = i2685[0]
  i2684.m_Height = i2685[1]
  i2684.m_HorizontalBearingX = i2685[2]
  i2684.m_HorizontalBearingY = i2685[3]
  i2684.m_HorizontalAdvance = i2685[4]
  return i2684
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2686 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2687 = data
  i2686.m_X = i2687[0]
  i2686.m_Y = i2687[1]
  i2686.m_Width = i2687[2]
  i2686.m_Height = i2687[3]
  return i2686
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2690 = root || request.c( 'TMPro.TMP_Character' )
  var i2691 = data
  i2690.m_ElementType = i2691[0]
  i2690.m_Unicode = i2691[1]
  i2690.m_GlyphIndex = i2691[2]
  i2690.m_Scale = i2691[3]
  return i2690
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2696 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2697 = data
  var i2699 = i2697[0]
  var i2698 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.add(request.d('TMPro.MultipleSubstitutionRecord', i2699[i + 0]));
  }
  i2696.m_MultipleSubstitutionRecords = i2698
  var i2701 = i2697[1]
  var i2700 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.add(request.d('TMPro.LigatureSubstitutionRecord', i2701[i + 0]));
  }
  i2696.m_LigatureSubstitutionRecords = i2700
  var i2703 = i2697[2]
  var i2702 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2703[i + 0]));
  }
  i2696.m_GlyphPairAdjustmentRecords = i2702
  var i2705 = i2697[3]
  var i2704 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2705[i + 0]));
  }
  i2696.m_MarkToBaseAdjustmentRecords = i2704
  var i2707 = i2697[4]
  var i2706 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2707[i + 0]));
  }
  i2696.m_MarkToMarkAdjustmentRecords = i2706
  return i2696
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2710 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2711 = data
  i2710.m_TargetGlyphID = i2711[0]
  i2710.m_SubstituteGlyphIDs = i2711[1]
  return i2710
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2714 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2715 = data
  i2714.m_ComponentGlyphIDs = i2715[0]
  i2714.m_LigatureGlyphID = i2715[1]
  return i2714
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2718 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2719 = data
  i2718.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2719[0], i2718.m_FirstAdjustmentRecord)
  i2718.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2719[1], i2718.m_SecondAdjustmentRecord)
  i2718.m_FeatureLookupFlags = i2719[2]
  return i2718
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2722 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2723 = data
  i2722.m_BaseGlyphID = i2723[0]
  i2722.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2723[1], i2722.m_BaseGlyphAnchorPoint)
  i2722.m_MarkGlyphID = i2723[2]
  i2722.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2723[3], i2722.m_MarkPositionAdjustment)
  return i2722
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2726 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2727 = data
  i2726.m_BaseMarkGlyphID = i2727[0]
  i2726.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2727[1], i2726.m_BaseMarkGlyphAnchorPoint)
  i2726.m_CombiningMarkGlyphID = i2727[2]
  i2726.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2727[3], i2726.m_CombiningMarkPositionAdjustment)
  return i2726
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2732 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2733 = data
  request.r(i2733[0], i2733[1], 0, i2732, 'regularTypeface')
  request.r(i2733[2], i2733[3], 0, i2732, 'italicTypeface')
  return i2732
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2734 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2735 = data
  i2734.Name = i2735[0]
  i2734.PointSize = i2735[1]
  i2734.Scale = i2735[2]
  i2734.CharacterCount = i2735[3]
  i2734.LineHeight = i2735[4]
  i2734.Baseline = i2735[5]
  i2734.Ascender = i2735[6]
  i2734.CapHeight = i2735[7]
  i2734.Descender = i2735[8]
  i2734.CenterLine = i2735[9]
  i2734.SuperscriptOffset = i2735[10]
  i2734.SubscriptOffset = i2735[11]
  i2734.SubSize = i2735[12]
  i2734.Underline = i2735[13]
  i2734.UnderlineThickness = i2735[14]
  i2734.strikethrough = i2735[15]
  i2734.strikethroughThickness = i2735[16]
  i2734.TabWidth = i2735[17]
  i2734.Padding = i2735[18]
  i2734.AtlasWidth = i2735[19]
  i2734.AtlasHeight = i2735[20]
  return i2734
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2738 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2739 = data
  i2738.id = i2739[0]
  i2738.x = i2739[1]
  i2738.y = i2739[2]
  i2738.width = i2739[3]
  i2738.height = i2739[4]
  i2738.xOffset = i2739[5]
  i2738.yOffset = i2739[6]
  i2738.xAdvance = i2739[7]
  i2738.scale = i2739[8]
  return i2738
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2740 = root || request.c( 'TMPro.KerningTable' )
  var i2741 = data
  var i2743 = i2741[0]
  var i2742 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2743.length; i += 1) {
    i2742.add(request.d('TMPro.KerningPair', i2743[i + 0]));
  }
  i2740.kerningPairs = i2742
  return i2740
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2746 = root || request.c( 'TMPro.KerningPair' )
  var i2747 = data
  i2746.xOffset = i2747[0]
  i2746.m_FirstGlyph = i2747[1]
  i2746.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2747[2], i2746.m_FirstGlyphAdjustments)
  i2746.m_SecondGlyph = i2747[3]
  i2746.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2747[4], i2746.m_SecondGlyphAdjustments)
  i2746.m_IgnoreSpacingAdjustments = !!i2747[5]
  return i2746
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2748 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2749 = data
  i2748.m_FaceIndex = i2749[0]
  i2748.m_FamilyName = i2749[1]
  i2748.m_StyleName = i2749[2]
  i2748.m_PointSize = i2749[3]
  i2748.m_Scale = i2749[4]
  i2748.m_UnitsPerEM = i2749[5]
  i2748.m_LineHeight = i2749[6]
  i2748.m_AscentLine = i2749[7]
  i2748.m_CapLine = i2749[8]
  i2748.m_MeanLine = i2749[9]
  i2748.m_Baseline = i2749[10]
  i2748.m_DescentLine = i2749[11]
  i2748.m_SuperscriptOffset = i2749[12]
  i2748.m_SuperscriptSize = i2749[13]
  i2748.m_SubscriptOffset = i2749[14]
  i2748.m_SubscriptSize = i2749[15]
  i2748.m_UnderlineOffset = i2749[16]
  i2748.m_UnderlineThickness = i2749[17]
  i2748.m_StrikethroughOffset = i2749[18]
  i2748.m_StrikethroughThickness = i2749[19]
  i2748.m_TabWidth = i2749[20]
  return i2748
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2750 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2751 = data
  i2750.useSafeMode = !!i2751[0]
  i2750.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2751[1], i2750.safeModeOptions)
  i2750.timeScale = i2751[2]
  i2750.unscaledTimeScale = i2751[3]
  i2750.useSmoothDeltaTime = !!i2751[4]
  i2750.maxSmoothUnscaledTime = i2751[5]
  i2750.rewindCallbackMode = i2751[6]
  i2750.showUnityEditorReport = !!i2751[7]
  i2750.logBehaviour = i2751[8]
  i2750.drawGizmos = !!i2751[9]
  i2750.defaultRecyclable = !!i2751[10]
  i2750.defaultAutoPlay = i2751[11]
  i2750.defaultUpdateType = i2751[12]
  i2750.defaultTimeScaleIndependent = !!i2751[13]
  i2750.defaultEaseType = i2751[14]
  i2750.defaultEaseOvershootOrAmplitude = i2751[15]
  i2750.defaultEasePeriod = i2751[16]
  i2750.defaultAutoKill = !!i2751[17]
  i2750.defaultLoopType = i2751[18]
  i2750.debugMode = !!i2751[19]
  i2750.debugStoreTargetId = !!i2751[20]
  i2750.showPreviewPanel = !!i2751[21]
  i2750.storeSettingsLocation = i2751[22]
  i2750.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2751[23], i2750.modules)
  i2750.createASMDEF = !!i2751[24]
  i2750.showPlayingTweens = !!i2751[25]
  i2750.showPausedTweens = !!i2751[26]
  return i2750
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2752 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2753 = data
  i2752.logBehaviour = i2753[0]
  i2752.nestedTweenFailureBehaviour = i2753[1]
  return i2752
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2754 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2755 = data
  i2754.showPanel = !!i2755[0]
  i2754.audioEnabled = !!i2755[1]
  i2754.physicsEnabled = !!i2755[2]
  i2754.physics2DEnabled = !!i2755[3]
  i2754.spriteEnabled = !!i2755[4]
  i2754.uiEnabled = !!i2755[5]
  i2754.uiToolkitEnabled = !!i2755[6]
  i2754.textMeshProEnabled = !!i2755[7]
  i2754.tk2DEnabled = !!i2755[8]
  i2754.deAudioEnabled = !!i2755[9]
  i2754.deUnityExtendedEnabled = !!i2755[10]
  i2754.epoOutlineEnabled = !!i2755[11]
  return i2754
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2756 = root || request.c( 'TMPro.TMP_Settings' )
  var i2757 = data
  i2756.assetVersion = i2757[0]
  i2756.m_TextWrappingMode = i2757[1]
  i2756.m_enableKerning = !!i2757[2]
  var i2759 = i2757[3]
  var i2758 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2759.length; i += 1) {
    i2758.add(i2759[i + 0]);
  }
  i2756.m_ActiveFontFeatures = i2758
  i2756.m_enableExtraPadding = !!i2757[4]
  i2756.m_enableTintAllSprites = !!i2757[5]
  i2756.m_enableParseEscapeCharacters = !!i2757[6]
  i2756.m_EnableRaycastTarget = !!i2757[7]
  i2756.m_GetFontFeaturesAtRuntime = !!i2757[8]
  i2756.m_missingGlyphCharacter = i2757[9]
  i2756.m_ClearDynamicDataOnBuild = !!i2757[10]
  i2756.m_warningsDisabled = !!i2757[11]
  request.r(i2757[12], i2757[13], 0, i2756, 'm_defaultFontAsset')
  i2756.m_defaultFontAssetPath = i2757[14]
  i2756.m_defaultFontSize = i2757[15]
  i2756.m_defaultAutoSizeMinRatio = i2757[16]
  i2756.m_defaultAutoSizeMaxRatio = i2757[17]
  i2756.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2757[18], i2757[19] )
  i2756.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2757[20], i2757[21] )
  i2756.m_autoSizeTextContainer = !!i2757[22]
  i2756.m_IsTextObjectScaleStatic = !!i2757[23]
  var i2761 = i2757[24]
  var i2760 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2761.length; i += 2) {
  request.r(i2761[i + 0], i2761[i + 1], 1, i2760, '')
  }
  i2756.m_fallbackFontAssets = i2760
  i2756.m_matchMaterialPreset = !!i2757[25]
  i2756.m_HideSubTextObjects = !!i2757[26]
  request.r(i2757[27], i2757[28], 0, i2756, 'm_defaultSpriteAsset')
  i2756.m_defaultSpriteAssetPath = i2757[29]
  i2756.m_enableEmojiSupport = !!i2757[30]
  i2756.m_MissingCharacterSpriteUnicode = i2757[31]
  var i2763 = i2757[32]
  var i2762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2763.length; i += 2) {
  request.r(i2763[i + 0], i2763[i + 1], 1, i2762, '')
  }
  i2756.m_EmojiFallbackTextAssets = i2762
  i2756.m_defaultColorGradientPresetsPath = i2757[33]
  request.r(i2757[34], i2757[35], 0, i2756, 'm_defaultStyleSheet')
  i2756.m_StyleSheetsResourcePath = i2757[36]
  request.r(i2757[37], i2757[38], 0, i2756, 'm_leadingCharacters')
  request.r(i2757[39], i2757[40], 0, i2756, 'm_followingCharacters')
  i2756.m_UseModernHangulLineBreakingRules = !!i2757[41]
  return i2756
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2766 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2767 = data
  request.r(i2767[0], i2767[1], 0, i2766, 'spriteSheet')
  var i2769 = i2767[2]
  var i2768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.add(request.d('TMPro.TMP_Sprite', i2769[i + 0]));
  }
  i2766.spriteInfoList = i2768
  var i2771 = i2767[3]
  var i2770 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2771.length; i += 2) {
  request.r(i2771[i + 0], i2771[i + 1], 1, i2770, '')
  }
  i2766.fallbackSpriteAssets = i2770
  var i2773 = i2767[4]
  var i2772 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.add(request.d('TMPro.TMP_SpriteCharacter', i2773[i + 0]));
  }
  i2766.m_SpriteCharacterTable = i2772
  var i2775 = i2767[5]
  var i2774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.add(request.d('TMPro.TMP_SpriteGlyph', i2775[i + 0]));
  }
  i2766.m_GlyphTable = i2774
  i2766.m_Version = i2767[6]
  i2766.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2767[7], i2766.m_FaceInfo)
  request.r(i2767[8], i2767[9], 0, i2766, 'm_Material')
  return i2766
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2778 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2779 = data
  i2778.name = i2779[0]
  i2778.hashCode = i2779[1]
  i2778.unicode = i2779[2]
  i2778.pivot = new pc.Vec2( i2779[3], i2779[4] )
  request.r(i2779[5], i2779[6], 0, i2778, 'sprite')
  i2778.id = i2779[7]
  i2778.x = i2779[8]
  i2778.y = i2779[9]
  i2778.width = i2779[10]
  i2778.height = i2779[11]
  i2778.xOffset = i2779[12]
  i2778.yOffset = i2779[13]
  i2778.xAdvance = i2779[14]
  i2778.scale = i2779[15]
  return i2778
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2784 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2785 = data
  i2784.m_Name = i2785[0]
  i2784.m_ElementType = i2785[1]
  i2784.m_Unicode = i2785[2]
  i2784.m_GlyphIndex = i2785[3]
  i2784.m_Scale = i2785[4]
  return i2784
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2788 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2789 = data
  request.r(i2789[0], i2789[1], 0, i2788, 'sprite')
  i2788.m_Index = i2789[2]
  i2788.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2789[3], i2788.m_Metrics)
  i2788.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2789[4], i2788.m_GlyphRect)
  i2788.m_Scale = i2789[5]
  i2788.m_AtlasIndex = i2789[6]
  i2788.m_ClassDefinitionType = i2789[7]
  return i2788
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2790 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2791 = data
  var i2793 = i2791[0]
  var i2792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.add(request.d('TMPro.TMP_Style', i2793[i + 0]));
  }
  i2790.m_StyleList = i2792
  return i2790
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2796 = root || request.c( 'TMPro.TMP_Style' )
  var i2797 = data
  i2796.m_Name = i2797[0]
  i2796.m_HashCode = i2797[1]
  i2796.m_OpeningDefinition = i2797[2]
  i2796.m_ClosingDefinition = i2797[3]
  i2796.m_OpeningTagArray = i2797[4]
  i2796.m_ClosingTagArray = i2797[5]
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2799 = data
  var i2801 = i2799[0]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2801[i + 0]) );
  }
  i2798.files = i2800
  i2798.componentToPrefabIds = i2799[1]
  return i2798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2805 = data
  i2804.path = i2805[0]
  request.r(i2805[1], i2805[2], 0, i2804, 'unityObject')
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2807 = data
  var i2809 = i2807[0]
  var i2808 = []
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2809[i + 0]) );
  }
  i2806.scriptsExecutionOrder = i2808
  var i2811 = i2807[1]
  var i2810 = []
  for(var i = 0; i < i2811.length; i += 1) {
    i2810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2811[i + 0]) );
  }
  i2806.sortingLayers = i2810
  var i2813 = i2807[2]
  var i2812 = []
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2813[i + 0]) );
  }
  i2806.cullingLayers = i2812
  i2806.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2807[3], i2806.timeSettings)
  i2806.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2807[4], i2806.physicsSettings)
  i2806.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2807[5], i2806.physics2DSettings)
  i2806.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2807[6], i2806.qualitySettings)
  i2806.enableRealtimeShadows = !!i2807[7]
  i2806.enableAutoInstancing = !!i2807[8]
  i2806.enableStaticBatching = !!i2807[9]
  i2806.enableDynamicBatching = !!i2807[10]
  i2806.lightmapEncodingQuality = i2807[11]
  i2806.desiredColorSpace = i2807[12]
  var i2815 = i2807[13]
  var i2814 = []
  for(var i = 0; i < i2815.length; i += 1) {
    i2814.push( i2815[i + 0] );
  }
  i2806.allTags = i2814
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2819 = data
  i2818.name = i2819[0]
  i2818.value = i2819[1]
  return i2818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2823 = data
  i2822.id = i2823[0]
  i2822.name = i2823[1]
  i2822.value = i2823[2]
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2827 = data
  i2826.id = i2827[0]
  i2826.name = i2827[1]
  return i2826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2829 = data
  i2828.fixedDeltaTime = i2829[0]
  i2828.maximumDeltaTime = i2829[1]
  i2828.timeScale = i2829[2]
  i2828.maximumParticleTimestep = i2829[3]
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2831 = data
  i2830.gravity = new pc.Vec3( i2831[0], i2831[1], i2831[2] )
  i2830.defaultSolverIterations = i2831[3]
  i2830.bounceThreshold = i2831[4]
  i2830.autoSyncTransforms = !!i2831[5]
  i2830.autoSimulation = !!i2831[6]
  var i2833 = i2831[7]
  var i2832 = []
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2833[i + 0]) );
  }
  i2830.collisionMatrix = i2832
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2837 = data
  i2836.enabled = !!i2837[0]
  i2836.layerId = i2837[1]
  i2836.otherLayerId = i2837[2]
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2839 = data
  request.r(i2839[0], i2839[1], 0, i2838, 'material')
  i2838.gravity = new pc.Vec2( i2839[2], i2839[3] )
  i2838.positionIterations = i2839[4]
  i2838.velocityIterations = i2839[5]
  i2838.velocityThreshold = i2839[6]
  i2838.maxLinearCorrection = i2839[7]
  i2838.maxAngularCorrection = i2839[8]
  i2838.maxTranslationSpeed = i2839[9]
  i2838.maxRotationSpeed = i2839[10]
  i2838.baumgarteScale = i2839[11]
  i2838.baumgarteTOIScale = i2839[12]
  i2838.timeToSleep = i2839[13]
  i2838.linearSleepTolerance = i2839[14]
  i2838.angularSleepTolerance = i2839[15]
  i2838.defaultContactOffset = i2839[16]
  i2838.autoSimulation = !!i2839[17]
  i2838.queriesHitTriggers = !!i2839[18]
  i2838.queriesStartInColliders = !!i2839[19]
  i2838.callbacksOnDisable = !!i2839[20]
  i2838.reuseCollisionCallbacks = !!i2839[21]
  i2838.autoSyncTransforms = !!i2839[22]
  var i2841 = i2839[23]
  var i2840 = []
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2841[i + 0]) );
  }
  i2838.collisionMatrix = i2840
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2845 = data
  i2844.enabled = !!i2845[0]
  i2844.layerId = i2845[1]
  i2844.otherLayerId = i2845[2]
  return i2844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2847 = data
  var i2849 = i2847[0]
  var i2848 = []
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2849[i + 0]) );
  }
  i2846.qualityLevels = i2848
  var i2851 = i2847[1]
  var i2850 = []
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.push( i2851[i + 0] );
  }
  i2846.names = i2850
  i2846.shadows = i2847[2]
  i2846.anisotropicFiltering = i2847[3]
  i2846.antiAliasing = i2847[4]
  i2846.lodBias = i2847[5]
  i2846.shadowCascades = i2847[6]
  i2846.shadowDistance = i2847[7]
  i2846.shadowmaskMode = i2847[8]
  i2846.shadowProjection = i2847[9]
  i2846.shadowResolution = i2847[10]
  i2846.softParticles = !!i2847[11]
  i2846.softVegetation = !!i2847[12]
  i2846.activeColorSpace = i2847[13]
  i2846.desiredColorSpace = i2847[14]
  i2846.masterTextureLimit = i2847[15]
  i2846.maxQueuedFrames = i2847[16]
  i2846.particleRaycastBudget = i2847[17]
  i2846.pixelLightCount = i2847[18]
  i2846.realtimeReflectionProbes = !!i2847[19]
  i2846.shadowCascade2Split = i2847[20]
  i2846.shadowCascade4Split = new pc.Vec3( i2847[21], i2847[22], i2847[23] )
  i2846.streamingMipmapsActive = !!i2847[24]
  i2846.vSyncCount = i2847[25]
  i2846.asyncUploadBufferSize = i2847[26]
  i2846.asyncUploadTimeSlice = i2847[27]
  i2846.billboardsFaceCameraPosition = !!i2847[28]
  i2846.shadowNearPlaneOffset = i2847[29]
  i2846.streamingMipmapsMemoryBudget = i2847[30]
  i2846.maximumLODLevel = i2847[31]
  i2846.streamingMipmapsAddAllCameras = !!i2847[32]
  i2846.streamingMipmapsMaxLevelReduction = i2847[33]
  i2846.streamingMipmapsRenderersPerFrame = i2847[34]
  i2846.resolutionScalingFixedDPIFactor = i2847[35]
  i2846.streamingMipmapsMaxFileIORequests = i2847[36]
  i2846.currentQualityLevel = i2847[37]
  return i2846
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2854 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2855 = data
  i2854.m_GlyphIndex = i2855[0]
  i2854.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2855[1], i2854.m_GlyphValueRecord)
  return i2854
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2856 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2857 = data
  i2856.m_XCoordinate = i2857[0]
  i2856.m_YCoordinate = i2857[1]
  return i2856
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2858 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2859 = data
  i2858.m_XPositionAdjustment = i2859[0]
  i2858.m_YPositionAdjustment = i2859[1]
  return i2858
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2860 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2861 = data
  i2860.xPlacement = i2861[0]
  i2860.yPlacement = i2861[1]
  i2860.xAdvance = i2861[2]
  i2860.yAdvance = i2861[3]
  return i2860
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2862 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2863 = data
  i2862.m_XPlacement = i2863[0]
  i2862.m_YPlacement = i2863[1]
  i2862.m_XAdvance = i2863[2]
  i2862.m_YAdvance = i2863[3]
  return i2862
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[77],"78":[28],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[87],"94":[87],"95":[87],"96":[87],"97":[87],"98":[87],"99":[87],"100":[28],"101":[102],"103":[104],"105":[104],"27":[13],"106":[57],"63":[20],"61":[107],"60":[20],"20":[107],"24":[20],"108":[20],"109":[107],"110":[107],"111":[107],"112":[13],"113":[16,13],"114":[102],"115":[16,13],"116":[25,102],"117":[102],"118":[102,119],"120":[80],"121":[87],"122":[123],"124":[125],"126":[5],"127":[28],"128":[129],"130":[51],"131":[27],"132":[13],"133":[102,13],"32":[13,16],"134":[13],"135":[16,13],"136":[102],"137":[16,13],"138":[13],"139":[140],"141":[140],"142":[140],"143":[13],"144":[13],"30":[27],"15":[16,13],"145":[13],"29":[27],"146":[13],"147":[13],"148":[13],"149":[13],"150":[13],"151":[13],"152":[13],"153":[13],"154":[13],"155":[16,13],"156":[13],"157":[13],"158":[13],"159":[13],"160":[16,13],"161":[13],"162":[51],"163":[51],"52":[51],"164":[51],"165":[28],"166":[28]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","WaterSplash","UnityEngine.SphereCollider","ItemDraggable","Paper","ItemMoveToTarget","UnityEngine.GameObject","ItemDragRaycastTarget","UnityEngine.Animator","ItemSound","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","InputManager","HandTutManager","Knife","ItemWithTrash","Item","SortChildByZPos","PhaseManager","ItemTypeDoneManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Ply_ToggleEvent","Sink","SinkBlock","UnityEngine.BoxCollider","UnityEngine.SpriteMask","UnityEngine.CapsuleCollider","CuttingBoard","ItemDragChildRotator","ItemClickable","OilFood","OilBrush","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BrushMaskUnit","UnityEngine.Collider","ItemDragSpriteMaskPainter","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","ItemStirring","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "32.7";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_Cookingdom_Lv66";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1772";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4977";

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

Deserializers.buildID = "99ecf8ce-28cf-43c7-9f20-9d5aab172484";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

