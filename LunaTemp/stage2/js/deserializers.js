var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2130 = root || request.c( 'UnityEngine.JointSpring' )
  var i2131 = data
  i2130.spring = i2131[0]
  i2130.damper = i2131[1]
  i2130.targetPosition = i2131[2]
  return i2130
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2132 = root || request.c( 'UnityEngine.JointMotor' )
  var i2133 = data
  i2132.m_TargetVelocity = i2133[0]
  i2132.m_Force = i2133[1]
  i2132.m_FreeSpin = i2133[2]
  return i2132
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2134 = root || request.c( 'UnityEngine.JointLimits' )
  var i2135 = data
  i2134.m_Min = i2135[0]
  i2134.m_Max = i2135[1]
  i2134.m_Bounciness = i2135[2]
  i2134.m_BounceMinVelocity = i2135[3]
  i2134.m_ContactDistance = i2135[4]
  i2134.minBounce = i2135[5]
  i2134.maxBounce = i2135[6]
  return i2134
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2136 = root || request.c( 'UnityEngine.JointDrive' )
  var i2137 = data
  i2136.m_PositionSpring = i2137[0]
  i2136.m_PositionDamper = i2137[1]
  i2136.m_MaximumForce = i2137[2]
  i2136.m_UseAcceleration = i2137[3]
  return i2136
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2138 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2139 = data
  i2138.m_Spring = i2139[0]
  i2138.m_Damper = i2139[1]
  return i2138
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2140 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2141 = data
  i2140.m_Limit = i2141[0]
  i2140.m_Bounciness = i2141[1]
  i2140.m_ContactDistance = i2141[2]
  return i2140
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2142 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2143 = data
  i2142.m_ExtremumSlip = i2143[0]
  i2142.m_ExtremumValue = i2143[1]
  i2142.m_AsymptoteSlip = i2143[2]
  i2142.m_AsymptoteValue = i2143[3]
  i2142.m_Stiffness = i2143[4]
  return i2142
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2144 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2145 = data
  i2144.m_LowerAngle = i2145[0]
  i2144.m_UpperAngle = i2145[1]
  return i2144
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2146 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2147 = data
  i2146.m_MotorSpeed = i2147[0]
  i2146.m_MaximumMotorTorque = i2147[1]
  return i2146
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2148 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2149 = data
  i2148.m_DampingRatio = i2149[0]
  i2148.m_Frequency = i2149[1]
  i2148.m_Angle = i2149[2]
  return i2148
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2150 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2151 = data
  i2150.m_LowerTranslation = i2151[0]
  i2150.m_UpperTranslation = i2151[1]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2152 = root || new pc.UnityMaterial()
  var i2153 = data
  i2152.name = i2153[0]
  request.r(i2153[1], i2153[2], 0, i2152, 'shader')
  i2152.renderQueue = i2153[3]
  i2152.enableInstancing = !!i2153[4]
  var i2155 = i2153[5]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2155[i + 0]) );
  }
  i2152.floatParameters = i2154
  var i2157 = i2153[6]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2157[i + 0]) );
  }
  i2152.colorParameters = i2156
  var i2159 = i2153[7]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2159[i + 0]) );
  }
  i2152.vectorParameters = i2158
  var i2161 = i2153[8]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 1) {
    i2160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2161[i + 0]) );
  }
  i2152.textureParameters = i2160
  var i2163 = i2153[9]
  var i2162 = []
  for(var i = 0; i < i2163.length; i += 1) {
    i2162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2163[i + 0]) );
  }
  i2152.materialFlags = i2162
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2167 = data
  i2166.name = i2167[0]
  i2166.value = i2167[1]
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2171 = data
  i2170.name = i2171[0]
  i2170.value = new pc.Color(i2171[1], i2171[2], i2171[3], i2171[4])
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2175 = data
  i2174.name = i2175[0]
  i2174.value = new pc.Vec4( i2175[1], i2175[2], i2175[3], i2175[4] )
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2179 = data
  i2178.name = i2179[0]
  request.r(i2179[1], i2179[2], 0, i2178, 'value')
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2183 = data
  i2182.name = i2183[0]
  i2182.enabled = !!i2183[1]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2185 = data
  i2184.name = i2185[0]
  i2184.width = i2185[1]
  i2184.height = i2185[2]
  i2184.mipmapCount = i2185[3]
  i2184.anisoLevel = i2185[4]
  i2184.filterMode = i2185[5]
  i2184.hdr = !!i2185[6]
  i2184.format = i2185[7]
  i2184.wrapMode = i2185[8]
  i2184.alphaIsTransparency = !!i2185[9]
  i2184.alphaSource = i2185[10]
  i2184.graphicsFormat = i2185[11]
  i2184.sRGBTexture = !!i2185[12]
  i2184.desiredColorSpace = i2185[13]
  i2184.wrapU = i2185[14]
  i2184.wrapV = i2185[15]
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2187 = data
  i2186.position = new pc.Vec3( i2187[0], i2187[1], i2187[2] )
  i2186.scale = new pc.Vec3( i2187[3], i2187[4], i2187[5] )
  i2186.rotation = new pc.Quat(i2187[6], i2187[7], i2187[8], i2187[9])
  return i2186
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i2188 = root || request.c( 'HeartEffect' )
  var i2189 = data
  i2188.defaultLifeTime = i2189[0]
  request.r(i2189[1], i2189[2], 0, i2188, 'tf')
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2191 = data
  i2190.color = new pc.Color(i2191[0], i2191[1], i2191[2], i2191[3])
  request.r(i2191[4], i2191[5], 0, i2190, 'sprite')
  i2190.flipX = !!i2191[6]
  i2190.flipY = !!i2191[7]
  i2190.drawMode = i2191[8]
  i2190.size = new pc.Vec2( i2191[9], i2191[10] )
  i2190.tileMode = i2191[11]
  i2190.adaptiveModeThreshold = i2191[12]
  i2190.maskInteraction = i2191[13]
  i2190.spriteSortPoint = i2191[14]
  i2190.enabled = !!i2191[15]
  request.r(i2191[16], i2191[17], 0, i2190, 'sharedMaterial')
  var i2193 = i2191[18]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 2) {
  request.r(i2193[i + 0], i2193[i + 1], 2, i2192, '')
  }
  i2190.sharedMaterials = i2192
  i2190.receiveShadows = !!i2191[19]
  i2190.shadowCastingMode = i2191[20]
  i2190.sortingLayerID = i2191[21]
  i2190.sortingOrder = i2191[22]
  i2190.lightmapIndex = i2191[23]
  i2190.lightmapSceneIndex = i2191[24]
  i2190.lightmapScaleOffset = new pc.Vec4( i2191[25], i2191[26], i2191[27], i2191[28] )
  i2190.lightProbeUsage = i2191[29]
  i2190.reflectionProbeUsage = i2191[30]
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2197 = data
  i2196.name = i2197[0]
  i2196.tagId = i2197[1]
  i2196.enabled = !!i2197[2]
  i2196.isStatic = !!i2197[3]
  i2196.layer = i2197[4]
  return i2196
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i2198 = root || request.c( 'HeartBreakEffect' )
  var i2199 = data
  i2198.defaultLifeTime = i2199[0]
  request.r(i2199[1], i2199[2], 0, i2198, 'tf')
  return i2198
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i2200 = root || request.c( 'BlinkEffect' )
  var i2201 = data
  request.r(i2201[0], i2201[1], 0, i2200, 'tf')
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2203 = data
  request.r(i2203[0], i2203[1], 0, i2202, 'mesh')
  i2202.meshCount = i2203[2]
  i2202.activeVertexStreamsCount = i2203[3]
  i2202.alignment = i2203[4]
  i2202.renderMode = i2203[5]
  i2202.sortMode = i2203[6]
  i2202.lengthScale = i2203[7]
  i2202.velocityScale = i2203[8]
  i2202.cameraVelocityScale = i2203[9]
  i2202.normalDirection = i2203[10]
  i2202.sortingFudge = i2203[11]
  i2202.minParticleSize = i2203[12]
  i2202.maxParticleSize = i2203[13]
  i2202.pivot = new pc.Vec3( i2203[14], i2203[15], i2203[16] )
  request.r(i2203[17], i2203[18], 0, i2202, 'trailMaterial')
  i2202.applyActiveColorSpace = !!i2203[19]
  i2202.enabled = !!i2203[20]
  request.r(i2203[21], i2203[22], 0, i2202, 'sharedMaterial')
  var i2205 = i2203[23]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 2) {
  request.r(i2205[i + 0], i2205[i + 1], 2, i2204, '')
  }
  i2202.sharedMaterials = i2204
  i2202.receiveShadows = !!i2203[24]
  i2202.shadowCastingMode = i2203[25]
  i2202.sortingLayerID = i2203[26]
  i2202.sortingOrder = i2203[27]
  i2202.lightmapIndex = i2203[28]
  i2202.lightmapSceneIndex = i2203[29]
  i2202.lightmapScaleOffset = new pc.Vec4( i2203[30], i2203[31], i2203[32], i2203[33] )
  i2202.lightProbeUsage = i2203[34]
  i2202.reflectionProbeUsage = i2203[35]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2207 = data
  i2206.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2207[0], i2206.main)
  i2206.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2207[1], i2206.colorBySpeed)
  i2206.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2207[2], i2206.colorOverLifetime)
  i2206.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2207[3], i2206.emission)
  i2206.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2207[4], i2206.rotationBySpeed)
  i2206.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2207[5], i2206.rotationOverLifetime)
  i2206.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2207[6], i2206.shape)
  i2206.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2207[7], i2206.sizeBySpeed)
  i2206.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2207[8], i2206.sizeOverLifetime)
  i2206.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2207[9], i2206.textureSheetAnimation)
  i2206.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2207[10], i2206.velocityOverLifetime)
  i2206.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2207[11], i2206.noise)
  i2206.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2207[12], i2206.inheritVelocity)
  i2206.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2207[13], i2206.forceOverLifetime)
  i2206.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2207[14], i2206.limitVelocityOverLifetime)
  i2206.useAutoRandomSeed = !!i2207[15]
  i2206.randomSeed = i2207[16]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2208 = root || new pc.ParticleSystemMain()
  var i2209 = data
  i2208.duration = i2209[0]
  i2208.loop = !!i2209[1]
  i2208.prewarm = !!i2209[2]
  i2208.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[3], i2208.startDelay)
  i2208.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[4], i2208.startLifetime)
  i2208.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[5], i2208.startSpeed)
  i2208.startSize3D = !!i2209[6]
  i2208.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[7], i2208.startSizeX)
  i2208.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[8], i2208.startSizeY)
  i2208.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[9], i2208.startSizeZ)
  i2208.startRotation3D = !!i2209[10]
  i2208.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[11], i2208.startRotationX)
  i2208.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[12], i2208.startRotationY)
  i2208.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[13], i2208.startRotationZ)
  i2208.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2209[14], i2208.startColor)
  i2208.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[15], i2208.gravityModifier)
  i2208.simulationSpace = i2209[16]
  request.r(i2209[17], i2209[18], 0, i2208, 'customSimulationSpace')
  i2208.simulationSpeed = i2209[19]
  i2208.useUnscaledTime = !!i2209[20]
  i2208.scalingMode = i2209[21]
  i2208.playOnAwake = !!i2209[22]
  i2208.maxParticles = i2209[23]
  i2208.emitterVelocityMode = i2209[24]
  i2208.stopAction = i2209[25]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2210 = root || new pc.MinMaxCurve()
  var i2211 = data
  i2210.mode = i2211[0]
  i2210.curveMin = new pc.AnimationCurve( { keys_flow: i2211[1] } )
  i2210.curveMax = new pc.AnimationCurve( { keys_flow: i2211[2] } )
  i2210.curveMultiplier = i2211[3]
  i2210.constantMin = i2211[4]
  i2210.constantMax = i2211[5]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2212 = root || new pc.MinMaxGradient()
  var i2213 = data
  i2212.mode = i2213[0]
  i2212.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2213[1], i2212.gradientMin)
  i2212.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2213[2], i2212.gradientMax)
  i2212.colorMin = new pc.Color(i2213[3], i2213[4], i2213[5], i2213[6])
  i2212.colorMax = new pc.Color(i2213[7], i2213[8], i2213[9], i2213[10])
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2215 = data
  i2214.mode = i2215[0]
  var i2217 = i2215[1]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2217[i + 0]) );
  }
  i2214.colorKeys = i2216
  var i2219 = i2215[2]
  var i2218 = []
  for(var i = 0; i < i2219.length; i += 1) {
    i2218.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2219[i + 0]) );
  }
  i2214.alphaKeys = i2218
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2220 = root || new pc.ParticleSystemColorBySpeed()
  var i2221 = data
  i2220.enabled = !!i2221[0]
  i2220.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2221[1], i2220.color)
  i2220.range = new pc.Vec2( i2221[2], i2221[3] )
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2225 = data
  i2224.color = new pc.Color(i2225[0], i2225[1], i2225[2], i2225[3])
  i2224.time = i2225[4]
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2229 = data
  i2228.alpha = i2229[0]
  i2228.time = i2229[1]
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2230 = root || new pc.ParticleSystemColorOverLifetime()
  var i2231 = data
  i2230.enabled = !!i2231[0]
  i2230.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2231[1], i2230.color)
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2232 = root || new pc.ParticleSystemEmitter()
  var i2233 = data
  i2232.enabled = !!i2233[0]
  i2232.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[1], i2232.rateOverTime)
  i2232.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[2], i2232.rateOverDistance)
  var i2235 = i2233[3]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 1) {
    i2234.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2235[i + 0]) );
  }
  i2232.bursts = i2234
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2238 = root || new pc.ParticleSystemBurst()
  var i2239 = data
  i2238.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2239[0], i2238.count)
  i2238.cycleCount = i2239[1]
  i2238.minCount = i2239[2]
  i2238.maxCount = i2239[3]
  i2238.repeatInterval = i2239[4]
  i2238.time = i2239[5]
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2240 = root || new pc.ParticleSystemRotationBySpeed()
  var i2241 = data
  i2240.enabled = !!i2241[0]
  i2240.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2241[1], i2240.x)
  i2240.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2241[2], i2240.y)
  i2240.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2241[3], i2240.z)
  i2240.separateAxes = !!i2241[4]
  i2240.range = new pc.Vec2( i2241[5], i2241[6] )
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2242 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2243 = data
  i2242.enabled = !!i2243[0]
  i2242.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2243[1], i2242.x)
  i2242.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2243[2], i2242.y)
  i2242.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2243[3], i2242.z)
  i2242.separateAxes = !!i2243[4]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2244 = root || new pc.ParticleSystemShape()
  var i2245 = data
  i2244.enabled = !!i2245[0]
  i2244.shapeType = i2245[1]
  i2244.randomDirectionAmount = i2245[2]
  i2244.sphericalDirectionAmount = i2245[3]
  i2244.randomPositionAmount = i2245[4]
  i2244.alignToDirection = !!i2245[5]
  i2244.radius = i2245[6]
  i2244.radiusMode = i2245[7]
  i2244.radiusSpread = i2245[8]
  i2244.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[9], i2244.radiusSpeed)
  i2244.radiusThickness = i2245[10]
  i2244.angle = i2245[11]
  i2244.length = i2245[12]
  i2244.boxThickness = new pc.Vec3( i2245[13], i2245[14], i2245[15] )
  i2244.meshShapeType = i2245[16]
  request.r(i2245[17], i2245[18], 0, i2244, 'mesh')
  request.r(i2245[19], i2245[20], 0, i2244, 'meshRenderer')
  request.r(i2245[21], i2245[22], 0, i2244, 'skinnedMeshRenderer')
  i2244.useMeshMaterialIndex = !!i2245[23]
  i2244.meshMaterialIndex = i2245[24]
  i2244.useMeshColors = !!i2245[25]
  i2244.normalOffset = i2245[26]
  i2244.arc = i2245[27]
  i2244.arcMode = i2245[28]
  i2244.arcSpread = i2245[29]
  i2244.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[30], i2244.arcSpeed)
  i2244.donutRadius = i2245[31]
  i2244.position = new pc.Vec3( i2245[32], i2245[33], i2245[34] )
  i2244.rotation = new pc.Vec3( i2245[35], i2245[36], i2245[37] )
  i2244.scale = new pc.Vec3( i2245[38], i2245[39], i2245[40] )
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2246 = root || new pc.ParticleSystemSizeBySpeed()
  var i2247 = data
  i2246.enabled = !!i2247[0]
  i2246.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2247[1], i2246.x)
  i2246.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2247[2], i2246.y)
  i2246.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2247[3], i2246.z)
  i2246.separateAxes = !!i2247[4]
  i2246.range = new pc.Vec2( i2247[5], i2247[6] )
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2248 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2249 = data
  i2248.enabled = !!i2249[0]
  i2248.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[1], i2248.x)
  i2248.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[2], i2248.y)
  i2248.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[3], i2248.z)
  i2248.separateAxes = !!i2249[4]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2250 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2251 = data
  i2250.enabled = !!i2251[0]
  i2250.mode = i2251[1]
  i2250.animation = i2251[2]
  i2250.numTilesX = i2251[3]
  i2250.numTilesY = i2251[4]
  i2250.useRandomRow = !!i2251[5]
  i2250.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[6], i2250.frameOverTime)
  i2250.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[7], i2250.startFrame)
  i2250.cycleCount = i2251[8]
  i2250.rowIndex = i2251[9]
  i2250.flipU = i2251[10]
  i2250.flipV = i2251[11]
  i2250.spriteCount = i2251[12]
  var i2253 = i2251[13]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 2) {
  request.r(i2253[i + 0], i2253[i + 1], 2, i2252, '')
  }
  i2250.sprites = i2252
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2256 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2257 = data
  i2256.enabled = !!i2257[0]
  i2256.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[1], i2256.x)
  i2256.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[2], i2256.y)
  i2256.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[3], i2256.z)
  i2256.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[4], i2256.radial)
  i2256.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[5], i2256.speedModifier)
  i2256.space = i2257[6]
  i2256.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[7], i2256.orbitalX)
  i2256.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[8], i2256.orbitalY)
  i2256.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[9], i2256.orbitalZ)
  i2256.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[10], i2256.orbitalOffsetX)
  i2256.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[11], i2256.orbitalOffsetY)
  i2256.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[12], i2256.orbitalOffsetZ)
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2258 = root || new pc.ParticleSystemNoise()
  var i2259 = data
  i2258.enabled = !!i2259[0]
  i2258.separateAxes = !!i2259[1]
  i2258.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2259[2], i2258.strengthX)
  i2258.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2259[3], i2258.strengthY)
  i2258.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2259[4], i2258.strengthZ)
  i2258.frequency = i2259[5]
  i2258.damping = !!i2259[6]
  i2258.octaveCount = i2259[7]
  i2258.octaveMultiplier = i2259[8]
  i2258.octaveScale = i2259[9]
  i2258.quality = i2259[10]
  i2258.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2259[11], i2258.scrollSpeed)
  i2258.scrollSpeedMultiplier = i2259[12]
  i2258.remapEnabled = !!i2259[13]
  i2258.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2259[14], i2258.remapX)
  i2258.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2259[15], i2258.remapY)
  i2258.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2259[16], i2258.remapZ)
  i2258.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2259[17], i2258.positionAmount)
  i2258.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2259[18], i2258.rotationAmount)
  i2258.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2259[19], i2258.sizeAmount)
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2260 = root || new pc.ParticleSystemInheritVelocity()
  var i2261 = data
  i2260.enabled = !!i2261[0]
  i2260.mode = i2261[1]
  i2260.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[2], i2260.curve)
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2262 = root || new pc.ParticleSystemForceOverLifetime()
  var i2263 = data
  i2262.enabled = !!i2263[0]
  i2262.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[1], i2262.x)
  i2262.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[2], i2262.y)
  i2262.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[3], i2262.z)
  i2262.space = i2263[4]
  i2262.randomized = !!i2263[5]
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2264 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2265 = data
  i2264.enabled = !!i2265[0]
  i2264.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[1], i2264.limit)
  i2264.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[2], i2264.limitX)
  i2264.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[3], i2264.limitY)
  i2264.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[4], i2264.limitZ)
  i2264.dampen = i2265[5]
  i2264.separateAxes = !!i2265[6]
  i2264.space = i2265[7]
  i2264.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[8], i2264.drag)
  i2264.multiplyDragByParticleSize = !!i2265[9]
  i2264.multiplyDragByParticleVelocity = !!i2265[10]
  return i2264
}

Deserializers["StarExploreFX"] = function (request, data, root) {
  var i2266 = root || request.c( 'StarExploreFX' )
  var i2267 = data
  request.r(i2267[0], i2267[1], 0, i2266, 'tf')
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2269 = data
  i2268.pivot = new pc.Vec2( i2269[0], i2269[1] )
  i2268.anchorMin = new pc.Vec2( i2269[2], i2269[3] )
  i2268.anchorMax = new pc.Vec2( i2269[4], i2269[5] )
  i2268.sizeDelta = new pc.Vec2( i2269[6], i2269[7] )
  i2268.anchoredPosition3D = new pc.Vec3( i2269[8], i2269[9], i2269[10] )
  i2268.rotation = new pc.Quat(i2269[11], i2269[12], i2269[13], i2269[14])
  i2268.scale = new pc.Vec3( i2269[15], i2269[16], i2269[17] )
  return i2268
}

Deserializers["ClockTimer"] = function (request, data, root) {
  var i2270 = root || request.c( 'ClockTimer' )
  var i2271 = data
  request.r(i2271[0], i2271[1], 0, i2270, 'fillImage')
  request.r(i2271[2], i2271[3], 0, i2270, 'tf')
  i2270.spawnZoomDuration = i2271[4]
  i2270.despawnZoomDuration = i2271[5]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2273 = data
  i2272.cullTransparentMesh = !!i2273[0]
  return i2272
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2274 = root || request.c( 'UnityEngine.UI.Image' )
  var i2275 = data
  request.r(i2275[0], i2275[1], 0, i2274, 'm_Sprite')
  i2274.m_Type = i2275[2]
  i2274.m_PreserveAspect = !!i2275[3]
  i2274.m_FillCenter = !!i2275[4]
  i2274.m_FillMethod = i2275[5]
  i2274.m_FillAmount = i2275[6]
  i2274.m_FillClockwise = !!i2275[7]
  i2274.m_FillOrigin = i2275[8]
  i2274.m_UseSpriteMesh = !!i2275[9]
  i2274.m_PixelsPerUnitMultiplier = i2275[10]
  request.r(i2275[11], i2275[12], 0, i2274, 'm_Material')
  i2274.m_Maskable = !!i2275[13]
  i2274.m_Color = new pc.Color(i2275[14], i2275[15], i2275[16], i2275[17])
  i2274.m_RaycastTarget = !!i2275[18]
  i2274.m_RaycastPadding = new pc.Vec4( i2275[19], i2275[20], i2275[21], i2275[22] )
  return i2274
}

Deserializers["WaterSplash"] = function (request, data, root) {
  var i2276 = root || request.c( 'WaterSplash' )
  var i2277 = data
  request.r(i2277[0], i2277[1], 0, i2276, 'tf')
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2279 = data
  i2278.center = new pc.Vec3( i2279[0], i2279[1], i2279[2] )
  i2278.radius = i2279[3]
  i2278.enabled = !!i2279[4]
  i2278.isTrigger = !!i2279[5]
  request.r(i2279[6], i2279[7], 0, i2278, 'material')
  return i2278
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i2280 = root || request.c( 'ItemDraggable' )
  var i2281 = data
  i2280.isDraggable = !!i2281[0]
  request.r(i2281[1], i2281[2], 0, i2280, 'returnTransform')
  i2280.setParentToReturnTransform = !!i2281[3]
  i2280.returnToStartOnDragFailed = !!i2281[4]
  i2280.returnToExactReturnTransformPosition = !!i2281[5]
  i2280.cacheStartPosWhenStart = !!i2281[6]
  i2280.targetItemType = i2281[7]
  request.r(i2281[8], i2281[9], 0, i2280, 'item')
  i2280.checkState = !!i2281[10]
  request.r(i2281[11], i2281[12], 0, i2280, 'shadowObject')
  i2280.playReturnToStartFinishSound = !!i2281[13]
  i2280.returnToStartFinishFxType = i2281[14]
  i2280.spawnBreakHeartOnDropFail = !!i2281[15]
  i2280.playBeginDragSound = !!i2281[16]
  i2280.beginDragFxType = i2281[17]
  i2280.liftOffset = i2281[18]
  i2280.dragScaleMultiplier = i2281[19]
  i2280.dragScaleDuration = i2281[20]
  i2280.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i2281[21], i2280.onBeginDrag)
  i2280.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i2281[22], i2280.onDropSuccess)
  i2280.onDropFail = request.d('UnityEngine.Events.UnityEvent', i2281[23], i2280.onDropFail)
  i2280.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i2281[24], i2280.onReturnToStartComplete)
  return i2280
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2282 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2283 = data
  i2282.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2283[0], i2282.m_PersistentCalls)
  return i2282
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2285 = data
  var i2287 = i2285[0]
  var i2286 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.add(request.d('UnityEngine.Events.PersistentCall', i2287[i + 0]));
  }
  i2284.m_Calls = i2286
  return i2284
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2290 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2291 = data
  request.r(i2291[0], i2291[1], 0, i2290, 'm_Target')
  i2290.m_TargetAssemblyTypeName = i2291[2]
  i2290.m_MethodName = i2291[3]
  i2290.m_Mode = i2291[4]
  i2290.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2291[5], i2290.m_Arguments)
  i2290.m_CallState = i2291[6]
  return i2290
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2292 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2293 = data
  request.r(i2293[0], i2293[1], 0, i2292, 'm_ObjectArgument')
  i2292.m_ObjectArgumentAssemblyTypeName = i2293[2]
  i2292.m_IntArgument = i2293[3]
  i2292.m_FloatArgument = i2293[4]
  i2292.m_StringArgument = i2293[5]
  i2292.m_BoolArgument = !!i2293[6]
  return i2292
}

Deserializers["ItemMoveToTarget"] = function (request, data, root) {
  var i2294 = root || request.c( 'ItemMoveToTarget' )
  var i2295 = data
  request.r(i2295[0], i2295[1], 0, i2294, 'defaultTarget')
  i2294.duration = i2295[2]
  i2294.useAnimationCurve = !!i2295[3]
  i2294.moveCurve = new pc.AnimationCurve( { keys_flow: i2295[4] } )
  i2294.easeType = i2295[5]
  i2294.moveType = i2295[6]
  i2294.jumpPower = i2295[7]
  i2294.numJumps = i2295[8]
  i2294.rotate360DuringJump = !!i2295[9]
  i2294.flipRotate = !!i2295[10]
  i2294.angleRotate = i2295[11]
  i2294.scaleOnMove = !!i2295[12]
  i2294.endScaleMultiplier = i2295[13]
  i2294.setParentToTarget = !!i2295[14]
  i2294.onComplete = request.d('UnityEngine.Events.UnityEvent', i2295[15], i2294.onComplete)
  i2294.lockInputWhileMoving = !!i2295[16]
  i2294.resetParentBeforeMove = !!i2295[17]
  return i2294
}

Deserializers["Paper"] = function (request, data, root) {
  var i2296 = root || request.c( 'Paper' )
  var i2297 = data
  i2296.isUse = !!i2297[0]
  request.r(i2297[1], i2297[2], 0, i2296, 'paper')
  request.r(i2297[3], i2297[4], 0, i2296, 'paperTrash')
  request.r(i2297[5], i2297[6], 0, i2296, 'itemDragRaycastTarget')
  request.r(i2297[7], i2297[8], 0, i2296, 'curentCollider')
  i2296.isDone = !!i2297[9]
  i2296.onProcess = !!i2297[10]
  i2296.requireMatchingTargetTypeForHandTut = !!i2297[11]
  request.r(i2297[12], i2297[13], 0, i2296, 'itemDraggable')
  request.r(i2297[14], i2297[15], 0, i2296, 'itemClickable')
  request.r(i2297[16], i2297[17], 0, i2296, 'itemStirring')
  request.r(i2297[18], i2297[19], 0, i2296, 'itemKnifeSpriteMaskCutter')
  request.r(i2297[20], i2297[21], 0, i2296, 'itemSpriteMaskPainter')
  request.r(i2297[22], i2297[23], 0, i2296, 'itemDragSpriteMaskPainter')
  request.r(i2297[24], i2297[25], 0, i2296, 'itemMoveToTarget')
  request.r(i2297[26], i2297[27], 0, i2296, 'animator')
  i2296.itemType = i2297[28]
  request.r(i2297[29], i2297[30], 0, i2296, 'spriteRenderer')
  i2296.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2297[31], i2296.onKnifeIn)
  request.r(i2297[32], i2297[33], 0, i2296, 'knifePos')
  i2296.heartEffectScale = i2297[34]
  i2296.breakHeartEffectScale = i2297[35]
  i2296.blinkEffectScale = i2297[36]
  i2296.mergeEffectScale = i2297[37]
  i2296.playMoveToTargetFinishSound = !!i2297[38]
  i2296.moveToTargetFinishFxType = i2297[39]
  i2296.fxSpawnZPos = i2297[40]
  request.r(i2297[41], i2297[42], 0, i2296, 'tf')
  return i2296
}

Deserializers["ItemDragRaycastTarget"] = function (request, data, root) {
  var i2298 = root || request.c( 'ItemDragRaycastTarget' )
  var i2299 = data
  i2298.targetToFind = i2299[0]
  i2298.targetItemTypeWhenHit = i2299[1]
  i2298.targetItemTypeOnDropFail = i2299[2]
  request.r(i2299[3], i2299[4], 0, i2298, 'raycastPoint')
  i2298.targetLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2299[5] )
  i2298.rayDistance = i2299[6]
  i2298.updateMoveDefaultTarget = !!i2299[7]
  i2298.invokeOnlyWhenTargetChanged = !!i2299[8]
  i2298.targetChangeEnabled = !!i2299[9]
  i2298.restoreTargetOnDropFail = !!i2299[10]
  i2298.resetCurrentTargetOnNoHit = !!i2299[11]
  i2298.onTargetFound = request.d('UnityEngine.Events.UnityEvent', i2299[12], i2298.onTargetFound)
  i2298.onTargetFoundWithItem = request.d('ItemRaycastTargetEvent', i2299[13], i2298.onTargetFoundWithItem)
  return i2298
}

Deserializers["ItemRaycastTargetEvent"] = function (request, data, root) {
  var i2300 = root || request.c( 'ItemRaycastTargetEvent' )
  var i2301 = data
  i2300.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2301[0], i2300.m_PersistentCalls)
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2303 = data
  request.r(i2303[0], i2303[1], 0, i2302, 'animatorController')
  request.r(i2303[2], i2303[3], 0, i2302, 'avatar')
  i2302.updateMode = i2303[4]
  i2302.hasTransformHierarchy = !!i2303[5]
  i2302.applyRootMotion = !!i2303[6]
  var i2305 = i2303[7]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 2) {
  request.r(i2305[i + 0], i2305[i + 1], 2, i2304, '')
  }
  i2302.humanBones = i2304
  i2302.enabled = !!i2303[8]
  return i2302
}

Deserializers["ItemSound"] = function (request, data, root) {
  var i2308 = root || request.c( 'ItemSound' )
  var i2309 = data
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2311 = data
  i2310.name = i2311[0]
  i2310.index = i2311[1]
  i2310.startup = !!i2311[2]
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2313 = data
  i2312.planeDistance = i2313[0]
  i2312.referencePixelsPerUnit = i2313[1]
  i2312.isFallbackOverlay = !!i2313[2]
  i2312.renderMode = i2313[3]
  i2312.renderOrder = i2313[4]
  i2312.sortingLayerName = i2313[5]
  i2312.sortingOrder = i2313[6]
  i2312.scaleFactor = i2313[7]
  request.r(i2313[8], i2313[9], 0, i2312, 'worldCamera')
  i2312.overrideSorting = !!i2313[10]
  i2312.pixelPerfect = !!i2313[11]
  i2312.targetDisplay = i2313[12]
  i2312.overridePixelPerfect = !!i2313[13]
  i2312.enabled = !!i2313[14]
  return i2312
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2314 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2315 = data
  i2314.m_UiScaleMode = i2315[0]
  i2314.m_ReferencePixelsPerUnit = i2315[1]
  i2314.m_ScaleFactor = i2315[2]
  i2314.m_ReferenceResolution = new pc.Vec2( i2315[3], i2315[4] )
  i2314.m_ScreenMatchMode = i2315[5]
  i2314.m_MatchWidthOrHeight = i2315[6]
  i2314.m_PhysicalUnit = i2315[7]
  i2314.m_FallbackScreenDPI = i2315[8]
  i2314.m_DefaultSpriteDPI = i2315[9]
  i2314.m_DynamicPixelsPerUnit = i2315[10]
  i2314.m_PresetInfoIsWorld = !!i2315[11]
  return i2314
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2316 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2317 = data
  i2316.m_IgnoreReversedGraphics = !!i2317[0]
  i2316.m_BlockingObjects = i2317[1]
  i2316.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2317[2] )
  return i2316
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2318 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2319 = data
  i2318.m_hasFontAssetChanged = !!i2319[0]
  request.r(i2319[1], i2319[2], 0, i2318, 'm_baseMaterial')
  i2318.m_maskOffset = new pc.Vec4( i2319[3], i2319[4], i2319[5], i2319[6] )
  i2318.m_text = i2319[7]
  i2318.m_isRightToLeft = !!i2319[8]
  request.r(i2319[9], i2319[10], 0, i2318, 'm_fontAsset')
  request.r(i2319[11], i2319[12], 0, i2318, 'm_sharedMaterial')
  var i2321 = i2319[13]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 2) {
  request.r(i2321[i + 0], i2321[i + 1], 2, i2320, '')
  }
  i2318.m_fontSharedMaterials = i2320
  request.r(i2319[14], i2319[15], 0, i2318, 'm_fontMaterial')
  var i2323 = i2319[16]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 2) {
  request.r(i2323[i + 0], i2323[i + 1], 2, i2322, '')
  }
  i2318.m_fontMaterials = i2322
  i2318.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2319[17], i2319[18], i2319[19], i2319[20])
  i2318.m_fontColor = new pc.Color(i2319[21], i2319[22], i2319[23], i2319[24])
  i2318.m_enableVertexGradient = !!i2319[25]
  i2318.m_colorMode = i2319[26]
  i2318.m_fontColorGradient = request.d('TMPro.VertexGradient', i2319[27], i2318.m_fontColorGradient)
  request.r(i2319[28], i2319[29], 0, i2318, 'm_fontColorGradientPreset')
  request.r(i2319[30], i2319[31], 0, i2318, 'm_spriteAsset')
  i2318.m_tintAllSprites = !!i2319[32]
  request.r(i2319[33], i2319[34], 0, i2318, 'm_StyleSheet')
  i2318.m_TextStyleHashCode = i2319[35]
  i2318.m_overrideHtmlColors = !!i2319[36]
  i2318.m_faceColor = UnityEngine.Color32.ConstructColor(i2319[37], i2319[38], i2319[39], i2319[40])
  i2318.m_fontSize = i2319[41]
  i2318.m_fontSizeBase = i2319[42]
  i2318.m_fontWeight = i2319[43]
  i2318.m_enableAutoSizing = !!i2319[44]
  i2318.m_fontSizeMin = i2319[45]
  i2318.m_fontSizeMax = i2319[46]
  i2318.m_fontStyle = i2319[47]
  i2318.m_HorizontalAlignment = i2319[48]
  i2318.m_VerticalAlignment = i2319[49]
  i2318.m_textAlignment = i2319[50]
  i2318.m_characterSpacing = i2319[51]
  i2318.m_wordSpacing = i2319[52]
  i2318.m_lineSpacing = i2319[53]
  i2318.m_lineSpacingMax = i2319[54]
  i2318.m_paragraphSpacing = i2319[55]
  i2318.m_charWidthMaxAdj = i2319[56]
  i2318.m_TextWrappingMode = i2319[57]
  i2318.m_wordWrappingRatios = i2319[58]
  i2318.m_overflowMode = i2319[59]
  request.r(i2319[60], i2319[61], 0, i2318, 'm_linkedTextComponent')
  request.r(i2319[62], i2319[63], 0, i2318, 'parentLinkedComponent')
  i2318.m_enableKerning = !!i2319[64]
  var i2325 = i2319[65]
  var i2324 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.add(i2325[i + 0]);
  }
  i2318.m_ActiveFontFeatures = i2324
  i2318.m_enableExtraPadding = !!i2319[66]
  i2318.checkPaddingRequired = !!i2319[67]
  i2318.m_isRichText = !!i2319[68]
  i2318.m_parseCtrlCharacters = !!i2319[69]
  i2318.m_isOrthographic = !!i2319[70]
  i2318.m_isCullingEnabled = !!i2319[71]
  i2318.m_horizontalMapping = i2319[72]
  i2318.m_verticalMapping = i2319[73]
  i2318.m_uvLineOffset = i2319[74]
  i2318.m_geometrySortingOrder = i2319[75]
  i2318.m_IsTextObjectScaleStatic = !!i2319[76]
  i2318.m_VertexBufferAutoSizeReduction = !!i2319[77]
  i2318.m_useMaxVisibleDescender = !!i2319[78]
  i2318.m_pageToDisplay = i2319[79]
  i2318.m_margin = new pc.Vec4( i2319[80], i2319[81], i2319[82], i2319[83] )
  i2318.m_isUsingLegacyAnimationComponent = !!i2319[84]
  i2318.m_isVolumetricText = !!i2319[85]
  request.r(i2319[86], i2319[87], 0, i2318, 'm_Material')
  i2318.m_EmojiFallbackSupport = !!i2319[88]
  i2318.m_Maskable = !!i2319[89]
  i2318.m_Color = new pc.Color(i2319[90], i2319[91], i2319[92], i2319[93])
  i2318.m_RaycastTarget = !!i2319[94]
  i2318.m_RaycastPadding = new pc.Vec4( i2319[95], i2319[96], i2319[97], i2319[98] )
  return i2318
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2326 = root || request.c( 'TMPro.VertexGradient' )
  var i2327 = data
  i2326.topLeft = new pc.Color(i2327[0], i2327[1], i2327[2], i2327[3])
  i2326.topRight = new pc.Color(i2327[4], i2327[5], i2327[6], i2327[7])
  i2326.bottomLeft = new pc.Color(i2327[8], i2327[9], i2327[10], i2327[11])
  i2326.bottomRight = new pc.Color(i2327[12], i2327[13], i2327[14], i2327[15])
  return i2326
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.UI.Button' )
  var i2331 = data
  i2330.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2331[0], i2330.m_OnClick)
  i2330.m_Navigation = request.d('UnityEngine.UI.Navigation', i2331[1], i2330.m_Navigation)
  i2330.m_Transition = i2331[2]
  i2330.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2331[3], i2330.m_Colors)
  i2330.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2331[4], i2330.m_SpriteState)
  i2330.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2331[5], i2330.m_AnimationTriggers)
  i2330.m_Interactable = !!i2331[6]
  request.r(i2331[7], i2331[8], 0, i2330, 'm_TargetGraphic')
  return i2330
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2333 = data
  i2332.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2333[0], i2332.m_PersistentCalls)
  return i2332
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2334 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2335 = data
  i2334.m_Mode = i2335[0]
  i2334.m_WrapAround = !!i2335[1]
  request.r(i2335[2], i2335[3], 0, i2334, 'm_SelectOnUp')
  request.r(i2335[4], i2335[5], 0, i2334, 'm_SelectOnDown')
  request.r(i2335[6], i2335[7], 0, i2334, 'm_SelectOnLeft')
  request.r(i2335[8], i2335[9], 0, i2334, 'm_SelectOnRight')
  return i2334
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2336 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2337 = data
  i2336.m_NormalColor = new pc.Color(i2337[0], i2337[1], i2337[2], i2337[3])
  i2336.m_HighlightedColor = new pc.Color(i2337[4], i2337[5], i2337[6], i2337[7])
  i2336.m_PressedColor = new pc.Color(i2337[8], i2337[9], i2337[10], i2337[11])
  i2336.m_SelectedColor = new pc.Color(i2337[12], i2337[13], i2337[14], i2337[15])
  i2336.m_DisabledColor = new pc.Color(i2337[16], i2337[17], i2337[18], i2337[19])
  i2336.m_ColorMultiplier = i2337[20]
  i2336.m_FadeDuration = i2337[21]
  return i2336
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2338 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2339 = data
  request.r(i2339[0], i2339[1], 0, i2338, 'm_HighlightedSprite')
  request.r(i2339[2], i2339[3], 0, i2338, 'm_PressedSprite')
  request.r(i2339[4], i2339[5], 0, i2338, 'm_SelectedSprite')
  request.r(i2339[6], i2339[7], 0, i2338, 'm_DisabledSprite')
  return i2338
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2340 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2341 = data
  i2340.m_NormalTrigger = i2341[0]
  i2340.m_HighlightedTrigger = i2341[1]
  i2340.m_PressedTrigger = i2341[2]
  i2340.m_SelectedTrigger = i2341[3]
  i2340.m_DisabledTrigger = i2341[4]
  return i2340
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2342 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2343 = data
  request.r(i2343[0], i2343[1], 0, i2342, 'm_FillRect')
  request.r(i2343[2], i2343[3], 0, i2342, 'm_HandleRect')
  i2342.m_Direction = i2343[4]
  i2342.m_MinValue = i2343[5]
  i2342.m_MaxValue = i2343[6]
  i2342.m_WholeNumbers = !!i2343[7]
  i2342.m_Value = i2343[8]
  i2342.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2343[9], i2342.m_OnValueChanged)
  i2342.m_Navigation = request.d('UnityEngine.UI.Navigation', i2343[10], i2342.m_Navigation)
  i2342.m_Transition = i2343[11]
  i2342.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2343[12], i2342.m_Colors)
  i2342.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2343[13], i2342.m_SpriteState)
  i2342.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2343[14], i2342.m_AnimationTriggers)
  i2342.m_Interactable = !!i2343[15]
  request.r(i2343[16], i2343[17], 0, i2342, 'm_TargetGraphic')
  return i2342
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2344 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2345 = data
  i2344.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2345[0], i2344.m_PersistentCalls)
  return i2344
}

Deserializers["ProgressSlider"] = function (request, data, root) {
  var i2346 = root || request.c( 'ProgressSlider' )
  var i2347 = data
  request.r(i2347[0], i2347[1], 0, i2346, 'progressSlider')
  i2346.maxProgressItems = i2347[2]
  i2346.startProgressItems = i2347[3]
  request.r(i2347[4], i2347[5], 0, i2346, 'progressText')
  return i2346
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i2348 = root || request.c( 'Ply_Pool' )
  var i2349 = data
  var i2351 = i2349[0]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('Ply_Pool+PoolAmount', i2351[i + 0]) );
  }
  i2348.poolAmounts = i2350
  request.r(i2349[1], i2349[2], 0, i2348, 'poolHolder')
  return i2348
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i2354 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i2355 = data
  i2354.type = i2355[0]
  i2354.amount = i2355[1]
  request.r(i2355[2], i2355[3], 0, i2354, 'gameUnit')
  return i2354
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2356 = root || request.c( 'Ply_SoundManager' )
  var i2357 = data
  var i2359 = i2357[0]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 1) {
    i2358.push( request.d('Ply_SoundManager+FxAudio', i2359[i + 0]) );
  }
  i2356.fxAudios = i2358
  request.r(i2357[1], i2357[2], 0, i2356, 'sound')
  return i2356
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i2362 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i2363 = data
  i2362.fxType = i2363[0]
  request.r(i2363[1], i2363[2], 0, i2362, 'audioClip')
  i2362.volume = i2363[3]
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2365 = data
  request.r(i2365[0], i2365[1], 0, i2364, 'clip')
  request.r(i2365[2], i2365[3], 0, i2364, 'outputAudioMixerGroup')
  i2364.playOnAwake = !!i2365[4]
  i2364.loop = !!i2365[5]
  i2364.time = i2365[6]
  i2364.volume = i2365[7]
  i2364.pitch = i2365[8]
  i2364.enabled = !!i2365[9]
  return i2364
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2366 = root || request.c( 'GameManager' )
  var i2367 = data
  i2366.isPlaying = !!i2367[0]
  i2366.isTutorial = !!i2367[1]
  i2366.isGotoStore = !!i2367[2]
  i2366.isLoseGame = !!i2367[3]
  i2366.countMove = i2367[4]
  i2366.currentLayer = i2367[5]
  request.r(i2367[6], i2367[7], 0, i2366, 'trashCan')
  request.r(i2367[8], i2367[9], 0, i2366, 'clockTimerPrefab')
  request.r(i2367[10], i2367[11], 0, i2366, 'paperBox')
  return i2366
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2368 = root || request.c( 'UIManager' )
  var i2369 = data
  request.r(i2369[0], i2369[1], 0, i2368, 'winUI')
  request.r(i2369[2], i2369[3], 0, i2368, 'loseUI')
  request.r(i2369[4], i2369[5], 0, i2368, 'tutorial')
  request.r(i2369[6], i2369[7], 0, i2368, 'verticalUI')
  request.r(i2369[8], i2369[9], 0, i2368, 'horizontalUI')
  request.r(i2369[10], i2369[11], 0, i2368, 'downloadBtn')
  request.r(i2369[12], i2369[13], 0, i2368, 'horizontalDownloadBtn')
  request.r(i2369[14], i2369[15], 0, i2368, 'textAnim')
  i2368.isGoogleBuild = !!i2369[16]
  i2368.screenWidth = i2369[17]
  i2368.screenHeight = i2369[18]
  i2368.scaleHeightOnWidth = i2369[19]
  i2368.isVertical = !!i2369[20]
  i2368.isScreenVertical = !!i2369[21]
  request.r(i2369[22], i2369[23], 0, i2368, 'cam')
  i2368.verticalUIHeightOnWidthRatio = i2369[24]
  i2368.scaleCameraOnValidate = !!i2369[25]
  i2368.screenVerticalHeightOnWidthRatio = i2369[26]
  i2368.useContinuousScaling = !!i2369[27]
  i2368.baseOrthographicSize = i2369[28]
  i2368.baseAspect = i2369[29]
  i2368.landscapeSizeRatio = i2369[30]
  i2368.defaultPortraitSizeRatio = i2369[31]
  var i2371 = i2369[32]
  var i2370 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.add(request.d('ScreenScaleStep', i2371[i + 0]));
  }
  i2368.discreteScaleSteps = i2370
  i2368.usePerspectiveCamera = !!i2369[33]
  request.r(i2369[34], i2369[35], 0, i2368, 'perspectiveFocus')
  i2368.perspectiveFocusDistance = i2369[36]
  i2368.perspectivePadding = i2369[37]
  i2368.fitRendererBounds = !!i2369[38]
  request.r(i2369[39], i2369[40], 0, i2368, 'boundsRoot')
  var i2373 = i2369[41]
  var i2372 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i2373.length; i += 2) {
  request.r(i2373[i + 0], i2373[i + 1], 1, i2372, '')
  }
  i2368.boundsRenderers = i2372
  return i2368
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i2376 = root || request.c( 'ScreenScaleStep' )
  var i2377 = data
  i2376.heightOnWidthRatio = i2377[0]
  i2376.orthographicSize = i2377[1]
  return i2376
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2380 = root || request.c( 'InputManager' )
  var i2381 = data
  i2380.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2381[0] )
  i2380.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i2381[1] )
  i2380.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2381[2] )
  i2380.isDragging = !!i2381[3]
  return i2380
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i2382 = root || request.c( 'HandTutManager' )
  var i2383 = data
  var i2385 = i2383[0]
  var i2384 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2385.length; i += 2) {
  request.r(i2385[i + 0], i2385[i + 1], 1, i2384, '')
  }
  i2382.items = i2384
  request.r(i2383[1], i2383[2], 0, i2382, 'knife')
  request.r(i2383[3], i2383[4], 0, i2382, 'knife2')
  request.r(i2383[5], i2383[6], 0, i2382, 'handTutObject')
  request.r(i2383[7], i2383[8], 0, i2382, 'tapToCookObject')
  request.r(i2383[9], i2383[10], 0, i2382, 'oilItem')
  request.r(i2383[11], i2383[12], 0, i2382, 'stoveToggleEvent')
  request.r(i2383[13], i2383[14], 0, i2382, 'waterToggleEvent')
  request.r(i2383[15], i2383[16], 0, i2382, 'sinkBlock')
  var i2387 = i2383[17]
  var i2386 = new (System.Collections.Generic.List$1(Bridge.ns('InWaterItem')))
  for(var i = 0; i < i2387.length; i += 2) {
  request.r(i2387[i + 0], i2387[i + 1], 1, i2386, '')
  }
  i2382.itemsInWater = i2386
  i2382.noDelayItemCount = i2383[18]
  i2382.noDelayInList = !!i2383[19]
  i2382.breakHeartNoDelayThreshold = i2383[20]
  i2382.shortIdleDelay = i2383[21]
  i2382.maxHandTutShowCount = i2383[22]
  i2382.showSinkWaterTutorialOnStart = !!i2383[23]
  i2382.waitForBowlIntro = !!i2383[24]
  i2382.idleDelay = i2383[25]
  i2382.firstHandTutDelay = i2383[26]
  i2382.phaseHandTutDelay = i2383[27]
  i2382.moveDuration = i2383[28]
  i2382.dragFadeDuration = i2383[29]
  i2382.clickScaleDuration = i2383[30]
  i2382.waitAtEndDuration = i2383[31]
  i2382.handZPosition = i2383[32]
  i2382.clickScaleMultiplier = i2383[33]
  i2382.moveEase = i2383[34]
  i2382.currentDelayHandtut = i2383[35]
  i2382.isBreakingHeartNoDelay = !!i2383[36]
  i2382.tutoredItemCount = i2383[37]
  return i2382
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i2392 = root || request.c( 'PhaseManager' )
  var i2393 = data
  var i2395 = i2393[0]
  var i2394 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.add(request.d('PhaseData', i2395[i + 0]));
  }
  i2392.phases = i2394
  i2392.transitionType = i2393[1]
  i2392.transitionDuration = i2393[2]
  i2392.delayBeforeNextPhase = i2393[3]
  i2392.offScreenLeftX = i2393[4]
  i2392.offScreenRightX = i2393[5]
  i2392.offScreenBottomY = i2393[6]
  i2392.offScreenTopY = i2393[7]
  i2392.centerScreenX = i2393[8]
  request.r(i2393[9], i2393[10], 0, i2392, 'phaseTransitionObject')
  i2392.phaseTransitionObjectDuration = i2393[11]
  i2392.currentPhaseIndex = i2393[12]
  i2392.currentStepCount = i2393[13]
  i2392.isECPopup = !!i2393[14]
  return i2392
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i2398 = root || request.c( 'PhaseData' )
  var i2399 = data
  request.r(i2399[0], i2399[1], 0, i2398, 'phaseObject')
  i2398.totalSteps = i2399[2]
  i2398.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i2399[3], i2398.onPhaseReady)
  return i2398
}

Deserializers["ItemTypeDoneManager"] = function (request, data, root) {
  var i2400 = root || request.c( 'ItemTypeDoneManager' )
  var i2401 = data
  var i2403 = i2401[0]
  var i2402 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTypeDoneManager+ItemTypeGroup')))
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.add(request.d('ItemTypeDoneManager+ItemTypeGroup', i2403[i + 0]));
  }
  i2400.itemTypeGroups = i2402
  return i2400
}

Deserializers["ItemTypeDoneManager+ItemTypeGroup"] = function (request, data, root) {
  var i2406 = root || request.c( 'ItemTypeDoneManager+ItemTypeGroup' )
  var i2407 = data
  i2406.itemType = i2407[0]
  var i2409 = i2407[1]
  var i2408 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2409.length; i += 2) {
  request.r(i2409[i + 0], i2409[i + 1], 1, i2408, '')
  }
  i2406.items = i2408
  return i2406
}

Deserializers["OvenManager"] = function (request, data, root) {
  var i2410 = root || request.c( 'OvenManager' )
  var i2411 = data
  var i2413 = i2411[0]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 2) {
  request.r(i2413[i + 0], i2413[i + 1], 2, i2412, '')
  }
  i2410.foodOnPlates = i2412
  var i2415 = i2411[1]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 2) {
  request.r(i2415[i + 0], i2415[i + 1], 2, i2414, '')
  }
  i2410.ovenSlots = i2414
  var i2417 = i2411[2]
  var i2416 = []
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.push( request.d('FoodOnOvenType', i2417[i + 0]) );
  }
  i2410.foodOnOvenTypes = i2416
  i2410.foodJumpCountMax = i2411[3]
  i2410.activeFryingSounds = i2411[4]
  return i2410
}

Deserializers["FoodOnOvenType"] = function (request, data, root) {
  var i2424 = root || request.c( 'FoodOnOvenType' )
  var i2425 = data
  request.r(i2425[0], i2425[1], 0, i2424, 'food')
  var i2427 = i2425[2]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 2) {
  request.r(i2427[i + 0], i2427[i + 1], 2, i2426, '')
  }
  i2424.foodOnOvens = i2426
  i2424.itemType = i2425[3]
  i2424.delayTimeAppear = i2425[4]
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2431 = data
  i2430.aspect = i2431[0]
  i2430.orthographic = !!i2431[1]
  i2430.orthographicSize = i2431[2]
  i2430.backgroundColor = new pc.Color(i2431[3], i2431[4], i2431[5], i2431[6])
  i2430.nearClipPlane = i2431[7]
  i2430.farClipPlane = i2431[8]
  i2430.fieldOfView = i2431[9]
  i2430.depth = i2431[10]
  i2430.clearFlags = i2431[11]
  i2430.cullingMask = i2431[12]
  i2430.rect = i2431[13]
  request.r(i2431[14], i2431[15], 0, i2430, 'targetTexture')
  i2430.usePhysicalProperties = !!i2431[16]
  i2430.focalLength = i2431[17]
  i2430.sensorSize = new pc.Vec2( i2431[18], i2431[19] )
  i2430.lensShift = new pc.Vec2( i2431[20], i2431[21] )
  i2430.gateFit = i2431[22]
  i2430.commandBufferCount = i2431[23]
  i2430.cameraType = i2431[24]
  i2430.enabled = !!i2431[25]
  return i2430
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2432 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2433 = data
  request.r(i2433[0], i2433[1], 0, i2432, 'm_FirstSelected')
  i2432.m_sendNavigationEvents = !!i2433[2]
  i2432.m_DragThreshold = i2433[3]
  return i2432
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2434 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2435 = data
  i2434.m_HorizontalAxis = i2435[0]
  i2434.m_VerticalAxis = i2435[1]
  i2434.m_SubmitButton = i2435[2]
  i2434.m_CancelButton = i2435[3]
  i2434.m_InputActionsPerSecond = i2435[4]
  i2434.m_RepeatDelay = i2435[5]
  i2434.m_ForceModuleActive = !!i2435[6]
  i2434.m_SendPointerHoverToParent = !!i2435[7]
  return i2434
}

Deserializers["FoodOnPlate"] = function (request, data, root) {
  var i2436 = root || request.c( 'FoodOnPlate' )
  var i2437 = data
  i2436.isDone = !!i2437[0]
  i2436.onProcess = !!i2437[1]
  i2436.requireMatchingTargetTypeForHandTut = !!i2437[2]
  request.r(i2437[3], i2437[4], 0, i2436, 'itemDraggable')
  request.r(i2437[5], i2437[6], 0, i2436, 'itemClickable')
  request.r(i2437[7], i2437[8], 0, i2436, 'itemStirring')
  request.r(i2437[9], i2437[10], 0, i2436, 'itemKnifeSpriteMaskCutter')
  request.r(i2437[11], i2437[12], 0, i2436, 'itemSpriteMaskPainter')
  request.r(i2437[13], i2437[14], 0, i2436, 'itemDragSpriteMaskPainter')
  request.r(i2437[15], i2437[16], 0, i2436, 'itemMoveToTarget')
  request.r(i2437[17], i2437[18], 0, i2436, 'animator')
  i2436.itemType = i2437[19]
  request.r(i2437[20], i2437[21], 0, i2436, 'spriteRenderer')
  i2436.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2437[22], i2436.onKnifeIn)
  request.r(i2437[23], i2437[24], 0, i2436, 'knifePos')
  i2436.heartEffectScale = i2437[25]
  i2436.breakHeartEffectScale = i2437[26]
  i2436.blinkEffectScale = i2437[27]
  i2436.mergeEffectScale = i2437[28]
  i2436.playMoveToTargetFinishSound = !!i2437[29]
  i2436.moveToTargetFinishFxType = i2437[30]
  i2436.fxSpawnZPos = i2437[31]
  request.r(i2437[32], i2437[33], 0, i2436, 'tf')
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2439 = data
  i2438.center = new pc.Vec3( i2439[0], i2439[1], i2439[2] )
  i2438.size = new pc.Vec3( i2439[3], i2439[4], i2439[5] )
  i2438.enabled = !!i2439[6]
  i2438.isTrigger = !!i2439[7]
  request.r(i2439[8], i2439[9], 0, i2438, 'material')
  return i2438
}

Deserializers["OvenSlot"] = function (request, data, root) {
  var i2440 = root || request.c( 'OvenSlot' )
  var i2441 = data
  var i2443 = i2441[0]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 2) {
  request.r(i2443[i + 0], i2443[i + 1], 2, i2442, '')
  }
  i2440.clockPos1 = i2442
  var i2445 = i2441[1]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 2) {
  request.r(i2445[i + 0], i2445[i + 1], 2, i2444, '')
  }
  i2440.clockPos4 = i2444
  var i2447 = i2441[2]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 2) {
  request.r(i2447[i + 0], i2447[i + 1], 2, i2446, '')
  }
  i2440.clockPos6 = i2446
  var i2449 = i2441[3]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 2) {
  request.r(i2449[i + 0], i2449[i + 1], 2, i2448, '')
  }
  i2440.foodOnOvens = i2448
  i2440.isDone = !!i2441[4]
  i2440.onProcess = !!i2441[5]
  i2440.requireMatchingTargetTypeForHandTut = !!i2441[6]
  request.r(i2441[7], i2441[8], 0, i2440, 'itemDraggable')
  request.r(i2441[9], i2441[10], 0, i2440, 'itemClickable')
  request.r(i2441[11], i2441[12], 0, i2440, 'itemStirring')
  request.r(i2441[13], i2441[14], 0, i2440, 'itemKnifeSpriteMaskCutter')
  request.r(i2441[15], i2441[16], 0, i2440, 'itemSpriteMaskPainter')
  request.r(i2441[17], i2441[18], 0, i2440, 'itemDragSpriteMaskPainter')
  request.r(i2441[19], i2441[20], 0, i2440, 'itemMoveToTarget')
  request.r(i2441[21], i2441[22], 0, i2440, 'animator')
  i2440.itemType = i2441[23]
  request.r(i2441[24], i2441[25], 0, i2440, 'spriteRenderer')
  i2440.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2441[26], i2440.onKnifeIn)
  request.r(i2441[27], i2441[28], 0, i2440, 'knifePos')
  i2440.heartEffectScale = i2441[29]
  i2440.breakHeartEffectScale = i2441[30]
  i2440.blinkEffectScale = i2441[31]
  i2440.mergeEffectScale = i2441[32]
  i2440.playMoveToTargetFinishSound = !!i2441[33]
  i2440.moveToTargetFinishFxType = i2441[34]
  i2440.fxSpawnZPos = i2441[35]
  request.r(i2441[36], i2441[37], 0, i2440, 'tf')
  return i2440
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i2452 = root || request.c( 'ItemClickable' )
  var i2453 = data
  i2452.requiredClicks = i2453[0]
  i2452.infiniteClick = !!i2453[1]
  i2452.canClick = !!i2453[2]
  i2452.disableAfterClick = !!i2453[3]
  i2452.onClick = request.d('UnityEngine.Events.UnityEvent', i2453[4], i2452.onClick)
  var i2455 = i2453[5]
  var i2454 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.add(request.d('UnityEngine.Events.UnityEvent', i2455[i + 0]));
  }
  i2452.sequentialOnClicks = i2454
  i2452.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i2453[6], i2452.onClickComplete)
  return i2452
}

Deserializers["FoodOnOven"] = function (request, data, root) {
  var i2458 = root || request.c( 'FoodOnOven' )
  var i2459 = data
  request.r(i2459[0], i2459[1], 0, i2458, 'foodSpriteRenderer')
  var i2461 = i2459[2]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 2) {
  request.r(i2461[i + 0], i2461[i + 1], 2, i2460, '')
  }
  i2458.foodSprites = i2460
  i2458.currentFoodStateIndex = i2459[3]
  i2458.cookingDuration = i2459[4]
  request.r(i2459[5], i2459[6], 0, i2458, 'clockPos')
  request.r(i2459[7], i2459[8], 0, i2458, 'targetPlatePos')
  i2458.jumpPower = i2459[9]
  i2458.jumpDuration = i2459[10]
  i2458.numJumps = i2459[11]
  i2458.isDone = !!i2459[12]
  i2458.onProcess = !!i2459[13]
  i2458.requireMatchingTargetTypeForHandTut = !!i2459[14]
  request.r(i2459[15], i2459[16], 0, i2458, 'itemDraggable')
  request.r(i2459[17], i2459[18], 0, i2458, 'itemClickable')
  request.r(i2459[19], i2459[20], 0, i2458, 'itemStirring')
  request.r(i2459[21], i2459[22], 0, i2458, 'itemKnifeSpriteMaskCutter')
  request.r(i2459[23], i2459[24], 0, i2458, 'itemSpriteMaskPainter')
  request.r(i2459[25], i2459[26], 0, i2458, 'itemDragSpriteMaskPainter')
  request.r(i2459[27], i2459[28], 0, i2458, 'itemMoveToTarget')
  request.r(i2459[29], i2459[30], 0, i2458, 'animator')
  i2458.itemType = i2459[31]
  request.r(i2459[32], i2459[33], 0, i2458, 'spriteRenderer')
  i2458.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2459[34], i2458.onKnifeIn)
  request.r(i2459[35], i2459[36], 0, i2458, 'knifePos')
  i2458.heartEffectScale = i2459[37]
  i2458.breakHeartEffectScale = i2459[38]
  i2458.blinkEffectScale = i2459[39]
  i2458.mergeEffectScale = i2459[40]
  i2458.playMoveToTargetFinishSound = !!i2459[41]
  i2458.moveToTargetFinishFxType = i2459[42]
  i2458.fxSpawnZPos = i2459[43]
  request.r(i2459[44], i2459[45], 0, i2458, 'tf')
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2463 = data
  i2462.ambientIntensity = i2463[0]
  i2462.reflectionIntensity = i2463[1]
  i2462.ambientMode = i2463[2]
  i2462.ambientLight = new pc.Color(i2463[3], i2463[4], i2463[5], i2463[6])
  i2462.ambientSkyColor = new pc.Color(i2463[7], i2463[8], i2463[9], i2463[10])
  i2462.ambientGroundColor = new pc.Color(i2463[11], i2463[12], i2463[13], i2463[14])
  i2462.ambientEquatorColor = new pc.Color(i2463[15], i2463[16], i2463[17], i2463[18])
  i2462.fogColor = new pc.Color(i2463[19], i2463[20], i2463[21], i2463[22])
  i2462.fogEndDistance = i2463[23]
  i2462.fogStartDistance = i2463[24]
  i2462.fogDensity = i2463[25]
  i2462.fog = !!i2463[26]
  request.r(i2463[27], i2463[28], 0, i2462, 'skybox')
  i2462.fogMode = i2463[29]
  var i2465 = i2463[30]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2465[i + 0]) );
  }
  i2462.lightmaps = i2464
  i2462.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2463[31], i2462.lightProbes)
  i2462.lightmapsMode = i2463[32]
  i2462.mixedBakeMode = i2463[33]
  i2462.environmentLightingMode = i2463[34]
  i2462.ambientProbe = new pc.SphericalHarmonicsL2(i2463[35])
  i2462.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2463[36])
  i2462.useReferenceAmbientProbe = !!i2463[37]
  request.r(i2463[38], i2463[39], 0, i2462, 'customReflection')
  request.r(i2463[40], i2463[41], 0, i2462, 'defaultReflection')
  i2462.defaultReflectionMode = i2463[42]
  i2462.defaultReflectionResolution = i2463[43]
  i2462.sunLightObjectId = i2463[44]
  i2462.pixelLightCount = i2463[45]
  i2462.defaultReflectionHDR = !!i2463[46]
  i2462.hasLightDataAsset = !!i2463[47]
  i2462.hasManualGenerate = !!i2463[48]
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2469 = data
  request.r(i2469[0], i2469[1], 0, i2468, 'lightmapColor')
  request.r(i2469[2], i2469[3], 0, i2468, 'lightmapDirection')
  request.r(i2469[4], i2469[5], 0, i2468, 'shadowMask')
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2470 = root || new UnityEngine.LightProbes()
  var i2471 = data
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2479 = data
  var i2481 = i2479[0]
  var i2480 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2481[i + 0]));
  }
  i2478.ShaderCompilationErrors = i2480
  i2478.name = i2479[1]
  i2478.guid = i2479[2]
  var i2483 = i2479[3]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( i2483[i + 0] );
  }
  i2478.shaderDefinedKeywords = i2482
  var i2485 = i2479[4]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2485[i + 0]) );
  }
  i2478.passes = i2484
  var i2487 = i2479[5]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 1) {
    i2486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2487[i + 0]) );
  }
  i2478.usePasses = i2486
  var i2489 = i2479[6]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2489[i + 0]) );
  }
  i2478.defaultParameterValues = i2488
  request.r(i2479[7], i2479[8], 0, i2478, 'unityFallbackShader')
  i2478.readDepth = !!i2479[9]
  i2478.hasDepthOnlyPass = !!i2479[10]
  i2478.isCreatedByShaderGraph = !!i2479[11]
  i2478.disableBatching = !!i2479[12]
  i2478.compiled = !!i2479[13]
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2493 = data
  i2492.shaderName = i2493[0]
  i2492.errorMessage = i2493[1]
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2498 = root || new pc.UnityShaderPass()
  var i2499 = data
  i2498.id = i2499[0]
  i2498.subShaderIndex = i2499[1]
  i2498.name = i2499[2]
  i2498.passType = i2499[3]
  i2498.grabPassTextureName = i2499[4]
  i2498.usePass = !!i2499[5]
  i2498.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2499[6], i2498.zTest)
  i2498.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2499[7], i2498.zWrite)
  i2498.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2499[8], i2498.culling)
  i2498.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2499[9], i2498.blending)
  i2498.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2499[10], i2498.alphaBlending)
  i2498.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2499[11], i2498.colorWriteMask)
  i2498.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2499[12], i2498.offsetUnits)
  i2498.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2499[13], i2498.offsetFactor)
  i2498.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2499[14], i2498.stencilRef)
  i2498.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2499[15], i2498.stencilReadMask)
  i2498.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2499[16], i2498.stencilWriteMask)
  i2498.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2499[17], i2498.stencilOp)
  i2498.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2499[18], i2498.stencilOpFront)
  i2498.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2499[19], i2498.stencilOpBack)
  var i2501 = i2499[20]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2501[i + 0]) );
  }
  i2498.tags = i2500
  var i2503 = i2499[21]
  var i2502 = []
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.push( i2503[i + 0] );
  }
  i2498.passDefinedKeywords = i2502
  var i2505 = i2499[22]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2505[i + 0]) );
  }
  i2498.passDefinedKeywordGroups = i2504
  var i2507 = i2499[23]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2507[i + 0]) );
  }
  i2498.variants = i2506
  var i2509 = i2499[24]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2509[i + 0]) );
  }
  i2498.excludedVariants = i2508
  i2498.hasDepthReader = !!i2499[25]
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2511 = data
  i2510.val = i2511[0]
  i2510.name = i2511[1]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2513 = data
  i2512.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2513[0], i2512.src)
  i2512.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2513[1], i2512.dst)
  i2512.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2513[2], i2512.op)
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2515 = data
  i2514.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2515[0], i2514.pass)
  i2514.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2515[1], i2514.fail)
  i2514.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2515[2], i2514.zFail)
  i2514.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2515[3], i2514.comp)
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2519 = data
  i2518.name = i2519[0]
  i2518.value = i2519[1]
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2523 = data
  var i2525 = i2523[0]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( i2525[i + 0] );
  }
  i2522.keywords = i2524
  i2522.hasDiscard = !!i2523[1]
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2529 = data
  i2528.passId = i2529[0]
  i2528.subShaderIndex = i2529[1]
  var i2531 = i2529[2]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( i2531[i + 0] );
  }
  i2528.keywords = i2530
  i2528.vertexProgram = i2529[3]
  i2528.fragmentProgram = i2529[4]
  i2528.exportedForWebGl2 = !!i2529[5]
  i2528.readDepth = !!i2529[6]
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2535 = data
  request.r(i2535[0], i2535[1], 0, i2534, 'shader')
  i2534.pass = i2535[2]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2539 = data
  i2538.name = i2539[0]
  i2538.type = i2539[1]
  i2538.value = new pc.Vec4( i2539[2], i2539[3], i2539[4], i2539[5] )
  i2538.textureValue = i2539[6]
  i2538.shaderPropertyFlag = i2539[7]
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2541 = data
  i2540.name = i2541[0]
  request.r(i2541[1], i2541[2], 0, i2540, 'texture')
  i2540.aabb = i2541[3]
  i2540.vertices = i2541[4]
  i2540.triangles = i2541[5]
  i2540.textureRect = UnityEngine.Rect.MinMaxRect(i2541[6], i2541[7], i2541[8], i2541[9])
  i2540.packedRect = UnityEngine.Rect.MinMaxRect(i2541[10], i2541[11], i2541[12], i2541[13])
  i2540.border = new pc.Vec4( i2541[14], i2541[15], i2541[16], i2541[17] )
  i2540.transparency = i2541[18]
  i2540.bounds = i2541[19]
  i2540.pixelsPerUnit = i2541[20]
  i2540.textureWidth = i2541[21]
  i2540.textureHeight = i2541[22]
  i2540.nativeSize = new pc.Vec2( i2541[23], i2541[24] )
  i2540.pivot = new pc.Vec2( i2541[25], i2541[26] )
  i2540.textureRectOffset = new pc.Vec2( i2541[27], i2541[28] )
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2543 = data
  i2542.name = i2543[0]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2545 = data
  i2544.name = i2545[0]
  i2544.wrapMode = i2545[1]
  i2544.isLooping = !!i2545[2]
  i2544.length = i2545[3]
  var i2547 = i2545[4]
  var i2546 = []
  for(var i = 0; i < i2547.length; i += 1) {
    i2546.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2547[i + 0]) );
  }
  i2544.curves = i2546
  var i2549 = i2545[5]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2549[i + 0]) );
  }
  i2544.events = i2548
  i2544.halfPrecision = !!i2545[6]
  i2544._frameRate = i2545[7]
  i2544.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2545[8], i2544.localBounds)
  i2544.hasMuscleCurves = !!i2545[9]
  var i2551 = i2545[10]
  var i2550 = []
  for(var i = 0; i < i2551.length; i += 1) {
    i2550.push( i2551[i + 0] );
  }
  i2544.clipMuscleConstant = i2550
  i2544.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2545[11], i2544.clipBindingConstant)
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2555 = data
  i2554.path = i2555[0]
  i2554.hash = i2555[1]
  i2554.componentType = i2555[2]
  i2554.property = i2555[3]
  i2554.keys = i2555[4]
  var i2557 = i2555[5]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2557[i + 0]) );
  }
  i2554.objectReferenceKeys = i2556
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2561 = data
  i2560.time = i2561[0]
  request.r(i2561[1], i2561[2], 0, i2560, 'value')
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2565 = data
  i2564.functionName = i2565[0]
  i2564.floatParameter = i2565[1]
  i2564.intParameter = i2565[2]
  i2564.stringParameter = i2565[3]
  request.r(i2565[4], i2565[5], 0, i2564, 'objectReferenceParameter')
  i2564.time = i2565[6]
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2567 = data
  i2566.center = new pc.Vec3( i2567[0], i2567[1], i2567[2] )
  i2566.extends = new pc.Vec3( i2567[3], i2567[4], i2567[5] )
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2571 = data
  var i2573 = i2571[0]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( i2573[i + 0] );
  }
  i2570.genericBindings = i2572
  var i2575 = i2571[1]
  var i2574 = []
  for(var i = 0; i < i2575.length; i += 1) {
    i2574.push( i2575[i + 0] );
  }
  i2570.pptrCurveMapping = i2574
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2577 = data
  i2576.name = i2577[0]
  var i2579 = i2577[1]
  var i2578 = []
  for(var i = 0; i < i2579.length; i += 1) {
    i2578.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2579[i + 0]) );
  }
  i2576.layers = i2578
  var i2581 = i2577[2]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2581[i + 0]) );
  }
  i2576.parameters = i2580
  i2576.animationClips = i2577[3]
  i2576.avatarUnsupported = i2577[4]
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2585 = data
  i2584.name = i2585[0]
  i2584.defaultWeight = i2585[1]
  i2584.blendingMode = i2585[2]
  i2584.avatarMask = i2585[3]
  i2584.syncedLayerIndex = i2585[4]
  i2584.syncedLayerAffectsTiming = !!i2585[5]
  i2584.syncedLayers = i2585[6]
  i2584.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2585[7], i2584.stateMachine)
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2587 = data
  i2586.id = i2587[0]
  i2586.name = i2587[1]
  i2586.path = i2587[2]
  var i2589 = i2587[3]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2589[i + 0]) );
  }
  i2586.states = i2588
  var i2591 = i2587[4]
  var i2590 = []
  for(var i = 0; i < i2591.length; i += 1) {
    i2590.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2591[i + 0]) );
  }
  i2586.machines = i2590
  var i2593 = i2587[5]
  var i2592 = []
  for(var i = 0; i < i2593.length; i += 1) {
    i2592.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2593[i + 0]) );
  }
  i2586.entryStateTransitions = i2592
  var i2595 = i2587[6]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2595[i + 0]) );
  }
  i2586.exitStateTransitions = i2594
  var i2597 = i2587[7]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2597[i + 0]) );
  }
  i2586.anyStateTransitions = i2596
  i2586.defaultStateId = i2587[8]
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2601 = data
  i2600.id = i2601[0]
  i2600.name = i2601[1]
  i2600.cycleOffset = i2601[2]
  i2600.cycleOffsetParameter = i2601[3]
  i2600.cycleOffsetParameterActive = !!i2601[4]
  i2600.mirror = !!i2601[5]
  i2600.mirrorParameter = i2601[6]
  i2600.mirrorParameterActive = !!i2601[7]
  i2600.motionId = i2601[8]
  i2600.nameHash = i2601[9]
  i2600.fullPathHash = i2601[10]
  i2600.speed = i2601[11]
  i2600.speedParameter = i2601[12]
  i2600.speedParameterActive = !!i2601[13]
  i2600.tag = i2601[14]
  i2600.tagHash = i2601[15]
  i2600.writeDefaultValues = !!i2601[16]
  var i2603 = i2601[17]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 2) {
  request.r(i2603[i + 0], i2603[i + 1], 2, i2602, '')
  }
  i2600.behaviours = i2602
  var i2605 = i2601[18]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2605[i + 0]) );
  }
  i2600.transitions = i2604
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2611 = data
  i2610.fullPath = i2611[0]
  i2610.canTransitionToSelf = !!i2611[1]
  i2610.duration = i2611[2]
  i2610.exitTime = i2611[3]
  i2610.hasExitTime = !!i2611[4]
  i2610.hasFixedDuration = !!i2611[5]
  i2610.interruptionSource = i2611[6]
  i2610.offset = i2611[7]
  i2610.orderedInterruption = !!i2611[8]
  i2610.destinationStateId = i2611[9]
  i2610.isExit = !!i2611[10]
  i2610.mute = !!i2611[11]
  i2610.solo = !!i2611[12]
  var i2613 = i2611[13]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2613[i + 0]) );
  }
  i2610.conditions = i2612
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2619 = data
  i2618.destinationStateId = i2619[0]
  i2618.isExit = !!i2619[1]
  i2618.mute = !!i2619[2]
  i2618.solo = !!i2619[3]
  var i2621 = i2619[4]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2621[i + 0]) );
  }
  i2618.conditions = i2620
  return i2618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2625 = data
  i2624.defaultBool = !!i2625[0]
  i2624.defaultFloat = i2625[1]
  i2624.defaultInt = i2625[2]
  i2624.name = i2625[3]
  i2624.nameHash = i2625[4]
  i2624.type = i2625[5]
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2629 = data
  i2628.mode = i2629[0]
  i2628.parameter = i2629[1]
  i2628.threshold = i2629[2]
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2631 = data
  i2630.name = i2631[0]
  i2630.bytes64 = i2631[1]
  i2630.data = i2631[2]
  return i2630
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2632 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2633 = data
  i2632.normalStyle = i2633[0]
  i2632.normalSpacingOffset = i2633[1]
  i2632.boldStyle = i2633[2]
  i2632.boldSpacing = i2633[3]
  i2632.italicStyle = i2633[4]
  i2632.tabSize = i2633[5]
  request.r(i2633[6], i2633[7], 0, i2632, 'atlas')
  i2632.m_SourceFontFileGUID = i2633[8]
  i2632.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2633[9], i2632.m_CreationSettings)
  request.r(i2633[10], i2633[11], 0, i2632, 'm_SourceFontFile')
  i2632.m_SourceFontFilePath = i2633[12]
  i2632.m_AtlasPopulationMode = i2633[13]
  i2632.InternalDynamicOS = !!i2633[14]
  var i2635 = i2633[15]
  var i2634 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.add(request.d('UnityEngine.TextCore.Glyph', i2635[i + 0]));
  }
  i2632.m_GlyphTable = i2634
  var i2637 = i2633[16]
  var i2636 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.add(request.d('TMPro.TMP_Character', i2637[i + 0]));
  }
  i2632.m_CharacterTable = i2636
  var i2639 = i2633[17]
  var i2638 = []
  for(var i = 0; i < i2639.length; i += 2) {
  request.r(i2639[i + 0], i2639[i + 1], 2, i2638, '')
  }
  i2632.m_AtlasTextures = i2638
  i2632.m_AtlasTextureIndex = i2633[18]
  i2632.m_IsMultiAtlasTexturesEnabled = !!i2633[19]
  i2632.m_GetFontFeatures = !!i2633[20]
  i2632.m_ClearDynamicDataOnBuild = !!i2633[21]
  i2632.m_AtlasWidth = i2633[22]
  i2632.m_AtlasHeight = i2633[23]
  i2632.m_AtlasPadding = i2633[24]
  i2632.m_AtlasRenderMode = i2633[25]
  var i2641 = i2633[26]
  var i2640 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.add(request.d('UnityEngine.TextCore.GlyphRect', i2641[i + 0]));
  }
  i2632.m_UsedGlyphRects = i2640
  var i2643 = i2633[27]
  var i2642 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.add(request.d('UnityEngine.TextCore.GlyphRect', i2643[i + 0]));
  }
  i2632.m_FreeGlyphRects = i2642
  i2632.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2633[28], i2632.m_FontFeatureTable)
  i2632.m_ShouldReimportFontFeatures = !!i2633[29]
  var i2645 = i2633[30]
  var i2644 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2645.length; i += 2) {
  request.r(i2645[i + 0], i2645[i + 1], 1, i2644, '')
  }
  i2632.m_FallbackFontAssetTable = i2644
  var i2647 = i2633[31]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 1) {
    i2646.push( request.d('TMPro.TMP_FontWeightPair', i2647[i + 0]) );
  }
  i2632.m_FontWeightTable = i2646
  var i2649 = i2633[32]
  var i2648 = []
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.push( request.d('TMPro.TMP_FontWeightPair', i2649[i + 0]) );
  }
  i2632.fontWeights = i2648
  i2632.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2633[33], i2632.m_fontInfo)
  var i2651 = i2633[34]
  var i2650 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.add(request.d('TMPro.TMP_Glyph', i2651[i + 0]));
  }
  i2632.m_glyphInfoList = i2650
  i2632.m_KerningTable = request.d('TMPro.KerningTable', i2633[35], i2632.m_KerningTable)
  var i2653 = i2633[36]
  var i2652 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2653.length; i += 2) {
  request.r(i2653[i + 0], i2653[i + 1], 1, i2652, '')
  }
  i2632.fallbackFontAssets = i2652
  i2632.m_Version = i2633[37]
  i2632.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2633[38], i2632.m_FaceInfo)
  request.r(i2633[39], i2633[40], 0, i2632, 'm_Material')
  return i2632
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2654 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2655 = data
  i2654.sourceFontFileName = i2655[0]
  i2654.sourceFontFileGUID = i2655[1]
  i2654.faceIndex = i2655[2]
  i2654.pointSizeSamplingMode = i2655[3]
  i2654.pointSize = i2655[4]
  i2654.padding = i2655[5]
  i2654.paddingMode = i2655[6]
  i2654.packingMode = i2655[7]
  i2654.atlasWidth = i2655[8]
  i2654.atlasHeight = i2655[9]
  i2654.characterSetSelectionMode = i2655[10]
  i2654.characterSequence = i2655[11]
  i2654.referencedFontAssetGUID = i2655[12]
  i2654.referencedTextAssetGUID = i2655[13]
  i2654.fontStyle = i2655[14]
  i2654.fontStyleModifier = i2655[15]
  i2654.renderMode = i2655[16]
  i2654.includeFontFeatures = !!i2655[17]
  return i2654
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2658 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2659 = data
  i2658.m_Index = i2659[0]
  i2658.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2659[1], i2658.m_Metrics)
  i2658.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2659[2], i2658.m_GlyphRect)
  i2658.m_Scale = i2659[3]
  i2658.m_AtlasIndex = i2659[4]
  i2658.m_ClassDefinitionType = i2659[5]
  return i2658
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2660 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2661 = data
  i2660.m_Width = i2661[0]
  i2660.m_Height = i2661[1]
  i2660.m_HorizontalBearingX = i2661[2]
  i2660.m_HorizontalBearingY = i2661[3]
  i2660.m_HorizontalAdvance = i2661[4]
  return i2660
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2662 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2663 = data
  i2662.m_X = i2663[0]
  i2662.m_Y = i2663[1]
  i2662.m_Width = i2663[2]
  i2662.m_Height = i2663[3]
  return i2662
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2666 = root || request.c( 'TMPro.TMP_Character' )
  var i2667 = data
  i2666.m_ElementType = i2667[0]
  i2666.m_Unicode = i2667[1]
  i2666.m_GlyphIndex = i2667[2]
  i2666.m_Scale = i2667[3]
  return i2666
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2672 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2673 = data
  var i2675 = i2673[0]
  var i2674 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.add(request.d('TMPro.MultipleSubstitutionRecord', i2675[i + 0]));
  }
  i2672.m_MultipleSubstitutionRecords = i2674
  var i2677 = i2673[1]
  var i2676 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.add(request.d('TMPro.LigatureSubstitutionRecord', i2677[i + 0]));
  }
  i2672.m_LigatureSubstitutionRecords = i2676
  var i2679 = i2673[2]
  var i2678 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2679[i + 0]));
  }
  i2672.m_GlyphPairAdjustmentRecords = i2678
  var i2681 = i2673[3]
  var i2680 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2681[i + 0]));
  }
  i2672.m_MarkToBaseAdjustmentRecords = i2680
  var i2683 = i2673[4]
  var i2682 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2683[i + 0]));
  }
  i2672.m_MarkToMarkAdjustmentRecords = i2682
  return i2672
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2686 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2687 = data
  i2686.m_TargetGlyphID = i2687[0]
  i2686.m_SubstituteGlyphIDs = i2687[1]
  return i2686
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2690 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2691 = data
  i2690.m_ComponentGlyphIDs = i2691[0]
  i2690.m_LigatureGlyphID = i2691[1]
  return i2690
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2694 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2695 = data
  i2694.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2695[0], i2694.m_FirstAdjustmentRecord)
  i2694.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2695[1], i2694.m_SecondAdjustmentRecord)
  i2694.m_FeatureLookupFlags = i2695[2]
  return i2694
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2698 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2699 = data
  i2698.m_BaseGlyphID = i2699[0]
  i2698.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2699[1], i2698.m_BaseGlyphAnchorPoint)
  i2698.m_MarkGlyphID = i2699[2]
  i2698.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2699[3], i2698.m_MarkPositionAdjustment)
  return i2698
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2702 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2703 = data
  i2702.m_BaseMarkGlyphID = i2703[0]
  i2702.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2703[1], i2702.m_BaseMarkGlyphAnchorPoint)
  i2702.m_CombiningMarkGlyphID = i2703[2]
  i2702.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2703[3], i2702.m_CombiningMarkPositionAdjustment)
  return i2702
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2708 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2709 = data
  request.r(i2709[0], i2709[1], 0, i2708, 'regularTypeface')
  request.r(i2709[2], i2709[3], 0, i2708, 'italicTypeface')
  return i2708
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2710 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2711 = data
  i2710.Name = i2711[0]
  i2710.PointSize = i2711[1]
  i2710.Scale = i2711[2]
  i2710.CharacterCount = i2711[3]
  i2710.LineHeight = i2711[4]
  i2710.Baseline = i2711[5]
  i2710.Ascender = i2711[6]
  i2710.CapHeight = i2711[7]
  i2710.Descender = i2711[8]
  i2710.CenterLine = i2711[9]
  i2710.SuperscriptOffset = i2711[10]
  i2710.SubscriptOffset = i2711[11]
  i2710.SubSize = i2711[12]
  i2710.Underline = i2711[13]
  i2710.UnderlineThickness = i2711[14]
  i2710.strikethrough = i2711[15]
  i2710.strikethroughThickness = i2711[16]
  i2710.TabWidth = i2711[17]
  i2710.Padding = i2711[18]
  i2710.AtlasWidth = i2711[19]
  i2710.AtlasHeight = i2711[20]
  return i2710
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2714 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2715 = data
  i2714.id = i2715[0]
  i2714.x = i2715[1]
  i2714.y = i2715[2]
  i2714.width = i2715[3]
  i2714.height = i2715[4]
  i2714.xOffset = i2715[5]
  i2714.yOffset = i2715[6]
  i2714.xAdvance = i2715[7]
  i2714.scale = i2715[8]
  return i2714
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2716 = root || request.c( 'TMPro.KerningTable' )
  var i2717 = data
  var i2719 = i2717[0]
  var i2718 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2719.length; i += 1) {
    i2718.add(request.d('TMPro.KerningPair', i2719[i + 0]));
  }
  i2716.kerningPairs = i2718
  return i2716
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2722 = root || request.c( 'TMPro.KerningPair' )
  var i2723 = data
  i2722.xOffset = i2723[0]
  i2722.m_FirstGlyph = i2723[1]
  i2722.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2723[2], i2722.m_FirstGlyphAdjustments)
  i2722.m_SecondGlyph = i2723[3]
  i2722.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2723[4], i2722.m_SecondGlyphAdjustments)
  i2722.m_IgnoreSpacingAdjustments = !!i2723[5]
  return i2722
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2724 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2725 = data
  i2724.m_FaceIndex = i2725[0]
  i2724.m_FamilyName = i2725[1]
  i2724.m_StyleName = i2725[2]
  i2724.m_PointSize = i2725[3]
  i2724.m_Scale = i2725[4]
  i2724.m_UnitsPerEM = i2725[5]
  i2724.m_LineHeight = i2725[6]
  i2724.m_AscentLine = i2725[7]
  i2724.m_CapLine = i2725[8]
  i2724.m_MeanLine = i2725[9]
  i2724.m_Baseline = i2725[10]
  i2724.m_DescentLine = i2725[11]
  i2724.m_SuperscriptOffset = i2725[12]
  i2724.m_SuperscriptSize = i2725[13]
  i2724.m_SubscriptOffset = i2725[14]
  i2724.m_SubscriptSize = i2725[15]
  i2724.m_UnderlineOffset = i2725[16]
  i2724.m_UnderlineThickness = i2725[17]
  i2724.m_StrikethroughOffset = i2725[18]
  i2724.m_StrikethroughThickness = i2725[19]
  i2724.m_TabWidth = i2725[20]
  return i2724
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2726 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2727 = data
  i2726.useSafeMode = !!i2727[0]
  i2726.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2727[1], i2726.safeModeOptions)
  i2726.timeScale = i2727[2]
  i2726.unscaledTimeScale = i2727[3]
  i2726.useSmoothDeltaTime = !!i2727[4]
  i2726.maxSmoothUnscaledTime = i2727[5]
  i2726.rewindCallbackMode = i2727[6]
  i2726.showUnityEditorReport = !!i2727[7]
  i2726.logBehaviour = i2727[8]
  i2726.drawGizmos = !!i2727[9]
  i2726.defaultRecyclable = !!i2727[10]
  i2726.defaultAutoPlay = i2727[11]
  i2726.defaultUpdateType = i2727[12]
  i2726.defaultTimeScaleIndependent = !!i2727[13]
  i2726.defaultEaseType = i2727[14]
  i2726.defaultEaseOvershootOrAmplitude = i2727[15]
  i2726.defaultEasePeriod = i2727[16]
  i2726.defaultAutoKill = !!i2727[17]
  i2726.defaultLoopType = i2727[18]
  i2726.debugMode = !!i2727[19]
  i2726.debugStoreTargetId = !!i2727[20]
  i2726.showPreviewPanel = !!i2727[21]
  i2726.storeSettingsLocation = i2727[22]
  i2726.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2727[23], i2726.modules)
  i2726.createASMDEF = !!i2727[24]
  i2726.showPlayingTweens = !!i2727[25]
  i2726.showPausedTweens = !!i2727[26]
  return i2726
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2728 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2729 = data
  i2728.logBehaviour = i2729[0]
  i2728.nestedTweenFailureBehaviour = i2729[1]
  return i2728
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2730 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2731 = data
  i2730.showPanel = !!i2731[0]
  i2730.audioEnabled = !!i2731[1]
  i2730.physicsEnabled = !!i2731[2]
  i2730.physics2DEnabled = !!i2731[3]
  i2730.spriteEnabled = !!i2731[4]
  i2730.uiEnabled = !!i2731[5]
  i2730.uiToolkitEnabled = !!i2731[6]
  i2730.textMeshProEnabled = !!i2731[7]
  i2730.tk2DEnabled = !!i2731[8]
  i2730.deAudioEnabled = !!i2731[9]
  i2730.deUnityExtendedEnabled = !!i2731[10]
  i2730.epoOutlineEnabled = !!i2731[11]
  return i2730
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2732 = root || request.c( 'TMPro.TMP_Settings' )
  var i2733 = data
  i2732.assetVersion = i2733[0]
  i2732.m_TextWrappingMode = i2733[1]
  i2732.m_enableKerning = !!i2733[2]
  var i2735 = i2733[3]
  var i2734 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.add(i2735[i + 0]);
  }
  i2732.m_ActiveFontFeatures = i2734
  i2732.m_enableExtraPadding = !!i2733[4]
  i2732.m_enableTintAllSprites = !!i2733[5]
  i2732.m_enableParseEscapeCharacters = !!i2733[6]
  i2732.m_EnableRaycastTarget = !!i2733[7]
  i2732.m_GetFontFeaturesAtRuntime = !!i2733[8]
  i2732.m_missingGlyphCharacter = i2733[9]
  i2732.m_ClearDynamicDataOnBuild = !!i2733[10]
  i2732.m_warningsDisabled = !!i2733[11]
  request.r(i2733[12], i2733[13], 0, i2732, 'm_defaultFontAsset')
  i2732.m_defaultFontAssetPath = i2733[14]
  i2732.m_defaultFontSize = i2733[15]
  i2732.m_defaultAutoSizeMinRatio = i2733[16]
  i2732.m_defaultAutoSizeMaxRatio = i2733[17]
  i2732.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2733[18], i2733[19] )
  i2732.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2733[20], i2733[21] )
  i2732.m_autoSizeTextContainer = !!i2733[22]
  i2732.m_IsTextObjectScaleStatic = !!i2733[23]
  var i2737 = i2733[24]
  var i2736 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2737.length; i += 2) {
  request.r(i2737[i + 0], i2737[i + 1], 1, i2736, '')
  }
  i2732.m_fallbackFontAssets = i2736
  i2732.m_matchMaterialPreset = !!i2733[25]
  i2732.m_HideSubTextObjects = !!i2733[26]
  request.r(i2733[27], i2733[28], 0, i2732, 'm_defaultSpriteAsset')
  i2732.m_defaultSpriteAssetPath = i2733[29]
  i2732.m_enableEmojiSupport = !!i2733[30]
  i2732.m_MissingCharacterSpriteUnicode = i2733[31]
  var i2739 = i2733[32]
  var i2738 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2739.length; i += 2) {
  request.r(i2739[i + 0], i2739[i + 1], 1, i2738, '')
  }
  i2732.m_EmojiFallbackTextAssets = i2738
  i2732.m_defaultColorGradientPresetsPath = i2733[33]
  request.r(i2733[34], i2733[35], 0, i2732, 'm_defaultStyleSheet')
  i2732.m_StyleSheetsResourcePath = i2733[36]
  request.r(i2733[37], i2733[38], 0, i2732, 'm_leadingCharacters')
  request.r(i2733[39], i2733[40], 0, i2732, 'm_followingCharacters')
  i2732.m_UseModernHangulLineBreakingRules = !!i2733[41]
  return i2732
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2742 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2743 = data
  request.r(i2743[0], i2743[1], 0, i2742, 'spriteSheet')
  var i2745 = i2743[2]
  var i2744 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2745.length; i += 1) {
    i2744.add(request.d('TMPro.TMP_Sprite', i2745[i + 0]));
  }
  i2742.spriteInfoList = i2744
  var i2747 = i2743[3]
  var i2746 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2747.length; i += 2) {
  request.r(i2747[i + 0], i2747[i + 1], 1, i2746, '')
  }
  i2742.fallbackSpriteAssets = i2746
  var i2749 = i2743[4]
  var i2748 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2749.length; i += 1) {
    i2748.add(request.d('TMPro.TMP_SpriteCharacter', i2749[i + 0]));
  }
  i2742.m_SpriteCharacterTable = i2748
  var i2751 = i2743[5]
  var i2750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.add(request.d('TMPro.TMP_SpriteGlyph', i2751[i + 0]));
  }
  i2742.m_GlyphTable = i2750
  i2742.m_Version = i2743[6]
  i2742.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2743[7], i2742.m_FaceInfo)
  request.r(i2743[8], i2743[9], 0, i2742, 'm_Material')
  return i2742
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2754 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2755 = data
  i2754.name = i2755[0]
  i2754.hashCode = i2755[1]
  i2754.unicode = i2755[2]
  i2754.pivot = new pc.Vec2( i2755[3], i2755[4] )
  request.r(i2755[5], i2755[6], 0, i2754, 'sprite')
  i2754.id = i2755[7]
  i2754.x = i2755[8]
  i2754.y = i2755[9]
  i2754.width = i2755[10]
  i2754.height = i2755[11]
  i2754.xOffset = i2755[12]
  i2754.yOffset = i2755[13]
  i2754.xAdvance = i2755[14]
  i2754.scale = i2755[15]
  return i2754
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2760 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2761 = data
  i2760.m_Name = i2761[0]
  i2760.m_ElementType = i2761[1]
  i2760.m_Unicode = i2761[2]
  i2760.m_GlyphIndex = i2761[3]
  i2760.m_Scale = i2761[4]
  return i2760
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2764 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2765 = data
  request.r(i2765[0], i2765[1], 0, i2764, 'sprite')
  i2764.m_Index = i2765[2]
  i2764.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2765[3], i2764.m_Metrics)
  i2764.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2765[4], i2764.m_GlyphRect)
  i2764.m_Scale = i2765[5]
  i2764.m_AtlasIndex = i2765[6]
  i2764.m_ClassDefinitionType = i2765[7]
  return i2764
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2766 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2767 = data
  var i2769 = i2767[0]
  var i2768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.add(request.d('TMPro.TMP_Style', i2769[i + 0]));
  }
  i2766.m_StyleList = i2768
  return i2766
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2772 = root || request.c( 'TMPro.TMP_Style' )
  var i2773 = data
  i2772.m_Name = i2773[0]
  i2772.m_HashCode = i2773[1]
  i2772.m_OpeningDefinition = i2773[2]
  i2772.m_ClosingDefinition = i2773[3]
  i2772.m_OpeningTagArray = i2773[4]
  i2772.m_ClosingTagArray = i2773[5]
  return i2772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2775 = data
  var i2777 = i2775[0]
  var i2776 = []
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2777[i + 0]) );
  }
  i2774.files = i2776
  i2774.componentToPrefabIds = i2775[1]
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2781 = data
  i2780.path = i2781[0]
  request.r(i2781[1], i2781[2], 0, i2780, 'unityObject')
  return i2780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2783 = data
  var i2785 = i2783[0]
  var i2784 = []
  for(var i = 0; i < i2785.length; i += 1) {
    i2784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2785[i + 0]) );
  }
  i2782.scriptsExecutionOrder = i2784
  var i2787 = i2783[1]
  var i2786 = []
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2787[i + 0]) );
  }
  i2782.sortingLayers = i2786
  var i2789 = i2783[2]
  var i2788 = []
  for(var i = 0; i < i2789.length; i += 1) {
    i2788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2789[i + 0]) );
  }
  i2782.cullingLayers = i2788
  i2782.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2783[3], i2782.timeSettings)
  i2782.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2783[4], i2782.physicsSettings)
  i2782.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2783[5], i2782.physics2DSettings)
  i2782.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2783[6], i2782.qualitySettings)
  i2782.enableRealtimeShadows = !!i2783[7]
  i2782.enableAutoInstancing = !!i2783[8]
  i2782.enableStaticBatching = !!i2783[9]
  i2782.enableDynamicBatching = !!i2783[10]
  i2782.lightmapEncodingQuality = i2783[11]
  i2782.desiredColorSpace = i2783[12]
  var i2791 = i2783[13]
  var i2790 = []
  for(var i = 0; i < i2791.length; i += 1) {
    i2790.push( i2791[i + 0] );
  }
  i2782.allTags = i2790
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2795 = data
  i2794.name = i2795[0]
  i2794.value = i2795[1]
  return i2794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2799 = data
  i2798.id = i2799[0]
  i2798.name = i2799[1]
  i2798.value = i2799[2]
  return i2798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2803 = data
  i2802.id = i2803[0]
  i2802.name = i2803[1]
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2805 = data
  i2804.fixedDeltaTime = i2805[0]
  i2804.maximumDeltaTime = i2805[1]
  i2804.timeScale = i2805[2]
  i2804.maximumParticleTimestep = i2805[3]
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2807 = data
  i2806.gravity = new pc.Vec3( i2807[0], i2807[1], i2807[2] )
  i2806.defaultSolverIterations = i2807[3]
  i2806.bounceThreshold = i2807[4]
  i2806.autoSyncTransforms = !!i2807[5]
  i2806.autoSimulation = !!i2807[6]
  var i2809 = i2807[7]
  var i2808 = []
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2809[i + 0]) );
  }
  i2806.collisionMatrix = i2808
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2813 = data
  i2812.enabled = !!i2813[0]
  i2812.layerId = i2813[1]
  i2812.otherLayerId = i2813[2]
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2815 = data
  request.r(i2815[0], i2815[1], 0, i2814, 'material')
  i2814.gravity = new pc.Vec2( i2815[2], i2815[3] )
  i2814.positionIterations = i2815[4]
  i2814.velocityIterations = i2815[5]
  i2814.velocityThreshold = i2815[6]
  i2814.maxLinearCorrection = i2815[7]
  i2814.maxAngularCorrection = i2815[8]
  i2814.maxTranslationSpeed = i2815[9]
  i2814.maxRotationSpeed = i2815[10]
  i2814.baumgarteScale = i2815[11]
  i2814.baumgarteTOIScale = i2815[12]
  i2814.timeToSleep = i2815[13]
  i2814.linearSleepTolerance = i2815[14]
  i2814.angularSleepTolerance = i2815[15]
  i2814.defaultContactOffset = i2815[16]
  i2814.autoSimulation = !!i2815[17]
  i2814.queriesHitTriggers = !!i2815[18]
  i2814.queriesStartInColliders = !!i2815[19]
  i2814.callbacksOnDisable = !!i2815[20]
  i2814.reuseCollisionCallbacks = !!i2815[21]
  i2814.autoSyncTransforms = !!i2815[22]
  var i2817 = i2815[23]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2817[i + 0]) );
  }
  i2814.collisionMatrix = i2816
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2821 = data
  i2820.enabled = !!i2821[0]
  i2820.layerId = i2821[1]
  i2820.otherLayerId = i2821[2]
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2823 = data
  var i2825 = i2823[0]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2825[i + 0]) );
  }
  i2822.qualityLevels = i2824
  var i2827 = i2823[1]
  var i2826 = []
  for(var i = 0; i < i2827.length; i += 1) {
    i2826.push( i2827[i + 0] );
  }
  i2822.names = i2826
  i2822.shadows = i2823[2]
  i2822.anisotropicFiltering = i2823[3]
  i2822.antiAliasing = i2823[4]
  i2822.lodBias = i2823[5]
  i2822.shadowCascades = i2823[6]
  i2822.shadowDistance = i2823[7]
  i2822.shadowmaskMode = i2823[8]
  i2822.shadowProjection = i2823[9]
  i2822.shadowResolution = i2823[10]
  i2822.softParticles = !!i2823[11]
  i2822.softVegetation = !!i2823[12]
  i2822.activeColorSpace = i2823[13]
  i2822.desiredColorSpace = i2823[14]
  i2822.masterTextureLimit = i2823[15]
  i2822.maxQueuedFrames = i2823[16]
  i2822.particleRaycastBudget = i2823[17]
  i2822.pixelLightCount = i2823[18]
  i2822.realtimeReflectionProbes = !!i2823[19]
  i2822.shadowCascade2Split = i2823[20]
  i2822.shadowCascade4Split = new pc.Vec3( i2823[21], i2823[22], i2823[23] )
  i2822.streamingMipmapsActive = !!i2823[24]
  i2822.vSyncCount = i2823[25]
  i2822.asyncUploadBufferSize = i2823[26]
  i2822.asyncUploadTimeSlice = i2823[27]
  i2822.billboardsFaceCameraPosition = !!i2823[28]
  i2822.shadowNearPlaneOffset = i2823[29]
  i2822.streamingMipmapsMemoryBudget = i2823[30]
  i2822.maximumLODLevel = i2823[31]
  i2822.streamingMipmapsAddAllCameras = !!i2823[32]
  i2822.streamingMipmapsMaxLevelReduction = i2823[33]
  i2822.streamingMipmapsRenderersPerFrame = i2823[34]
  i2822.resolutionScalingFixedDPIFactor = i2823[35]
  i2822.streamingMipmapsMaxFileIORequests = i2823[36]
  i2822.currentQualityLevel = i2823[37]
  return i2822
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2830 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2831 = data
  i2830.m_GlyphIndex = i2831[0]
  i2830.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2831[1], i2830.m_GlyphValueRecord)
  return i2830
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2832 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2833 = data
  i2832.m_XCoordinate = i2833[0]
  i2832.m_YCoordinate = i2833[1]
  return i2832
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2834 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2835 = data
  i2834.m_XPositionAdjustment = i2835[0]
  i2834.m_YPositionAdjustment = i2835[1]
  return i2834
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2836 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2837 = data
  i2836.xPlacement = i2837[0]
  i2836.yPlacement = i2837[1]
  i2836.xAdvance = i2837[2]
  i2836.yAdvance = i2837[3]
  return i2836
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2838 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2839 = data
  i2838.m_XPlacement = i2839[0]
  i2838.m_YPlacement = i2839[1]
  i2838.m_XAdvance = i2839[2]
  i2838.m_YAdvance = i2839[3]
  return i2838
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[70],"71":[28],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[80],"88":[80],"89":[80],"90":[80],"91":[80],"92":[80],"93":[28],"94":[95],"96":[97],"98":[97],"27":[13],"99":[100],"101":[20],"56":[102],"103":[20],"20":[102],"24":[20],"104":[20],"105":[102],"106":[102],"107":[102],"108":[13],"109":[16,13],"110":[95],"111":[16,13],"112":[25,95],"113":[95],"114":[95,115],"116":[73],"117":[80],"118":[119],"120":[121],"122":[5],"123":[28],"124":[125],"126":[13],"127":[95,13],"32":[13,16],"128":[13],"129":[16,13],"130":[95],"131":[16,13],"132":[13],"133":[134],"135":[134],"136":[134],"137":[13],"138":[13],"30":[27],"15":[16,13],"139":[13],"29":[27],"140":[13],"141":[13],"142":[13],"143":[13],"144":[13],"145":[13],"146":[13],"147":[13],"148":[13],"149":[16,13],"150":[13],"151":[13],"152":[13],"36":[13],"153":[16,13],"154":[13],"155":[53],"156":[53],"54":[53],"157":[53],"158":[28],"159":[28]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","HeartBreakEffect","BlinkEffect","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","StarExploreFX","UnityEngine.RectTransform","ClockTimer","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","WaterSplash","UnityEngine.SphereCollider","ItemDraggable","Paper","ItemMoveToTarget","UnityEngine.GameObject","ItemDragRaycastTarget","UnityEngine.Animator","ItemSound","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","UnityEngine.UI.Slider","ProgressSlider","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","InputManager","HandTutManager","FoodOnPlate","FoodOnOven","PhaseManager","ItemTypeDoneManager","OvenManager","OvenSlot","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.BoxCollider","ItemClickable","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","BrushMaskUnit","UnityEngine.SpriteMask","OilBrush","UnityEngine.Collider","ItemDragChildRotator","ItemDragSpriteMaskPainter","ItemKnifeSpriteMaskCutter","ItemSpriteMaskPainter","ItemStirring","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "06/04/2026 10:17:48";

Deserializers.lunaDaysRunning = "52.9";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "Cookingdom_PLY_v64_BBQ_grillscene";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1766";

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

Deserializers.buildID = "4631aaab-8243-4166-8d34-0706537283bf";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

