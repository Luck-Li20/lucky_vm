// XRViewport 对象 
XRViewport = function XRViewport(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(XRViewport,"XRViewport");
framevm.toolsFunc.defineProperty(XRViewport.prototype, "x", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRViewport.prototype, "XRViewport", "x_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRViewport.prototype, "y", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRViewport.prototype, "XRViewport", "y_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRViewport.prototype, "width", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRViewport.prototype, "XRViewport", "width_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRViewport.prototype, "height", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRViewport.prototype, "XRViewport", "height_get", arguments)}, set:undefined});
