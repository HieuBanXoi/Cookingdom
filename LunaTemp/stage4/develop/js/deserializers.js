var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1782 = root || request.c( 'UnityEngine.JointSpring' )
  var i1783 = data
  i1782.spring = i1783[0]
  i1782.damper = i1783[1]
  i1782.targetPosition = i1783[2]
  return i1782
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1784 = root || request.c( 'UnityEngine.JointMotor' )
  var i1785 = data
  i1784.m_TargetVelocity = i1785[0]
  i1784.m_Force = i1785[1]
  i1784.m_FreeSpin = i1785[2]
  return i1784
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1786 = root || request.c( 'UnityEngine.JointLimits' )
  var i1787 = data
  i1786.m_Min = i1787[0]
  i1786.m_Max = i1787[1]
  i1786.m_Bounciness = i1787[2]
  i1786.m_BounceMinVelocity = i1787[3]
  i1786.m_ContactDistance = i1787[4]
  i1786.minBounce = i1787[5]
  i1786.maxBounce = i1787[6]
  return i1786
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1788 = root || request.c( 'UnityEngine.JointDrive' )
  var i1789 = data
  i1788.m_PositionSpring = i1789[0]
  i1788.m_PositionDamper = i1789[1]
  i1788.m_MaximumForce = i1789[2]
  i1788.m_UseAcceleration = i1789[3]
  return i1788
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1790 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1791 = data
  i1790.m_Spring = i1791[0]
  i1790.m_Damper = i1791[1]
  return i1790
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1792 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1793 = data
  i1792.m_Limit = i1793[0]
  i1792.m_Bounciness = i1793[1]
  i1792.m_ContactDistance = i1793[2]
  return i1792
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1794 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1795 = data
  i1794.m_ExtremumSlip = i1795[0]
  i1794.m_ExtremumValue = i1795[1]
  i1794.m_AsymptoteSlip = i1795[2]
  i1794.m_AsymptoteValue = i1795[3]
  i1794.m_Stiffness = i1795[4]
  return i1794
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1797 = data
  i1796.m_LowerAngle = i1797[0]
  i1796.m_UpperAngle = i1797[1]
  return i1796
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1798 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1799 = data
  i1798.m_MotorSpeed = i1799[0]
  i1798.m_MaximumMotorTorque = i1799[1]
  return i1798
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1800 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1801 = data
  i1800.m_DampingRatio = i1801[0]
  i1800.m_Frequency = i1801[1]
  i1800.m_Angle = i1801[2]
  return i1800
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1803 = data
  i1802.m_LowerTranslation = i1803[0]
  i1802.m_UpperTranslation = i1803[1]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1804 = root || new pc.UnityMaterial()
  var i1805 = data
  i1804.name = i1805[0]
  request.r(i1805[1], i1805[2], 0, i1804, 'shader')
  i1804.renderQueue = i1805[3]
  i1804.enableInstancing = !!i1805[4]
  var i1807 = i1805[5]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1807[i + 0]) );
  }
  i1804.floatParameters = i1806
  var i1809 = i1805[6]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1809[i + 0]) );
  }
  i1804.colorParameters = i1808
  var i1811 = i1805[7]
  var i1810 = []
  for(var i = 0; i < i1811.length; i += 1) {
    i1810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1811[i + 0]) );
  }
  i1804.vectorParameters = i1810
  var i1813 = i1805[8]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1813[i + 0]) );
  }
  i1804.textureParameters = i1812
  var i1815 = i1805[9]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1815[i + 0]) );
  }
  i1804.materialFlags = i1814
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1819 = data
  i1818.name = i1819[0]
  i1818.value = i1819[1]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1823 = data
  i1822.name = i1823[0]
  i1822.value = new pc.Color(i1823[1], i1823[2], i1823[3], i1823[4])
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1827 = data
  i1826.name = i1827[0]
  i1826.value = new pc.Vec4( i1827[1], i1827[2], i1827[3], i1827[4] )
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1831 = data
  i1830.name = i1831[0]
  request.r(i1831[1], i1831[2], 0, i1830, 'value')
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1835 = data
  i1834.name = i1835[0]
  i1834.enabled = !!i1835[1]
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1837 = data
  i1836.name = i1837[0]
  i1836.width = i1837[1]
  i1836.height = i1837[2]
  i1836.mipmapCount = i1837[3]
  i1836.anisoLevel = i1837[4]
  i1836.filterMode = i1837[5]
  i1836.hdr = !!i1837[6]
  i1836.format = i1837[7]
  i1836.wrapMode = i1837[8]
  i1836.alphaIsTransparency = !!i1837[9]
  i1836.alphaSource = i1837[10]
  i1836.graphicsFormat = i1837[11]
  i1836.sRGBTexture = !!i1837[12]
  i1836.desiredColorSpace = i1837[13]
  i1836.wrapU = i1837[14]
  i1836.wrapV = i1837[15]
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1839 = data
  i1838.position = new pc.Vec3( i1839[0], i1839[1], i1839[2] )
  i1838.scale = new pc.Vec3( i1839[3], i1839[4], i1839[5] )
  i1838.rotation = new pc.Quat(i1839[6], i1839[7], i1839[8], i1839[9])
  return i1838
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i1840 = root || request.c( 'HeartEffect' )
  var i1841 = data
  request.r(i1841[0], i1841[1], 0, i1840, 'tf')
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1843 = data
  request.r(i1843[0], i1843[1], 0, i1842, 'animatorController')
  request.r(i1843[2], i1843[3], 0, i1842, 'avatar')
  i1842.updateMode = i1843[4]
  i1842.hasTransformHierarchy = !!i1843[5]
  i1842.applyRootMotion = !!i1843[6]
  var i1845 = i1843[7]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 2) {
  request.r(i1845[i + 0], i1845[i + 1], 2, i1844, '')
  }
  i1842.humanBones = i1844
  i1842.enabled = !!i1843[8]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1849 = data
  i1848.color = new pc.Color(i1849[0], i1849[1], i1849[2], i1849[3])
  request.r(i1849[4], i1849[5], 0, i1848, 'sprite')
  i1848.flipX = !!i1849[6]
  i1848.flipY = !!i1849[7]
  i1848.drawMode = i1849[8]
  i1848.size = new pc.Vec2( i1849[9], i1849[10] )
  i1848.tileMode = i1849[11]
  i1848.adaptiveModeThreshold = i1849[12]
  i1848.maskInteraction = i1849[13]
  i1848.spriteSortPoint = i1849[14]
  i1848.enabled = !!i1849[15]
  request.r(i1849[16], i1849[17], 0, i1848, 'sharedMaterial')
  var i1851 = i1849[18]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 2) {
  request.r(i1851[i + 0], i1851[i + 1], 2, i1850, '')
  }
  i1848.sharedMaterials = i1850
  i1848.receiveShadows = !!i1849[19]
  i1848.shadowCastingMode = i1849[20]
  i1848.sortingLayerID = i1849[21]
  i1848.sortingOrder = i1849[22]
  i1848.lightmapIndex = i1849[23]
  i1848.lightmapSceneIndex = i1849[24]
  i1848.lightmapScaleOffset = new pc.Vec4( i1849[25], i1849[26], i1849[27], i1849[28] )
  i1848.lightProbeUsage = i1849[29]
  i1848.reflectionProbeUsage = i1849[30]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1855 = data
  i1854.name = i1855[0]
  i1854.tagId = i1855[1]
  i1854.enabled = !!i1855[2]
  i1854.isStatic = !!i1855[3]
  i1854.layer = i1855[4]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1857 = data
  i1856.name = i1857[0]
  i1856.index = i1857[1]
  i1856.startup = !!i1857[2]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1859 = data
  i1858.pivot = new pc.Vec2( i1859[0], i1859[1] )
  i1858.anchorMin = new pc.Vec2( i1859[2], i1859[3] )
  i1858.anchorMax = new pc.Vec2( i1859[4], i1859[5] )
  i1858.sizeDelta = new pc.Vec2( i1859[6], i1859[7] )
  i1858.anchoredPosition3D = new pc.Vec3( i1859[8], i1859[9], i1859[10] )
  i1858.rotation = new pc.Quat(i1859[11], i1859[12], i1859[13], i1859[14])
  i1858.scale = new pc.Vec3( i1859[15], i1859[16], i1859[17] )
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1861 = data
  i1860.planeDistance = i1861[0]
  i1860.referencePixelsPerUnit = i1861[1]
  i1860.isFallbackOverlay = !!i1861[2]
  i1860.renderMode = i1861[3]
  i1860.renderOrder = i1861[4]
  i1860.sortingLayerName = i1861[5]
  i1860.sortingOrder = i1861[6]
  i1860.scaleFactor = i1861[7]
  request.r(i1861[8], i1861[9], 0, i1860, 'worldCamera')
  i1860.overrideSorting = !!i1861[10]
  i1860.pixelPerfect = !!i1861[11]
  i1860.targetDisplay = i1861[12]
  i1860.overridePixelPerfect = !!i1861[13]
  i1860.enabled = !!i1861[14]
  return i1860
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1862 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1863 = data
  i1862.m_UiScaleMode = i1863[0]
  i1862.m_ReferencePixelsPerUnit = i1863[1]
  i1862.m_ScaleFactor = i1863[2]
  i1862.m_ReferenceResolution = new pc.Vec2( i1863[3], i1863[4] )
  i1862.m_ScreenMatchMode = i1863[5]
  i1862.m_MatchWidthOrHeight = i1863[6]
  i1862.m_PhysicalUnit = i1863[7]
  i1862.m_FallbackScreenDPI = i1863[8]
  i1862.m_DefaultSpriteDPI = i1863[9]
  i1862.m_DynamicPixelsPerUnit = i1863[10]
  i1862.m_PresetInfoIsWorld = !!i1863[11]
  return i1862
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1864 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1865 = data
  i1864.m_IgnoreReversedGraphics = !!i1865[0]
  i1864.m_BlockingObjects = i1865[1]
  i1864.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1865[2] )
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1867 = data
  i1866.cullTransparentMesh = !!i1867[0]
  return i1866
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1868 = root || request.c( 'UnityEngine.UI.Image' )
  var i1869 = data
  request.r(i1869[0], i1869[1], 0, i1868, 'm_Sprite')
  i1868.m_Type = i1869[2]
  i1868.m_PreserveAspect = !!i1869[3]
  i1868.m_FillCenter = !!i1869[4]
  i1868.m_FillMethod = i1869[5]
  i1868.m_FillAmount = i1869[6]
  i1868.m_FillClockwise = !!i1869[7]
  i1868.m_FillOrigin = i1869[8]
  i1868.m_UseSpriteMesh = !!i1869[9]
  i1868.m_PixelsPerUnitMultiplier = i1869[10]
  request.r(i1869[11], i1869[12], 0, i1868, 'm_Material')
  i1868.m_Maskable = !!i1869[13]
  i1868.m_Color = new pc.Color(i1869[14], i1869[15], i1869[16], i1869[17])
  i1868.m_RaycastTarget = !!i1869[18]
  i1868.m_RaycastPadding = new pc.Vec4( i1869[19], i1869[20], i1869[21], i1869[22] )
  return i1868
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1870 = root || request.c( 'UnityEngine.UI.Button' )
  var i1871 = data
  i1870.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1871[0], i1870.m_OnClick)
  i1870.m_Navigation = request.d('UnityEngine.UI.Navigation', i1871[1], i1870.m_Navigation)
  i1870.m_Transition = i1871[2]
  i1870.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1871[3], i1870.m_Colors)
  i1870.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1871[4], i1870.m_SpriteState)
  i1870.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1871[5], i1870.m_AnimationTriggers)
  i1870.m_Interactable = !!i1871[6]
  request.r(i1871[7], i1871[8], 0, i1870, 'm_TargetGraphic')
  return i1870
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1872 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1873 = data
  i1872.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1873[0], i1872.m_PersistentCalls)
  return i1872
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1874 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1875 = data
  var i1877 = i1875[0]
  var i1876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.add(request.d('UnityEngine.Events.PersistentCall', i1877[i + 0]));
  }
  i1874.m_Calls = i1876
  return i1874
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1880 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1881 = data
  request.r(i1881[0], i1881[1], 0, i1880, 'm_Target')
  i1880.m_TargetAssemblyTypeName = i1881[2]
  i1880.m_MethodName = i1881[3]
  i1880.m_Mode = i1881[4]
  i1880.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1881[5], i1880.m_Arguments)
  i1880.m_CallState = i1881[6]
  return i1880
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1882 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1883 = data
  request.r(i1883[0], i1883[1], 0, i1882, 'm_ObjectArgument')
  i1882.m_ObjectArgumentAssemblyTypeName = i1883[2]
  i1882.m_IntArgument = i1883[3]
  i1882.m_FloatArgument = i1883[4]
  i1882.m_StringArgument = i1883[5]
  i1882.m_BoolArgument = !!i1883[6]
  return i1882
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1884 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1885 = data
  i1884.m_Mode = i1885[0]
  i1884.m_WrapAround = !!i1885[1]
  request.r(i1885[2], i1885[3], 0, i1884, 'm_SelectOnUp')
  request.r(i1885[4], i1885[5], 0, i1884, 'm_SelectOnDown')
  request.r(i1885[6], i1885[7], 0, i1884, 'm_SelectOnLeft')
  request.r(i1885[8], i1885[9], 0, i1884, 'm_SelectOnRight')
  return i1884
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1886 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1887 = data
  i1886.m_NormalColor = new pc.Color(i1887[0], i1887[1], i1887[2], i1887[3])
  i1886.m_HighlightedColor = new pc.Color(i1887[4], i1887[5], i1887[6], i1887[7])
  i1886.m_PressedColor = new pc.Color(i1887[8], i1887[9], i1887[10], i1887[11])
  i1886.m_SelectedColor = new pc.Color(i1887[12], i1887[13], i1887[14], i1887[15])
  i1886.m_DisabledColor = new pc.Color(i1887[16], i1887[17], i1887[18], i1887[19])
  i1886.m_ColorMultiplier = i1887[20]
  i1886.m_FadeDuration = i1887[21]
  return i1886
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1888 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1889 = data
  request.r(i1889[0], i1889[1], 0, i1888, 'm_HighlightedSprite')
  request.r(i1889[2], i1889[3], 0, i1888, 'm_PressedSprite')
  request.r(i1889[4], i1889[5], 0, i1888, 'm_SelectedSprite')
  request.r(i1889[6], i1889[7], 0, i1888, 'm_DisabledSprite')
  return i1888
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1890 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1891 = data
  i1890.m_NormalTrigger = i1891[0]
  i1890.m_HighlightedTrigger = i1891[1]
  i1890.m_PressedTrigger = i1891[2]
  i1890.m_SelectedTrigger = i1891[3]
  i1890.m_DisabledTrigger = i1891[4]
  return i1890
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1892 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1893 = data
  i1892.m_hasFontAssetChanged = !!i1893[0]
  request.r(i1893[1], i1893[2], 0, i1892, 'm_baseMaterial')
  i1892.m_maskOffset = new pc.Vec4( i1893[3], i1893[4], i1893[5], i1893[6] )
  i1892.m_text = i1893[7]
  i1892.m_isRightToLeft = !!i1893[8]
  request.r(i1893[9], i1893[10], 0, i1892, 'm_fontAsset')
  request.r(i1893[11], i1893[12], 0, i1892, 'm_sharedMaterial')
  var i1895 = i1893[13]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 2) {
  request.r(i1895[i + 0], i1895[i + 1], 2, i1894, '')
  }
  i1892.m_fontSharedMaterials = i1894
  request.r(i1893[14], i1893[15], 0, i1892, 'm_fontMaterial')
  var i1897 = i1893[16]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 2) {
  request.r(i1897[i + 0], i1897[i + 1], 2, i1896, '')
  }
  i1892.m_fontMaterials = i1896
  i1892.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1893[17], i1893[18], i1893[19], i1893[20])
  i1892.m_fontColor = new pc.Color(i1893[21], i1893[22], i1893[23], i1893[24])
  i1892.m_enableVertexGradient = !!i1893[25]
  i1892.m_colorMode = i1893[26]
  i1892.m_fontColorGradient = request.d('TMPro.VertexGradient', i1893[27], i1892.m_fontColorGradient)
  request.r(i1893[28], i1893[29], 0, i1892, 'm_fontColorGradientPreset')
  request.r(i1893[30], i1893[31], 0, i1892, 'm_spriteAsset')
  i1892.m_tintAllSprites = !!i1893[32]
  request.r(i1893[33], i1893[34], 0, i1892, 'm_StyleSheet')
  i1892.m_TextStyleHashCode = i1893[35]
  i1892.m_overrideHtmlColors = !!i1893[36]
  i1892.m_faceColor = UnityEngine.Color32.ConstructColor(i1893[37], i1893[38], i1893[39], i1893[40])
  i1892.m_fontSize = i1893[41]
  i1892.m_fontSizeBase = i1893[42]
  i1892.m_fontWeight = i1893[43]
  i1892.m_enableAutoSizing = !!i1893[44]
  i1892.m_fontSizeMin = i1893[45]
  i1892.m_fontSizeMax = i1893[46]
  i1892.m_fontStyle = i1893[47]
  i1892.m_HorizontalAlignment = i1893[48]
  i1892.m_VerticalAlignment = i1893[49]
  i1892.m_textAlignment = i1893[50]
  i1892.m_characterSpacing = i1893[51]
  i1892.m_wordSpacing = i1893[52]
  i1892.m_lineSpacing = i1893[53]
  i1892.m_lineSpacingMax = i1893[54]
  i1892.m_paragraphSpacing = i1893[55]
  i1892.m_charWidthMaxAdj = i1893[56]
  i1892.m_TextWrappingMode = i1893[57]
  i1892.m_wordWrappingRatios = i1893[58]
  i1892.m_overflowMode = i1893[59]
  request.r(i1893[60], i1893[61], 0, i1892, 'm_linkedTextComponent')
  request.r(i1893[62], i1893[63], 0, i1892, 'parentLinkedComponent')
  i1892.m_enableKerning = !!i1893[64]
  var i1899 = i1893[65]
  var i1898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.add(i1899[i + 0]);
  }
  i1892.m_ActiveFontFeatures = i1898
  i1892.m_enableExtraPadding = !!i1893[66]
  i1892.checkPaddingRequired = !!i1893[67]
  i1892.m_isRichText = !!i1893[68]
  i1892.m_parseCtrlCharacters = !!i1893[69]
  i1892.m_isOrthographic = !!i1893[70]
  i1892.m_isCullingEnabled = !!i1893[71]
  i1892.m_horizontalMapping = i1893[72]
  i1892.m_verticalMapping = i1893[73]
  i1892.m_uvLineOffset = i1893[74]
  i1892.m_geometrySortingOrder = i1893[75]
  i1892.m_IsTextObjectScaleStatic = !!i1893[76]
  i1892.m_VertexBufferAutoSizeReduction = !!i1893[77]
  i1892.m_useMaxVisibleDescender = !!i1893[78]
  i1892.m_pageToDisplay = i1893[79]
  i1892.m_margin = new pc.Vec4( i1893[80], i1893[81], i1893[82], i1893[83] )
  i1892.m_isUsingLegacyAnimationComponent = !!i1893[84]
  i1892.m_isVolumetricText = !!i1893[85]
  request.r(i1893[86], i1893[87], 0, i1892, 'm_Material')
  i1892.m_EmojiFallbackSupport = !!i1893[88]
  i1892.m_Maskable = !!i1893[89]
  i1892.m_Color = new pc.Color(i1893[90], i1893[91], i1893[92], i1893[93])
  i1892.m_RaycastTarget = !!i1893[94]
  i1892.m_RaycastPadding = new pc.Vec4( i1893[95], i1893[96], i1893[97], i1893[98] )
  return i1892
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1900 = root || request.c( 'TMPro.VertexGradient' )
  var i1901 = data
  i1900.topLeft = new pc.Color(i1901[0], i1901[1], i1901[2], i1901[3])
  i1900.topRight = new pc.Color(i1901[4], i1901[5], i1901[6], i1901[7])
  i1900.bottomLeft = new pc.Color(i1901[8], i1901[9], i1901[10], i1901[11])
  i1900.bottomRight = new pc.Color(i1901[12], i1901[13], i1901[14], i1901[15])
  return i1900
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i1904 = root || request.c( 'Ply_Pool' )
  var i1905 = data
  var i1907 = i1905[0]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 1) {
    i1906.push( request.d('Ply_Pool+PoolAmount', i1907[i + 0]) );
  }
  i1904.poolAmounts = i1906
  request.r(i1905[1], i1905[2], 0, i1904, 'poolHolder')
  return i1904
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i1910 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i1911 = data
  i1910.type = i1911[0]
  i1910.amount = i1911[1]
  request.r(i1911[2], i1911[3], 0, i1910, 'gameUnit')
  return i1910
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i1912 = root || request.c( 'Ply_SoundManager' )
  var i1913 = data
  var i1915 = i1913[0]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 2) {
  request.r(i1915[i + 0], i1915[i + 1], 2, i1914, '')
  }
  i1912.audioClips = i1914
  request.r(i1913[1], i1913[2], 0, i1912, 'sound')
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1919 = data
  request.r(i1919[0], i1919[1], 0, i1918, 'clip')
  request.r(i1919[2], i1919[3], 0, i1918, 'outputAudioMixerGroup')
  i1918.playOnAwake = !!i1919[4]
  i1918.loop = !!i1919[5]
  i1918.time = i1919[6]
  i1918.volume = i1919[7]
  i1918.pitch = i1919[8]
  i1918.enabled = !!i1919[9]
  return i1918
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1920 = root || request.c( 'GameManager' )
  var i1921 = data
  i1920.isPlaying = !!i1921[0]
  i1920.isTutorial = !!i1921[1]
  i1920.isGotoStore = !!i1921[2]
  i1920.countMove = i1921[3]
  i1920.currentLayer = i1921[4]
  return i1920
}

Deserializers["UIManager"] = function (request, data, root) {
  var i1922 = root || request.c( 'UIManager' )
  var i1923 = data
  request.r(i1923[0], i1923[1], 0, i1922, 'winUI')
  request.r(i1923[2], i1923[3], 0, i1922, 'loseUI')
  request.r(i1923[4], i1923[5], 0, i1922, 'tutorial')
  request.r(i1923[6], i1923[7], 0, i1922, 'downloadBtn')
  request.r(i1923[8], i1923[9], 0, i1922, 'image')
  i1922.screenWidth = i1923[10]
  i1922.screenHeight = i1923[11]
  i1922.scaleHeightOnWidth = i1923[12]
  i1922.isVertical = !!i1923[13]
  request.r(i1923[14], i1923[15], 0, i1922, 'cam')
  i1922.useContinuousScaling = !!i1923[16]
  i1922.baseOrthographicSize = i1923[17]
  i1922.baseAspect = i1923[18]
  i1922.landscapeSize = i1923[19]
  i1922.defaultPortraitSize = i1923[20]
  var i1925 = i1923[21]
  var i1924 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.add(request.d('ScreenScaleStep', i1925[i + 0]));
  }
  i1922.discreteScaleSteps = i1924
  return i1922
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i1928 = root || request.c( 'ScreenScaleStep' )
  var i1929 = data
  i1928.heightOnWidthRatio = i1929[0]
  i1928.orthographicSize = i1929[1]
  return i1928
}

Deserializers["InputManager"] = function (request, data, root) {
  var i1930 = root || request.c( 'InputManager' )
  var i1931 = data
  i1930.groundPiece = UnityEngine.LayerMask.FromIntegerValue( i1931[0] )
  i1930.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i1931[1] )
  i1930.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i1931[2] )
  i1930.isDragging = !!i1931[3]
  return i1930
}

Deserializers["PhaseManager"] = function (request, data, root) {
  var i1932 = root || request.c( 'PhaseManager' )
  var i1933 = data
  var i1935 = i1933[0]
  var i1934 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.add(request.d('PhaseData', i1935[i + 0]));
  }
  i1932.phases = i1934
  i1932.transitionDuration = i1933[1]
  i1932.delayBeforeNextPhase = i1933[2]
  i1932.offScreenLeftX = i1933[3]
  i1932.offScreenRightX = i1933[4]
  i1932.centerScreenX = i1933[5]
  i1932.currentPhaseIndex = i1933[6]
  i1932.currentStepCount = i1933[7]
  return i1932
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i1938 = root || request.c( 'PhaseData' )
  var i1939 = data
  request.r(i1939[0], i1939[1], 0, i1938, 'phaseObject')
  i1938.totalSteps = i1939[2]
  i1938.onPhaseReady = request.d('UnityEngine.Events.UnityEvent', i1939[3], i1938.onPhaseReady)
  return i1938
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1940 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1941 = data
  i1940.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1941[0], i1940.m_PersistentCalls)
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1943 = data
  i1942.aspect = i1943[0]
  i1942.orthographic = !!i1943[1]
  i1942.orthographicSize = i1943[2]
  i1942.backgroundColor = new pc.Color(i1943[3], i1943[4], i1943[5], i1943[6])
  i1942.nearClipPlane = i1943[7]
  i1942.farClipPlane = i1943[8]
  i1942.fieldOfView = i1943[9]
  i1942.depth = i1943[10]
  i1942.clearFlags = i1943[11]
  i1942.cullingMask = i1943[12]
  i1942.rect = i1943[13]
  request.r(i1943[14], i1943[15], 0, i1942, 'targetTexture')
  i1942.usePhysicalProperties = !!i1943[16]
  i1942.focalLength = i1943[17]
  i1942.sensorSize = new pc.Vec2( i1943[18], i1943[19] )
  i1942.lensShift = new pc.Vec2( i1943[20], i1943[21] )
  i1942.gateFit = i1943[22]
  i1942.commandBufferCount = i1943[23]
  i1942.cameraType = i1943[24]
  i1942.enabled = !!i1943[25]
  return i1942
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1944 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1945 = data
  request.r(i1945[0], i1945[1], 0, i1944, 'm_FirstSelected')
  i1944.m_sendNavigationEvents = !!i1945[2]
  i1944.m_DragThreshold = i1945[3]
  return i1944
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1946 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1947 = data
  i1946.m_HorizontalAxis = i1947[0]
  i1946.m_VerticalAxis = i1947[1]
  i1946.m_SubmitButton = i1947[2]
  i1946.m_CancelButton = i1947[3]
  i1946.m_InputActionsPerSecond = i1947[4]
  i1946.m_RepeatDelay = i1947[5]
  i1946.m_ForceModuleActive = !!i1947[6]
  i1946.m_SendPointerHoverToParent = !!i1947[7]
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1949 = data
  i1948.center = new pc.Vec3( i1949[0], i1949[1], i1949[2] )
  i1948.radius = i1949[3]
  i1948.enabled = !!i1949[4]
  i1948.isTrigger = !!i1949[5]
  request.r(i1949[6], i1949[7], 0, i1948, 'material')
  return i1948
}

Deserializers["Item"] = function (request, data, root) {
  var i1950 = root || request.c( 'Item' )
  var i1951 = data
  request.r(i1951[0], i1951[1], 0, i1950, 'itemDraggable')
  request.r(i1951[2], i1951[3], 0, i1950, 'itemClickable')
  request.r(i1951[4], i1951[5], 0, i1950, 'itemStirring')
  request.r(i1951[6], i1951[7], 0, i1950, 'itemKnifeSpriteMaskCutter')
  request.r(i1951[8], i1951[9], 0, i1950, 'itemSpriteMaskPainter')
  request.r(i1951[10], i1951[11], 0, i1950, 'itemMoveToTarget')
  request.r(i1951[12], i1951[13], 0, i1950, 'animator')
  i1950.itemType = i1951[14]
  request.r(i1951[15], i1951[16], 0, i1950, 'spriteRenderer')
  i1950.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1951[17], i1950.onKnifeIn)
  return i1950
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i1952 = root || request.c( 'ItemDraggable' )
  var i1953 = data
  i1952.isDraggable = !!i1953[0]
  i1952.isUseOrderlayer = !!i1953[1]
  request.r(i1953[2], i1953[3], 0, i1952, 'returnTransform')
  i1952.setParentToReturnTransform = !!i1953[4]
  i1952.returnToExactReturnTransformPosition = !!i1953[5]
  i1952.targetItemType = i1953[6]
  request.r(i1953[7], i1953[8], 0, i1952, 'item')
  i1952.checkState = !!i1953[9]
  request.r(i1953[10], i1953[11], 0, i1952, 'shadowObject')
  i1952.liftOffset = i1953[12]
  i1952.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i1953[13], i1952.onBeginDrag)
  i1952.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i1953[14], i1952.onDropSuccess)
  i1952.onDropFail = request.d('UnityEngine.Events.UnityEvent', i1953[15], i1952.onDropFail)
  return i1952
}

Deserializers["Ply_MoveToTarget"] = function (request, data, root) {
  var i1954 = root || request.c( 'Ply_MoveToTarget' )
  var i1955 = data
  request.r(i1955[0], i1955[1], 0, i1954, 'defaultTarget')
  i1954.isMove2D = !!i1955[2]
  i1954.useVectorTarget = !!i1955[3]
  i1954.vectorTarget = new pc.Vec2( i1955[4], i1955[5] )
  i1954.duration = i1955[6]
  i1954.easeType = i1955[7]
  i1954.moveType = i1955[8]
  i1954.jumpPower = i1955[9]
  i1954.numJumps = i1955[10]
  i1954.rotate360DuringJump = !!i1955[11]
  i1954.setParentToTarget = !!i1955[12]
  i1954.onComplete = request.d('UnityEngine.Events.UnityEvent', i1955[13], i1954.onComplete)
  i1954.lockInputWhileMoving = !!i1955[14]
  return i1954
}

Deserializers["Sink"] = function (request, data, root) {
  var i1956 = root || request.c( 'Sink' )
  var i1957 = data
  i1956.isClose = !!i1957[0]
  i1956.isWaterDrop = !!i1957[1]
  i1956.isWaterIn = !!i1957[2]
  request.r(i1957[3], i1957[4], 0, i1956, 'waterDrop')
  request.r(i1957[5], i1957[6], 0, i1956, 'waterIn')
  i1956.onWaterIn = request.d('UnityEngine.Events.UnityEvent', i1957[7], i1956.onWaterIn)
  i1956.onNoWaterIn = request.d('UnityEngine.Events.UnityEvent', i1957[8], i1956.onNoWaterIn)
  request.r(i1957[9], i1957[10], 0, i1956, 'napNgoai')
  request.r(i1957[11], i1957[12], 0, i1956, 'napTrong')
  request.r(i1957[13], i1957[14], 0, i1956, 'itemDraggable')
  request.r(i1957[15], i1957[16], 0, i1956, 'itemClickable')
  request.r(i1957[17], i1957[18], 0, i1956, 'itemStirring')
  request.r(i1957[19], i1957[20], 0, i1956, 'itemKnifeSpriteMaskCutter')
  request.r(i1957[21], i1957[22], 0, i1956, 'itemSpriteMaskPainter')
  request.r(i1957[23], i1957[24], 0, i1956, 'itemMoveToTarget')
  request.r(i1957[25], i1957[26], 0, i1956, 'animator')
  i1956.itemType = i1957[27]
  request.r(i1957[28], i1957[29], 0, i1956, 'spriteRenderer')
  i1956.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1957[30], i1956.onKnifeIn)
  return i1956
}

Deserializers["Ply_ToggleEvent"] = function (request, data, root) {
  var i1958 = root || request.c( 'Ply_ToggleEvent' )
  var i1959 = data
  i1958.isOn = !!i1959[0]
  i1958.applyStateOnEnable = !!i1959[1]
  i1958.applyStateOnClick = !!i1959[2]
  request.r(i1959[3], i1959[4], 0, i1958, 'targetObject')
  i1958.onTurnOn = request.d('UnityEngine.Events.UnityEvent', i1959[5], i1958.onTurnOn)
  i1958.onTurnOff = request.d('UnityEngine.Events.UnityEvent', i1959[6], i1958.onTurnOff)
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1961 = data
  i1960.center = new pc.Vec3( i1961[0], i1961[1], i1961[2] )
  i1960.radius = i1961[3]
  i1960.height = i1961[4]
  i1960.direction = i1961[5]
  i1960.enabled = !!i1961[6]
  i1960.isTrigger = !!i1961[7]
  request.r(i1961[8], i1961[9], 0, i1960, 'material')
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1963 = data
  i1962.center = new pc.Vec3( i1963[0], i1963[1], i1963[2] )
  i1962.size = new pc.Vec3( i1963[3], i1963[4], i1963[5] )
  i1962.enabled = !!i1963[6]
  i1962.isTrigger = !!i1963[7]
  request.r(i1963[8], i1963[9], 0, i1962, 'material')
  return i1962
}

Deserializers["CuttingBoard"] = function (request, data, root) {
  var i1964 = root || request.c( 'CuttingBoard' )
  var i1965 = data
  request.r(i1965[0], i1965[1], 0, i1964, 'itemDraggable')
  request.r(i1965[2], i1965[3], 0, i1964, 'itemClickable')
  request.r(i1965[4], i1965[5], 0, i1964, 'itemStirring')
  request.r(i1965[6], i1965[7], 0, i1964, 'itemKnifeSpriteMaskCutter')
  request.r(i1965[8], i1965[9], 0, i1964, 'itemSpriteMaskPainter')
  request.r(i1965[10], i1965[11], 0, i1964, 'itemMoveToTarget')
  request.r(i1965[12], i1965[13], 0, i1964, 'animator')
  i1964.itemType = i1965[14]
  request.r(i1965[15], i1965[16], 0, i1964, 'spriteRenderer')
  i1964.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1965[17], i1964.onKnifeIn)
  return i1964
}

Deserializers["Knife"] = function (request, data, root) {
  var i1966 = root || request.c( 'Knife' )
  var i1967 = data
  request.r(i1967[0], i1967[1], 0, i1966, 'knifeIdle')
  request.r(i1967[2], i1967[3], 0, i1966, 'knifeOnDrag')
  request.r(i1967[4], i1967[5], 0, i1966, 'itemDraggable')
  request.r(i1967[6], i1967[7], 0, i1966, 'itemClickable')
  request.r(i1967[8], i1967[9], 0, i1966, 'itemStirring')
  request.r(i1967[10], i1967[11], 0, i1966, 'itemKnifeSpriteMaskCutter')
  request.r(i1967[12], i1967[13], 0, i1966, 'itemSpriteMaskPainter')
  request.r(i1967[14], i1967[15], 0, i1966, 'itemMoveToTarget')
  request.r(i1967[16], i1967[17], 0, i1966, 'animator')
  i1966.itemType = i1967[18]
  request.r(i1967[19], i1967[20], 0, i1966, 'spriteRenderer')
  i1966.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1967[21], i1966.onKnifeIn)
  return i1966
}

Deserializers["Ply_BobEffect"] = function (request, data, root) {
  var i1968 = root || request.c( 'Ply_BobEffect' )
  var i1969 = data
  i1968.playOnEnable = !!i1969[0]
  i1968.useLocalMove = !!i1969[1]
  i1968.bobOffset = new pc.Vec3( i1969[2], i1969[3], i1969[4] )
  i1968.duration = i1969[5]
  i1968.ease = i1969[6]
  return i1968
}

Deserializers["Ply_TimerEvent"] = function (request, data, root) {
  var i1970 = root || request.c( 'Ply_TimerEvent' )
  var i1971 = data
  i1970.duration = i1971[0]
  i1970.playOnEnable = !!i1971[1]
  i1970.ignoreTimeScale = !!i1971[2]
  i1970.autoDisableOnComplete = !!i1971[3]
  i1970.onTimerStart = request.d('UnityEngine.Events.UnityEvent', i1971[4], i1970.onTimerStart)
  i1970.onTimerComplete = request.d('UnityEngine.Events.UnityEvent', i1971[5], i1970.onTimerComplete)
  i1970.onTimerStop = request.d('UnityEngine.Events.UnityEvent', i1971[6], i1970.onTimerStop)
  return i1970
}

Deserializers["InWaterItem"] = function (request, data, root) {
  var i1972 = root || request.c( 'InWaterItem' )
  var i1973 = data
  request.r(i1973[0], i1973[1], 0, i1972, 'ply_TimerEvent')
  request.r(i1973[2], i1973[3], 0, i1972, 'ply_BobEffect')
  request.r(i1973[4], i1973[5], 0, i1972, 'collider1')
  request.r(i1973[6], i1973[7], 0, i1972, 'sink')
  i1972.isInWater = !!i1973[8]
  i1972.isOnPlate = !!i1973[9]
  request.r(i1973[10], i1973[11], 0, i1972, 'itemDraggable')
  request.r(i1973[12], i1973[13], 0, i1972, 'itemClickable')
  request.r(i1973[14], i1973[15], 0, i1972, 'itemStirring')
  request.r(i1973[16], i1973[17], 0, i1972, 'itemKnifeSpriteMaskCutter')
  request.r(i1973[18], i1973[19], 0, i1972, 'itemSpriteMaskPainter')
  request.r(i1973[20], i1973[21], 0, i1972, 'itemMoveToTarget')
  request.r(i1973[22], i1973[23], 0, i1972, 'animator')
  i1972.itemType = i1973[24]
  request.r(i1973[25], i1973[26], 0, i1972, 'spriteRenderer')
  i1972.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1973[27], i1972.onKnifeIn)
  return i1972
}

Deserializers["ItemClickable"] = function (request, data, root) {
  var i1974 = root || request.c( 'ItemClickable' )
  var i1975 = data
  i1974.requiredClicks = i1975[0]
  i1974.infiniteClick = !!i1975[1]
  i1974.canClick = !!i1975[2]
  i1974.disableAfterClick = !!i1975[3]
  i1974.onClick = request.d('UnityEngine.Events.UnityEvent', i1975[4], i1974.onClick)
  var i1977 = i1975[5]
  var i1976 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.add(request.d('UnityEngine.Events.UnityEvent', i1977[i + 0]));
  }
  i1974.sequentialOnClicks = i1976
  i1974.onClickComplete = request.d('UnityEngine.Events.UnityEvent', i1975[6], i1974.onClickComplete)
  return i1974
}

Deserializers["Bread"] = function (request, data, root) {
  var i1980 = root || request.c( 'Bread' )
  var i1981 = data
  request.r(i1981[0], i1981[1], 0, i1980, 'knife')
  request.r(i1981[2], i1981[3], 0, i1980, 'cuttingBoard')
  request.r(i1981[4], i1981[5], 0, i1980, 'targetPlate')
  i1980.isOnBoard = !!i1981[6]
  i1980.targetPlateType = i1981[7]
  i1980.flyToDish = i1981[8]
  i1980.isFlyToDishAnim = !!i1981[9]
  i1980.cantCutOnFirst = !!i1981[10]
  request.r(i1981[11], i1981[12], 0, i1980, 'itemDraggable')
  request.r(i1981[13], i1981[14], 0, i1980, 'itemClickable')
  request.r(i1981[15], i1981[16], 0, i1980, 'itemStirring')
  request.r(i1981[17], i1981[18], 0, i1980, 'itemKnifeSpriteMaskCutter')
  request.r(i1981[19], i1981[20], 0, i1980, 'itemSpriteMaskPainter')
  request.r(i1981[21], i1981[22], 0, i1980, 'itemMoveToTarget')
  request.r(i1981[23], i1981[24], 0, i1980, 'animator')
  i1980.itemType = i1981[25]
  request.r(i1981[26], i1981[27], 0, i1980, 'spriteRenderer')
  i1980.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1981[28], i1980.onKnifeIn)
  return i1980
}

Deserializers["ItemKnifeSpriteMaskCutter"] = function (request, data, root) {
  var i1982 = root || request.c( 'ItemKnifeSpriteMaskCutter' )
  var i1983 = data
  request.r(i1983[0], i1983[1], 0, i1982, 'knifeTransform')
  i1982.bladeLocalXOffset = i1983[2]
  i1982.leftX = i1983[3]
  i1982.rightX = i1983[4]
  i1982.cutStep = i1983[5]
  i1982.knifeDownLocalOffset = new pc.Vec3( i1983[6], i1983[7], i1983[8] )
  i1982.chopDuration = i1983[9]
  i1982.slideDuration = i1983[10]
  i1982.chopEase = i1983[11]
  i1982.slideEase = i1983[12]
  request.r(i1983[13], i1983[14], 0, i1982, 'knifeChildMask')
  request.r(i1983[15], i1983[16], 0, i1982, 'itemDone')
  request.r(i1983[17], i1983[18], 0, i1982, 'maskInteractionSpritesObject')
  i1982.maskWidthAtScaleOne = i1983[19]
  i1982.resetOnEnable = !!i1983[20]
  request.r(i1983[21], i1983[22], 0, i1982, 'knifeDoneTarget')
  i1982.knifeDoneMoveDuration = i1983[23]
  i1982.knifeDoneMoveEase = i1983[24]
  i1982.drawGizmos = !!i1983[25]
  request.r(i1983[26], i1983[27], 0, i1982, 'gizmoLocalRoot')
  i1982.gizmoHeight = i1983[28]
  i1982.gizmoTickHeight = i1983[29]
  i1982.gizmoLocalY = i1983[30]
  i1982.gizmoLocalZ = i1983[31]
  i1982.rangeGizmoColor = new pc.Color(i1983[32], i1983[33], i1983[34], i1983[35])
  i1982.leftGizmoColor = new pc.Color(i1983[36], i1983[37], i1983[38], i1983[39])
  i1982.rightGizmoColor = new pc.Color(i1983[40], i1983[41], i1983[42], i1983[43])
  i1982.currentCutGizmoColor = new pc.Color(i1983[44], i1983[45], i1983[46], i1983[47])
  i1982.bladeGizmoColor = new pc.Color(i1983[48], i1983[49], i1983[50], i1983[51])
  i1982.onCut = request.d('UnityEngine.Events.UnityEvent', i1983[52], i1982.onCut)
  i1982.onCutComplete = request.d('UnityEngine.Events.UnityEvent', i1983[53], i1982.onCutComplete)
  i1982.onKnifeArriveDoneTarget = request.d('UnityEngine.Events.UnityEvent', i1983[54], i1982.onKnifeArriveDoneTarget)
  return i1982
}

Deserializers["CuttingItem"] = function (request, data, root) {
  var i1984 = root || request.c( 'CuttingItem' )
  var i1985 = data
  request.r(i1985[0], i1985[1], 0, i1984, 'itemKnife')
  request.r(i1985[2], i1985[3], 0, i1984, 'itemBeforeCut')
  request.r(i1985[4], i1985[5], 0, i1984, 'itemWaitToCut')
  request.r(i1985[6], i1985[7], 0, i1984, 'knifeBeforeCut')
  request.r(i1985[8], i1985[9], 0, i1984, 'knife')
  request.r(i1985[10], i1985[11], 0, i1984, 'cuttingBoard')
  request.r(i1985[12], i1985[13], 0, i1984, 'targetPlate')
  i1984.isOnBoard = !!i1985[14]
  i1984.targetPlateType = i1985[15]
  i1984.flyToDish = i1985[16]
  i1984.isFlyToDishAnim = !!i1985[17]
  i1984.cantCutOnFirst = !!i1985[18]
  request.r(i1985[19], i1985[20], 0, i1984, 'itemDraggable')
  request.r(i1985[21], i1985[22], 0, i1984, 'itemClickable')
  request.r(i1985[23], i1985[24], 0, i1984, 'itemStirring')
  request.r(i1985[25], i1985[26], 0, i1984, 'itemKnifeSpriteMaskCutter')
  request.r(i1985[27], i1985[28], 0, i1984, 'itemSpriteMaskPainter')
  request.r(i1985[29], i1985[30], 0, i1984, 'itemMoveToTarget')
  request.r(i1985[31], i1985[32], 0, i1984, 'animator')
  i1984.itemType = i1985[33]
  request.r(i1985[34], i1985[35], 0, i1984, 'spriteRenderer')
  i1984.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1985[36], i1984.onKnifeIn)
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i1987 = data
  i1986.frontSortingLayerID = i1987[0]
  i1986.frontSortingOrder = i1987[1]
  i1986.backSortingLayerID = i1987[2]
  i1986.backSortingOrder = i1987[3]
  i1986.alphaCutoff = i1987[4]
  request.r(i1987[5], i1987[6], 0, i1986, 'sprite')
  i1986.tileMode = i1987[7]
  i1986.isCustomRangeActive = !!i1987[8]
  i1986.spriteSortPoint = i1987[9]
  i1986.enabled = !!i1987[10]
  request.r(i1987[11], i1987[12], 0, i1986, 'sharedMaterial')
  var i1989 = i1987[13]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 2) {
  request.r(i1989[i + 0], i1989[i + 1], 2, i1988, '')
  }
  i1986.sharedMaterials = i1988
  i1986.receiveShadows = !!i1987[14]
  i1986.shadowCastingMode = i1987[15]
  i1986.sortingLayerID = i1987[16]
  i1986.sortingOrder = i1987[17]
  i1986.lightmapIndex = i1987[18]
  i1986.lightmapSceneIndex = i1987[19]
  i1986.lightmapScaleOffset = new pc.Vec4( i1987[20], i1987[21], i1987[22], i1987[23] )
  i1986.lightProbeUsage = i1987[24]
  i1986.reflectionProbeUsage = i1987[25]
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1991 = data
  i1990.ambientIntensity = i1991[0]
  i1990.reflectionIntensity = i1991[1]
  i1990.ambientMode = i1991[2]
  i1990.ambientLight = new pc.Color(i1991[3], i1991[4], i1991[5], i1991[6])
  i1990.ambientSkyColor = new pc.Color(i1991[7], i1991[8], i1991[9], i1991[10])
  i1990.ambientGroundColor = new pc.Color(i1991[11], i1991[12], i1991[13], i1991[14])
  i1990.ambientEquatorColor = new pc.Color(i1991[15], i1991[16], i1991[17], i1991[18])
  i1990.fogColor = new pc.Color(i1991[19], i1991[20], i1991[21], i1991[22])
  i1990.fogEndDistance = i1991[23]
  i1990.fogStartDistance = i1991[24]
  i1990.fogDensity = i1991[25]
  i1990.fog = !!i1991[26]
  request.r(i1991[27], i1991[28], 0, i1990, 'skybox')
  i1990.fogMode = i1991[29]
  var i1993 = i1991[30]
  var i1992 = []
  for(var i = 0; i < i1993.length; i += 1) {
    i1992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1993[i + 0]) );
  }
  i1990.lightmaps = i1992
  i1990.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1991[31], i1990.lightProbes)
  i1990.lightmapsMode = i1991[32]
  i1990.mixedBakeMode = i1991[33]
  i1990.environmentLightingMode = i1991[34]
  i1990.ambientProbe = new pc.SphericalHarmonicsL2(i1991[35])
  i1990.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1991[36])
  i1990.useReferenceAmbientProbe = !!i1991[37]
  request.r(i1991[38], i1991[39], 0, i1990, 'customReflection')
  request.r(i1991[40], i1991[41], 0, i1990, 'defaultReflection')
  i1990.defaultReflectionMode = i1991[42]
  i1990.defaultReflectionResolution = i1991[43]
  i1990.sunLightObjectId = i1991[44]
  i1990.pixelLightCount = i1991[45]
  i1990.defaultReflectionHDR = !!i1991[46]
  i1990.hasLightDataAsset = !!i1991[47]
  i1990.hasManualGenerate = !!i1991[48]
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1997 = data
  request.r(i1997[0], i1997[1], 0, i1996, 'lightmapColor')
  request.r(i1997[2], i1997[3], 0, i1996, 'lightmapDirection')
  request.r(i1997[4], i1997[5], 0, i1996, 'shadowMask')
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1998 = root || new UnityEngine.LightProbes()
  var i1999 = data
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2007 = data
  var i2009 = i2007[0]
  var i2008 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2009[i + 0]));
  }
  i2006.ShaderCompilationErrors = i2008
  i2006.name = i2007[1]
  i2006.guid = i2007[2]
  var i2011 = i2007[3]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.push( i2011[i + 0] );
  }
  i2006.shaderDefinedKeywords = i2010
  var i2013 = i2007[4]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 1) {
    i2012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2013[i + 0]) );
  }
  i2006.passes = i2012
  var i2015 = i2007[5]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2015[i + 0]) );
  }
  i2006.usePasses = i2014
  var i2017 = i2007[6]
  var i2016 = []
  for(var i = 0; i < i2017.length; i += 1) {
    i2016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2017[i + 0]) );
  }
  i2006.defaultParameterValues = i2016
  request.r(i2007[7], i2007[8], 0, i2006, 'unityFallbackShader')
  i2006.readDepth = !!i2007[9]
  i2006.hasDepthOnlyPass = !!i2007[10]
  i2006.isCreatedByShaderGraph = !!i2007[11]
  i2006.disableBatching = !!i2007[12]
  i2006.compiled = !!i2007[13]
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2021 = data
  i2020.shaderName = i2021[0]
  i2020.errorMessage = i2021[1]
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2026 = root || new pc.UnityShaderPass()
  var i2027 = data
  i2026.id = i2027[0]
  i2026.subShaderIndex = i2027[1]
  i2026.name = i2027[2]
  i2026.passType = i2027[3]
  i2026.grabPassTextureName = i2027[4]
  i2026.usePass = !!i2027[5]
  i2026.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2027[6], i2026.zTest)
  i2026.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2027[7], i2026.zWrite)
  i2026.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2027[8], i2026.culling)
  i2026.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2027[9], i2026.blending)
  i2026.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2027[10], i2026.alphaBlending)
  i2026.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2027[11], i2026.colorWriteMask)
  i2026.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2027[12], i2026.offsetUnits)
  i2026.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2027[13], i2026.offsetFactor)
  i2026.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2027[14], i2026.stencilRef)
  i2026.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2027[15], i2026.stencilReadMask)
  i2026.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2027[16], i2026.stencilWriteMask)
  i2026.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2027[17], i2026.stencilOp)
  i2026.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2027[18], i2026.stencilOpFront)
  i2026.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2027[19], i2026.stencilOpBack)
  var i2029 = i2027[20]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2029[i + 0]) );
  }
  i2026.tags = i2028
  var i2031 = i2027[21]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.push( i2031[i + 0] );
  }
  i2026.passDefinedKeywords = i2030
  var i2033 = i2027[22]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 1) {
    i2032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2033[i + 0]) );
  }
  i2026.passDefinedKeywordGroups = i2032
  var i2035 = i2027[23]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2035[i + 0]) );
  }
  i2026.variants = i2034
  var i2037 = i2027[24]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2037[i + 0]) );
  }
  i2026.excludedVariants = i2036
  i2026.hasDepthReader = !!i2027[25]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2039 = data
  i2038.val = i2039[0]
  i2038.name = i2039[1]
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2041 = data
  i2040.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2041[0], i2040.src)
  i2040.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2041[1], i2040.dst)
  i2040.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2041[2], i2040.op)
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2043 = data
  i2042.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2043[0], i2042.pass)
  i2042.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2043[1], i2042.fail)
  i2042.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2043[2], i2042.zFail)
  i2042.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2043[3], i2042.comp)
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2047 = data
  i2046.name = i2047[0]
  i2046.value = i2047[1]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2051 = data
  var i2053 = i2051[0]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.push( i2053[i + 0] );
  }
  i2050.keywords = i2052
  i2050.hasDiscard = !!i2051[1]
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2057 = data
  i2056.passId = i2057[0]
  i2056.subShaderIndex = i2057[1]
  var i2059 = i2057[2]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( i2059[i + 0] );
  }
  i2056.keywords = i2058
  i2056.vertexProgram = i2057[3]
  i2056.fragmentProgram = i2057[4]
  i2056.exportedForWebGl2 = !!i2057[5]
  i2056.readDepth = !!i2057[6]
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2063 = data
  request.r(i2063[0], i2063[1], 0, i2062, 'shader')
  i2062.pass = i2063[2]
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2067 = data
  i2066.name = i2067[0]
  i2066.type = i2067[1]
  i2066.value = new pc.Vec4( i2067[2], i2067[3], i2067[4], i2067[5] )
  i2066.textureValue = i2067[6]
  i2066.shaderPropertyFlag = i2067[7]
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2069 = data
  i2068.name = i2069[0]
  request.r(i2069[1], i2069[2], 0, i2068, 'texture')
  i2068.aabb = i2069[3]
  i2068.vertices = i2069[4]
  i2068.triangles = i2069[5]
  i2068.textureRect = UnityEngine.Rect.MinMaxRect(i2069[6], i2069[7], i2069[8], i2069[9])
  i2068.packedRect = UnityEngine.Rect.MinMaxRect(i2069[10], i2069[11], i2069[12], i2069[13])
  i2068.border = new pc.Vec4( i2069[14], i2069[15], i2069[16], i2069[17] )
  i2068.transparency = i2069[18]
  i2068.bounds = i2069[19]
  i2068.pixelsPerUnit = i2069[20]
  i2068.textureWidth = i2069[21]
  i2068.textureHeight = i2069[22]
  i2068.nativeSize = new pc.Vec2( i2069[23], i2069[24] )
  i2068.pivot = new pc.Vec2( i2069[25], i2069[26] )
  i2068.textureRectOffset = new pc.Vec2( i2069[27], i2069[28] )
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2071 = data
  i2070.name = i2071[0]
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2073 = data
  i2072.name = i2073[0]
  i2072.wrapMode = i2073[1]
  i2072.isLooping = !!i2073[2]
  i2072.length = i2073[3]
  var i2075 = i2073[4]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 1) {
    i2074.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2075[i + 0]) );
  }
  i2072.curves = i2074
  var i2077 = i2073[5]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2077[i + 0]) );
  }
  i2072.events = i2076
  i2072.halfPrecision = !!i2073[6]
  i2072._frameRate = i2073[7]
  i2072.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2073[8], i2072.localBounds)
  i2072.hasMuscleCurves = !!i2073[9]
  var i2079 = i2073[10]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( i2079[i + 0] );
  }
  i2072.clipMuscleConstant = i2078
  i2072.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2073[11], i2072.clipBindingConstant)
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2083 = data
  i2082.path = i2083[0]
  i2082.hash = i2083[1]
  i2082.componentType = i2083[2]
  i2082.property = i2083[3]
  i2082.keys = i2083[4]
  var i2085 = i2083[5]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2085[i + 0]) );
  }
  i2082.objectReferenceKeys = i2084
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2089 = data
  i2088.time = i2089[0]
  request.r(i2089[1], i2089[2], 0, i2088, 'value')
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2093 = data
  i2092.functionName = i2093[0]
  i2092.floatParameter = i2093[1]
  i2092.intParameter = i2093[2]
  i2092.stringParameter = i2093[3]
  request.r(i2093[4], i2093[5], 0, i2092, 'objectReferenceParameter')
  i2092.time = i2093[6]
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2095 = data
  i2094.center = new pc.Vec3( i2095[0], i2095[1], i2095[2] )
  i2094.extends = new pc.Vec3( i2095[3], i2095[4], i2095[5] )
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2099 = data
  var i2101 = i2099[0]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( i2101[i + 0] );
  }
  i2098.genericBindings = i2100
  var i2103 = i2099[1]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( i2103[i + 0] );
  }
  i2098.pptrCurveMapping = i2102
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2105 = data
  i2104.name = i2105[0]
  i2104.ascent = i2105[1]
  i2104.originalLineHeight = i2105[2]
  i2104.fontSize = i2105[3]
  var i2107 = i2105[4]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2107[i + 0]) );
  }
  i2104.characterInfo = i2106
  request.r(i2105[5], i2105[6], 0, i2104, 'texture')
  i2104.originalFontSize = i2105[7]
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2111 = data
  i2110.index = i2111[0]
  i2110.advance = i2111[1]
  i2110.bearing = i2111[2]
  i2110.glyphWidth = i2111[3]
  i2110.glyphHeight = i2111[4]
  i2110.minX = i2111[5]
  i2110.maxX = i2111[6]
  i2110.minY = i2111[7]
  i2110.maxY = i2111[8]
  i2110.uvBottomLeftX = i2111[9]
  i2110.uvBottomLeftY = i2111[10]
  i2110.uvBottomRightX = i2111[11]
  i2110.uvBottomRightY = i2111[12]
  i2110.uvTopLeftX = i2111[13]
  i2110.uvTopLeftY = i2111[14]
  i2110.uvTopRightX = i2111[15]
  i2110.uvTopRightY = i2111[16]
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2113 = data
  i2112.name = i2113[0]
  var i2115 = i2113[1]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2115[i + 0]) );
  }
  i2112.layers = i2114
  var i2117 = i2113[2]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2117[i + 0]) );
  }
  i2112.parameters = i2116
  i2112.animationClips = i2113[3]
  i2112.avatarUnsupported = i2113[4]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2121 = data
  i2120.name = i2121[0]
  i2120.defaultWeight = i2121[1]
  i2120.blendingMode = i2121[2]
  i2120.avatarMask = i2121[3]
  i2120.syncedLayerIndex = i2121[4]
  i2120.syncedLayerAffectsTiming = !!i2121[5]
  i2120.syncedLayers = i2121[6]
  i2120.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2121[7], i2120.stateMachine)
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2123 = data
  i2122.id = i2123[0]
  i2122.name = i2123[1]
  i2122.path = i2123[2]
  var i2125 = i2123[3]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2125[i + 0]) );
  }
  i2122.states = i2124
  var i2127 = i2123[4]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2127[i + 0]) );
  }
  i2122.machines = i2126
  var i2129 = i2123[5]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2129[i + 0]) );
  }
  i2122.entryStateTransitions = i2128
  var i2131 = i2123[6]
  var i2130 = []
  for(var i = 0; i < i2131.length; i += 1) {
    i2130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2131[i + 0]) );
  }
  i2122.exitStateTransitions = i2130
  var i2133 = i2123[7]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2133[i + 0]) );
  }
  i2122.anyStateTransitions = i2132
  i2122.defaultStateId = i2123[8]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2137 = data
  i2136.id = i2137[0]
  i2136.name = i2137[1]
  i2136.cycleOffset = i2137[2]
  i2136.cycleOffsetParameter = i2137[3]
  i2136.cycleOffsetParameterActive = !!i2137[4]
  i2136.mirror = !!i2137[5]
  i2136.mirrorParameter = i2137[6]
  i2136.mirrorParameterActive = !!i2137[7]
  i2136.motionId = i2137[8]
  i2136.nameHash = i2137[9]
  i2136.fullPathHash = i2137[10]
  i2136.speed = i2137[11]
  i2136.speedParameter = i2137[12]
  i2136.speedParameterActive = !!i2137[13]
  i2136.tag = i2137[14]
  i2136.tagHash = i2137[15]
  i2136.writeDefaultValues = !!i2137[16]
  var i2139 = i2137[17]
  var i2138 = []
  for(var i = 0; i < i2139.length; i += 2) {
  request.r(i2139[i + 0], i2139[i + 1], 2, i2138, '')
  }
  i2136.behaviours = i2138
  var i2141 = i2137[18]
  var i2140 = []
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2141[i + 0]) );
  }
  i2136.transitions = i2140
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2147 = data
  i2146.fullPath = i2147[0]
  i2146.canTransitionToSelf = !!i2147[1]
  i2146.duration = i2147[2]
  i2146.exitTime = i2147[3]
  i2146.hasExitTime = !!i2147[4]
  i2146.hasFixedDuration = !!i2147[5]
  i2146.interruptionSource = i2147[6]
  i2146.offset = i2147[7]
  i2146.orderedInterruption = !!i2147[8]
  i2146.destinationStateId = i2147[9]
  i2146.isExit = !!i2147[10]
  i2146.mute = !!i2147[11]
  i2146.solo = !!i2147[12]
  var i2149 = i2147[13]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2149[i + 0]) );
  }
  i2146.conditions = i2148
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2155 = data
  i2154.destinationStateId = i2155[0]
  i2154.isExit = !!i2155[1]
  i2154.mute = !!i2155[2]
  i2154.solo = !!i2155[3]
  var i2157 = i2155[4]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2157[i + 0]) );
  }
  i2154.conditions = i2156
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2161 = data
  i2160.defaultBool = !!i2161[0]
  i2160.defaultFloat = i2161[1]
  i2160.defaultInt = i2161[2]
  i2160.name = i2161[3]
  i2160.nameHash = i2161[4]
  i2160.type = i2161[5]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2165 = data
  i2164.mode = i2165[0]
  i2164.parameter = i2165[1]
  i2164.threshold = i2165[2]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2167 = data
  i2166.name = i2167[0]
  i2166.bytes64 = i2167[1]
  i2166.data = i2167[2]
  return i2166
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2168 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2169 = data
  i2168.normalStyle = i2169[0]
  i2168.normalSpacingOffset = i2169[1]
  i2168.boldStyle = i2169[2]
  i2168.boldSpacing = i2169[3]
  i2168.italicStyle = i2169[4]
  i2168.tabSize = i2169[5]
  request.r(i2169[6], i2169[7], 0, i2168, 'atlas')
  i2168.m_SourceFontFileGUID = i2169[8]
  i2168.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2169[9], i2168.m_CreationSettings)
  request.r(i2169[10], i2169[11], 0, i2168, 'm_SourceFontFile')
  i2168.m_SourceFontFilePath = i2169[12]
  i2168.m_AtlasPopulationMode = i2169[13]
  i2168.InternalDynamicOS = !!i2169[14]
  var i2171 = i2169[15]
  var i2170 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2171.length; i += 1) {
    i2170.add(request.d('UnityEngine.TextCore.Glyph', i2171[i + 0]));
  }
  i2168.m_GlyphTable = i2170
  var i2173 = i2169[16]
  var i2172 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.add(request.d('TMPro.TMP_Character', i2173[i + 0]));
  }
  i2168.m_CharacterTable = i2172
  var i2175 = i2169[17]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 2) {
  request.r(i2175[i + 0], i2175[i + 1], 2, i2174, '')
  }
  i2168.m_AtlasTextures = i2174
  i2168.m_AtlasTextureIndex = i2169[18]
  i2168.m_IsMultiAtlasTexturesEnabled = !!i2169[19]
  i2168.m_GetFontFeatures = !!i2169[20]
  i2168.m_ClearDynamicDataOnBuild = !!i2169[21]
  i2168.m_AtlasWidth = i2169[22]
  i2168.m_AtlasHeight = i2169[23]
  i2168.m_AtlasPadding = i2169[24]
  i2168.m_AtlasRenderMode = i2169[25]
  var i2177 = i2169[26]
  var i2176 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.add(request.d('UnityEngine.TextCore.GlyphRect', i2177[i + 0]));
  }
  i2168.m_UsedGlyphRects = i2176
  var i2179 = i2169[27]
  var i2178 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.add(request.d('UnityEngine.TextCore.GlyphRect', i2179[i + 0]));
  }
  i2168.m_FreeGlyphRects = i2178
  i2168.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2169[28], i2168.m_FontFeatureTable)
  i2168.m_ShouldReimportFontFeatures = !!i2169[29]
  var i2181 = i2169[30]
  var i2180 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2181.length; i += 2) {
  request.r(i2181[i + 0], i2181[i + 1], 1, i2180, '')
  }
  i2168.m_FallbackFontAssetTable = i2180
  var i2183 = i2169[31]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.push( request.d('TMPro.TMP_FontWeightPair', i2183[i + 0]) );
  }
  i2168.m_FontWeightTable = i2182
  var i2185 = i2169[32]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.push( request.d('TMPro.TMP_FontWeightPair', i2185[i + 0]) );
  }
  i2168.fontWeights = i2184
  i2168.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2169[33], i2168.m_fontInfo)
  var i2187 = i2169[34]
  var i2186 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.add(request.d('TMPro.TMP_Glyph', i2187[i + 0]));
  }
  i2168.m_glyphInfoList = i2186
  i2168.m_KerningTable = request.d('TMPro.KerningTable', i2169[35], i2168.m_KerningTable)
  var i2189 = i2169[36]
  var i2188 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2189.length; i += 2) {
  request.r(i2189[i + 0], i2189[i + 1], 1, i2188, '')
  }
  i2168.fallbackFontAssets = i2188
  i2168.m_Version = i2169[37]
  i2168.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2169[38], i2168.m_FaceInfo)
  request.r(i2169[39], i2169[40], 0, i2168, 'm_Material')
  return i2168
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2190 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2191 = data
  i2190.sourceFontFileName = i2191[0]
  i2190.sourceFontFileGUID = i2191[1]
  i2190.faceIndex = i2191[2]
  i2190.pointSizeSamplingMode = i2191[3]
  i2190.pointSize = i2191[4]
  i2190.padding = i2191[5]
  i2190.paddingMode = i2191[6]
  i2190.packingMode = i2191[7]
  i2190.atlasWidth = i2191[8]
  i2190.atlasHeight = i2191[9]
  i2190.characterSetSelectionMode = i2191[10]
  i2190.characterSequence = i2191[11]
  i2190.referencedFontAssetGUID = i2191[12]
  i2190.referencedTextAssetGUID = i2191[13]
  i2190.fontStyle = i2191[14]
  i2190.fontStyleModifier = i2191[15]
  i2190.renderMode = i2191[16]
  i2190.includeFontFeatures = !!i2191[17]
  return i2190
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2194 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2195 = data
  i2194.m_Index = i2195[0]
  i2194.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2195[1], i2194.m_Metrics)
  i2194.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2195[2], i2194.m_GlyphRect)
  i2194.m_Scale = i2195[3]
  i2194.m_AtlasIndex = i2195[4]
  i2194.m_ClassDefinitionType = i2195[5]
  return i2194
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2196 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2197 = data
  i2196.m_Width = i2197[0]
  i2196.m_Height = i2197[1]
  i2196.m_HorizontalBearingX = i2197[2]
  i2196.m_HorizontalBearingY = i2197[3]
  i2196.m_HorizontalAdvance = i2197[4]
  return i2196
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2198 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2199 = data
  i2198.m_X = i2199[0]
  i2198.m_Y = i2199[1]
  i2198.m_Width = i2199[2]
  i2198.m_Height = i2199[3]
  return i2198
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2202 = root || request.c( 'TMPro.TMP_Character' )
  var i2203 = data
  i2202.m_ElementType = i2203[0]
  i2202.m_Unicode = i2203[1]
  i2202.m_GlyphIndex = i2203[2]
  i2202.m_Scale = i2203[3]
  return i2202
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2208 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2209 = data
  var i2211 = i2209[0]
  var i2210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.add(request.d('TMPro.MultipleSubstitutionRecord', i2211[i + 0]));
  }
  i2208.m_MultipleSubstitutionRecords = i2210
  var i2213 = i2209[1]
  var i2212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.add(request.d('TMPro.LigatureSubstitutionRecord', i2213[i + 0]));
  }
  i2208.m_LigatureSubstitutionRecords = i2212
  var i2215 = i2209[2]
  var i2214 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2215.length; i += 1) {
    i2214.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2215[i + 0]));
  }
  i2208.m_GlyphPairAdjustmentRecords = i2214
  var i2217 = i2209[3]
  var i2216 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2217[i + 0]));
  }
  i2208.m_MarkToBaseAdjustmentRecords = i2216
  var i2219 = i2209[4]
  var i2218 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2219.length; i += 1) {
    i2218.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2219[i + 0]));
  }
  i2208.m_MarkToMarkAdjustmentRecords = i2218
  return i2208
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2222 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2223 = data
  i2222.m_TargetGlyphID = i2223[0]
  i2222.m_SubstituteGlyphIDs = i2223[1]
  return i2222
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2226 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2227 = data
  i2226.m_ComponentGlyphIDs = i2227[0]
  i2226.m_LigatureGlyphID = i2227[1]
  return i2226
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2230 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2231 = data
  i2230.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2231[0], i2230.m_FirstAdjustmentRecord)
  i2230.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2231[1], i2230.m_SecondAdjustmentRecord)
  i2230.m_FeatureLookupFlags = i2231[2]
  return i2230
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2234 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2235 = data
  i2234.m_BaseGlyphID = i2235[0]
  i2234.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2235[1], i2234.m_BaseGlyphAnchorPoint)
  i2234.m_MarkGlyphID = i2235[2]
  i2234.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2235[3], i2234.m_MarkPositionAdjustment)
  return i2234
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2238 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2239 = data
  i2238.m_BaseMarkGlyphID = i2239[0]
  i2238.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2239[1], i2238.m_BaseMarkGlyphAnchorPoint)
  i2238.m_CombiningMarkGlyphID = i2239[2]
  i2238.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2239[3], i2238.m_CombiningMarkPositionAdjustment)
  return i2238
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2244 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2245 = data
  request.r(i2245[0], i2245[1], 0, i2244, 'regularTypeface')
  request.r(i2245[2], i2245[3], 0, i2244, 'italicTypeface')
  return i2244
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2246 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2247 = data
  i2246.Name = i2247[0]
  i2246.PointSize = i2247[1]
  i2246.Scale = i2247[2]
  i2246.CharacterCount = i2247[3]
  i2246.LineHeight = i2247[4]
  i2246.Baseline = i2247[5]
  i2246.Ascender = i2247[6]
  i2246.CapHeight = i2247[7]
  i2246.Descender = i2247[8]
  i2246.CenterLine = i2247[9]
  i2246.SuperscriptOffset = i2247[10]
  i2246.SubscriptOffset = i2247[11]
  i2246.SubSize = i2247[12]
  i2246.Underline = i2247[13]
  i2246.UnderlineThickness = i2247[14]
  i2246.strikethrough = i2247[15]
  i2246.strikethroughThickness = i2247[16]
  i2246.TabWidth = i2247[17]
  i2246.Padding = i2247[18]
  i2246.AtlasWidth = i2247[19]
  i2246.AtlasHeight = i2247[20]
  return i2246
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2250 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2251 = data
  i2250.id = i2251[0]
  i2250.x = i2251[1]
  i2250.y = i2251[2]
  i2250.width = i2251[3]
  i2250.height = i2251[4]
  i2250.xOffset = i2251[5]
  i2250.yOffset = i2251[6]
  i2250.xAdvance = i2251[7]
  i2250.scale = i2251[8]
  return i2250
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2252 = root || request.c( 'TMPro.KerningTable' )
  var i2253 = data
  var i2255 = i2253[0]
  var i2254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.add(request.d('TMPro.KerningPair', i2255[i + 0]));
  }
  i2252.kerningPairs = i2254
  return i2252
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2258 = root || request.c( 'TMPro.KerningPair' )
  var i2259 = data
  i2258.xOffset = i2259[0]
  i2258.m_FirstGlyph = i2259[1]
  i2258.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2259[2], i2258.m_FirstGlyphAdjustments)
  i2258.m_SecondGlyph = i2259[3]
  i2258.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2259[4], i2258.m_SecondGlyphAdjustments)
  i2258.m_IgnoreSpacingAdjustments = !!i2259[5]
  return i2258
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2260 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2261 = data
  i2260.m_FaceIndex = i2261[0]
  i2260.m_FamilyName = i2261[1]
  i2260.m_StyleName = i2261[2]
  i2260.m_PointSize = i2261[3]
  i2260.m_Scale = i2261[4]
  i2260.m_UnitsPerEM = i2261[5]
  i2260.m_LineHeight = i2261[6]
  i2260.m_AscentLine = i2261[7]
  i2260.m_CapLine = i2261[8]
  i2260.m_MeanLine = i2261[9]
  i2260.m_Baseline = i2261[10]
  i2260.m_DescentLine = i2261[11]
  i2260.m_SuperscriptOffset = i2261[12]
  i2260.m_SuperscriptSize = i2261[13]
  i2260.m_SubscriptOffset = i2261[14]
  i2260.m_SubscriptSize = i2261[15]
  i2260.m_UnderlineOffset = i2261[16]
  i2260.m_UnderlineThickness = i2261[17]
  i2260.m_StrikethroughOffset = i2261[18]
  i2260.m_StrikethroughThickness = i2261[19]
  i2260.m_TabWidth = i2261[20]
  return i2260
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2262 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2263 = data
  i2262.useSafeMode = !!i2263[0]
  i2262.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2263[1], i2262.safeModeOptions)
  i2262.timeScale = i2263[2]
  i2262.unscaledTimeScale = i2263[3]
  i2262.useSmoothDeltaTime = !!i2263[4]
  i2262.maxSmoothUnscaledTime = i2263[5]
  i2262.rewindCallbackMode = i2263[6]
  i2262.showUnityEditorReport = !!i2263[7]
  i2262.logBehaviour = i2263[8]
  i2262.drawGizmos = !!i2263[9]
  i2262.defaultRecyclable = !!i2263[10]
  i2262.defaultAutoPlay = i2263[11]
  i2262.defaultUpdateType = i2263[12]
  i2262.defaultTimeScaleIndependent = !!i2263[13]
  i2262.defaultEaseType = i2263[14]
  i2262.defaultEaseOvershootOrAmplitude = i2263[15]
  i2262.defaultEasePeriod = i2263[16]
  i2262.defaultAutoKill = !!i2263[17]
  i2262.defaultLoopType = i2263[18]
  i2262.debugMode = !!i2263[19]
  i2262.debugStoreTargetId = !!i2263[20]
  i2262.showPreviewPanel = !!i2263[21]
  i2262.storeSettingsLocation = i2263[22]
  i2262.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2263[23], i2262.modules)
  i2262.createASMDEF = !!i2263[24]
  i2262.showPlayingTweens = !!i2263[25]
  i2262.showPausedTweens = !!i2263[26]
  return i2262
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2264 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2265 = data
  i2264.logBehaviour = i2265[0]
  i2264.nestedTweenFailureBehaviour = i2265[1]
  return i2264
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2266 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2267 = data
  i2266.showPanel = !!i2267[0]
  i2266.audioEnabled = !!i2267[1]
  i2266.physicsEnabled = !!i2267[2]
  i2266.physics2DEnabled = !!i2267[3]
  i2266.spriteEnabled = !!i2267[4]
  i2266.uiEnabled = !!i2267[5]
  i2266.uiToolkitEnabled = !!i2267[6]
  i2266.textMeshProEnabled = !!i2267[7]
  i2266.tk2DEnabled = !!i2267[8]
  i2266.deAudioEnabled = !!i2267[9]
  i2266.deUnityExtendedEnabled = !!i2267[10]
  i2266.epoOutlineEnabled = !!i2267[11]
  return i2266
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2268 = root || request.c( 'TMPro.TMP_Settings' )
  var i2269 = data
  i2268.assetVersion = i2269[0]
  i2268.m_TextWrappingMode = i2269[1]
  i2268.m_enableKerning = !!i2269[2]
  var i2271 = i2269[3]
  var i2270 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.add(i2271[i + 0]);
  }
  i2268.m_ActiveFontFeatures = i2270
  i2268.m_enableExtraPadding = !!i2269[4]
  i2268.m_enableTintAllSprites = !!i2269[5]
  i2268.m_enableParseEscapeCharacters = !!i2269[6]
  i2268.m_EnableRaycastTarget = !!i2269[7]
  i2268.m_GetFontFeaturesAtRuntime = !!i2269[8]
  i2268.m_missingGlyphCharacter = i2269[9]
  i2268.m_ClearDynamicDataOnBuild = !!i2269[10]
  i2268.m_warningsDisabled = !!i2269[11]
  request.r(i2269[12], i2269[13], 0, i2268, 'm_defaultFontAsset')
  i2268.m_defaultFontAssetPath = i2269[14]
  i2268.m_defaultFontSize = i2269[15]
  i2268.m_defaultAutoSizeMinRatio = i2269[16]
  i2268.m_defaultAutoSizeMaxRatio = i2269[17]
  i2268.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2269[18], i2269[19] )
  i2268.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2269[20], i2269[21] )
  i2268.m_autoSizeTextContainer = !!i2269[22]
  i2268.m_IsTextObjectScaleStatic = !!i2269[23]
  var i2273 = i2269[24]
  var i2272 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2273.length; i += 2) {
  request.r(i2273[i + 0], i2273[i + 1], 1, i2272, '')
  }
  i2268.m_fallbackFontAssets = i2272
  i2268.m_matchMaterialPreset = !!i2269[25]
  i2268.m_HideSubTextObjects = !!i2269[26]
  request.r(i2269[27], i2269[28], 0, i2268, 'm_defaultSpriteAsset')
  i2268.m_defaultSpriteAssetPath = i2269[29]
  i2268.m_enableEmojiSupport = !!i2269[30]
  i2268.m_MissingCharacterSpriteUnicode = i2269[31]
  var i2275 = i2269[32]
  var i2274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2275.length; i += 2) {
  request.r(i2275[i + 0], i2275[i + 1], 1, i2274, '')
  }
  i2268.m_EmojiFallbackTextAssets = i2274
  i2268.m_defaultColorGradientPresetsPath = i2269[33]
  request.r(i2269[34], i2269[35], 0, i2268, 'm_defaultStyleSheet')
  i2268.m_StyleSheetsResourcePath = i2269[36]
  request.r(i2269[37], i2269[38], 0, i2268, 'm_leadingCharacters')
  request.r(i2269[39], i2269[40], 0, i2268, 'm_followingCharacters')
  i2268.m_UseModernHangulLineBreakingRules = !!i2269[41]
  return i2268
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2278 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2279 = data
  i2278.m_GlyphIndex = i2279[0]
  i2278.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2279[1], i2278.m_GlyphValueRecord)
  return i2278
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2280 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2281 = data
  i2280.m_XPlacement = i2281[0]
  i2280.m_YPlacement = i2281[1]
  i2280.m_XAdvance = i2281[2]
  i2280.m_YAdvance = i2281[3]
  return i2280
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2282 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2283 = data
  request.r(i2283[0], i2283[1], 0, i2282, 'spriteSheet')
  var i2285 = i2283[2]
  var i2284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2285.length; i += 1) {
    i2284.add(request.d('TMPro.TMP_Sprite', i2285[i + 0]));
  }
  i2282.spriteInfoList = i2284
  var i2287 = i2283[3]
  var i2286 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2287.length; i += 2) {
  request.r(i2287[i + 0], i2287[i + 1], 1, i2286, '')
  }
  i2282.fallbackSpriteAssets = i2286
  var i2289 = i2283[4]
  var i2288 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2289.length; i += 1) {
    i2288.add(request.d('TMPro.TMP_SpriteCharacter', i2289[i + 0]));
  }
  i2282.m_SpriteCharacterTable = i2288
  var i2291 = i2283[5]
  var i2290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2291.length; i += 1) {
    i2290.add(request.d('TMPro.TMP_SpriteGlyph', i2291[i + 0]));
  }
  i2282.m_GlyphTable = i2290
  i2282.m_Version = i2283[6]
  i2282.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2283[7], i2282.m_FaceInfo)
  request.r(i2283[8], i2283[9], 0, i2282, 'm_Material')
  return i2282
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2294 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2295 = data
  i2294.name = i2295[0]
  i2294.hashCode = i2295[1]
  i2294.unicode = i2295[2]
  i2294.pivot = new pc.Vec2( i2295[3], i2295[4] )
  request.r(i2295[5], i2295[6], 0, i2294, 'sprite')
  i2294.id = i2295[7]
  i2294.x = i2295[8]
  i2294.y = i2295[9]
  i2294.width = i2295[10]
  i2294.height = i2295[11]
  i2294.xOffset = i2295[12]
  i2294.yOffset = i2295[13]
  i2294.xAdvance = i2295[14]
  i2294.scale = i2295[15]
  return i2294
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2300 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2301 = data
  i2300.m_Name = i2301[0]
  i2300.m_ElementType = i2301[1]
  i2300.m_Unicode = i2301[2]
  i2300.m_GlyphIndex = i2301[3]
  i2300.m_Scale = i2301[4]
  return i2300
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2304 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2305 = data
  request.r(i2305[0], i2305[1], 0, i2304, 'sprite')
  i2304.m_Index = i2305[2]
  i2304.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2305[3], i2304.m_Metrics)
  i2304.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2305[4], i2304.m_GlyphRect)
  i2304.m_Scale = i2305[5]
  i2304.m_AtlasIndex = i2305[6]
  i2304.m_ClassDefinitionType = i2305[7]
  return i2304
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2306 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2307 = data
  var i2309 = i2307[0]
  var i2308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.add(request.d('TMPro.TMP_Style', i2309[i + 0]));
  }
  i2306.m_StyleList = i2308
  return i2306
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2312 = root || request.c( 'TMPro.TMP_Style' )
  var i2313 = data
  i2312.m_Name = i2313[0]
  i2312.m_HashCode = i2313[1]
  i2312.m_OpeningDefinition = i2313[2]
  i2312.m_ClosingDefinition = i2313[3]
  i2312.m_OpeningTagArray = i2313[4]
  i2312.m_ClosingTagArray = i2313[5]
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2315 = data
  var i2317 = i2315[0]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2317[i + 0]) );
  }
  i2314.files = i2316
  i2314.componentToPrefabIds = i2315[1]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2321 = data
  i2320.path = i2321[0]
  request.r(i2321[1], i2321[2], 0, i2320, 'unityObject')
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2323 = data
  var i2325 = i2323[0]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2325[i + 0]) );
  }
  i2322.scriptsExecutionOrder = i2324
  var i2327 = i2323[1]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2327[i + 0]) );
  }
  i2322.sortingLayers = i2326
  var i2329 = i2323[2]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2329[i + 0]) );
  }
  i2322.cullingLayers = i2328
  i2322.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2323[3], i2322.timeSettings)
  i2322.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2323[4], i2322.physicsSettings)
  i2322.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2323[5], i2322.physics2DSettings)
  i2322.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2323[6], i2322.qualitySettings)
  i2322.enableRealtimeShadows = !!i2323[7]
  i2322.enableAutoInstancing = !!i2323[8]
  i2322.enableStaticBatching = !!i2323[9]
  i2322.enableDynamicBatching = !!i2323[10]
  i2322.lightmapEncodingQuality = i2323[11]
  i2322.desiredColorSpace = i2323[12]
  var i2331 = i2323[13]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 1) {
    i2330.push( i2331[i + 0] );
  }
  i2322.allTags = i2330
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2335 = data
  i2334.name = i2335[0]
  i2334.value = i2335[1]
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2339 = data
  i2338.id = i2339[0]
  i2338.name = i2339[1]
  i2338.value = i2339[2]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2343 = data
  i2342.id = i2343[0]
  i2342.name = i2343[1]
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2345 = data
  i2344.fixedDeltaTime = i2345[0]
  i2344.maximumDeltaTime = i2345[1]
  i2344.timeScale = i2345[2]
  i2344.maximumParticleTimestep = i2345[3]
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2347 = data
  i2346.gravity = new pc.Vec3( i2347[0], i2347[1], i2347[2] )
  i2346.defaultSolverIterations = i2347[3]
  i2346.bounceThreshold = i2347[4]
  i2346.autoSyncTransforms = !!i2347[5]
  i2346.autoSimulation = !!i2347[6]
  var i2349 = i2347[7]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2349[i + 0]) );
  }
  i2346.collisionMatrix = i2348
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2353 = data
  i2352.enabled = !!i2353[0]
  i2352.layerId = i2353[1]
  i2352.otherLayerId = i2353[2]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2355 = data
  request.r(i2355[0], i2355[1], 0, i2354, 'material')
  i2354.gravity = new pc.Vec2( i2355[2], i2355[3] )
  i2354.positionIterations = i2355[4]
  i2354.velocityIterations = i2355[5]
  i2354.velocityThreshold = i2355[6]
  i2354.maxLinearCorrection = i2355[7]
  i2354.maxAngularCorrection = i2355[8]
  i2354.maxTranslationSpeed = i2355[9]
  i2354.maxRotationSpeed = i2355[10]
  i2354.baumgarteScale = i2355[11]
  i2354.baumgarteTOIScale = i2355[12]
  i2354.timeToSleep = i2355[13]
  i2354.linearSleepTolerance = i2355[14]
  i2354.angularSleepTolerance = i2355[15]
  i2354.defaultContactOffset = i2355[16]
  i2354.autoSimulation = !!i2355[17]
  i2354.queriesHitTriggers = !!i2355[18]
  i2354.queriesStartInColliders = !!i2355[19]
  i2354.callbacksOnDisable = !!i2355[20]
  i2354.reuseCollisionCallbacks = !!i2355[21]
  i2354.autoSyncTransforms = !!i2355[22]
  var i2357 = i2355[23]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2357[i + 0]) );
  }
  i2354.collisionMatrix = i2356
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2361 = data
  i2360.enabled = !!i2361[0]
  i2360.layerId = i2361[1]
  i2360.otherLayerId = i2361[2]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2363 = data
  var i2365 = i2363[0]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2365[i + 0]) );
  }
  i2362.qualityLevels = i2364
  var i2367 = i2363[1]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.push( i2367[i + 0] );
  }
  i2362.names = i2366
  i2362.shadows = i2363[2]
  i2362.anisotropicFiltering = i2363[3]
  i2362.antiAliasing = i2363[4]
  i2362.lodBias = i2363[5]
  i2362.shadowCascades = i2363[6]
  i2362.shadowDistance = i2363[7]
  i2362.shadowmaskMode = i2363[8]
  i2362.shadowProjection = i2363[9]
  i2362.shadowResolution = i2363[10]
  i2362.softParticles = !!i2363[11]
  i2362.softVegetation = !!i2363[12]
  i2362.activeColorSpace = i2363[13]
  i2362.desiredColorSpace = i2363[14]
  i2362.masterTextureLimit = i2363[15]
  i2362.maxQueuedFrames = i2363[16]
  i2362.particleRaycastBudget = i2363[17]
  i2362.pixelLightCount = i2363[18]
  i2362.realtimeReflectionProbes = !!i2363[19]
  i2362.shadowCascade2Split = i2363[20]
  i2362.shadowCascade4Split = new pc.Vec3( i2363[21], i2363[22], i2363[23] )
  i2362.streamingMipmapsActive = !!i2363[24]
  i2362.vSyncCount = i2363[25]
  i2362.asyncUploadBufferSize = i2363[26]
  i2362.asyncUploadTimeSlice = i2363[27]
  i2362.billboardsFaceCameraPosition = !!i2363[28]
  i2362.shadowNearPlaneOffset = i2363[29]
  i2362.streamingMipmapsMemoryBudget = i2363[30]
  i2362.maximumLODLevel = i2363[31]
  i2362.streamingMipmapsAddAllCameras = !!i2363[32]
  i2362.streamingMipmapsMaxLevelReduction = i2363[33]
  i2362.streamingMipmapsRenderersPerFrame = i2363[34]
  i2362.resolutionScalingFixedDPIFactor = i2363[35]
  i2362.streamingMipmapsMaxFileIORequests = i2363[36]
  i2362.currentQualityLevel = i2363[37]
  return i2362
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2370 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2371 = data
  i2370.m_XCoordinate = i2371[0]
  i2370.m_YCoordinate = i2371[1]
  return i2370
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2372 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2373 = data
  i2372.m_XPositionAdjustment = i2373[0]
  i2372.m_YPositionAdjustment = i2373[1]
  return i2372
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2374 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2375 = data
  i2374.xPlacement = i2375[0]
  i2374.yPlacement = i2375[1]
  i2374.xAdvance = i2375[2]
  i2374.yAdvance = i2375[3]
  return i2374
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[66],"67":[11],"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[76],"83":[76],"84":[76],"85":[76],"86":[76],"87":[76],"88":[76],"89":[11],"90":[91],"92":[93],"94":[93],"10":[9],"48":[95],"36":[95],"50":[95],"96":[95],"97":[95],"98":[6],"99":[11],"100":[101],"102":[32],"103":[10],"104":[9],"105":[91,9],"20":[9,16],"106":[9],"107":[16,9],"108":[91],"109":[16,9],"110":[9],"111":[112],"113":[112],"114":[112],"115":[9],"116":[9],"14":[10],"17":[16,9],"117":[9],"13":[10],"118":[9],"119":[9],"120":[9],"121":[9],"122":[9],"123":[9],"124":[9],"125":[9],"126":[9],"127":[16,9],"128":[9],"129":[9],"130":[9],"131":[9],"132":[16,9],"133":[9],"134":[32],"135":[32],"33":[32],"136":[32],"137":[11],"138":[11]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HeartEffect","UnityEngine.Animator","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","GameManager","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","UnityEngine.GameObject","InputManager","PhaseManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SphereCollider","Item","ItemDraggable","Ply_MoveToTarget","Sink","InWaterItem","Ply_TimerEvent","Ply_ToggleEvent","UnityEngine.CapsuleCollider","UnityEngine.BoxCollider","CuttingBoard","Knife","Ply_BobEffect","Bread","ItemClickable","CuttingItem","ItemKnifeSpriteMaskCutter","UnityEngine.SpriteMask","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","ItemSpriteMaskPainter","ItemStirring","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "New2D";

Deserializers.lunaInitializationTime = "05/20/2026 07:25:09";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1745";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4591";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system";

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

Deserializers.buildID = "6c8db413-c674-40b8-af3b-8119f944d079";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

