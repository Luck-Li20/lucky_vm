// XRWebGLLayer 对象 
XRWebGLLayer = function XRWebGLLayer(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'XRWebGLLayer': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(XRWebGLLayer,"XRWebGLLayer");
Object.setPrototypeOf(XRWebGLLayer.prototype, XRLayer.prototype);
framevm.toolsFunc.defineProperty(XRWebGLLayer, "getNativeFramebufferScaleFactor", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, XRWebGLLayer, "XRWebGLLayer", "getNativeFramebufferScaleFactor", arguments)}});
framevm.toolsFunc.defineProperty(XRWebGLLayer.prototype, "antialias", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRWebGLLayer.prototype, "XRWebGLLayer", "antialias_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRWebGLLayer.prototype, "ignoreDepthValues", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRWebGLLayer.prototype, "XRWebGLLayer", "ignoreDepthValues_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRWebGLLayer.prototype, "framebufferWidth", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRWebGLLayer.prototype, "XRWebGLLayer", "framebufferWidth_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRWebGLLayer.prototype, "framebufferHeight", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRWebGLLayer.prototype, "XRWebGLLayer", "framebufferHeight_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRWebGLLayer.prototype, "framebuffer", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRWebGLLayer.prototype, "XRWebGLLayer", "framebuffer_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRWebGLLayer.prototype, "getViewport", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, XRWebGLLayer.prototype, "XRWebGLLayer", "getViewport", arguments)}});
