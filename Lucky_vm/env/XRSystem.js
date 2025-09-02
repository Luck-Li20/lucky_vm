// XRSystem 对象 
XRSystem = function XRSystem(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(XRSystem,"XRSystem");
Object.setPrototypeOf(XRSystem.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(XRSystem.prototype, "ondevicechange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRSystem.prototype, "XRSystem", "ondevicechange_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, XRSystem.prototype, "XRSystem", "ondevicechange_set", arguments)}});
framevm.toolsFunc.defineProperty(XRSystem.prototype, "isSessionSupported", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, XRSystem.prototype, "XRSystem", "isSessionSupported", arguments)}});
framevm.toolsFunc.defineProperty(XRSystem.prototype, "requestSession", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, XRSystem.prototype, "XRSystem", "requestSession", arguments)}});
framevm.toolsFunc.defineProperty(XRSystem.prototype, "supportsSession", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, XRSystem.prototype, "XRSystem", "supportsSession", arguments)}});
