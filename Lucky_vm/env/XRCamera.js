// XRCamera 对象 
XRCamera = function XRCamera(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(XRCamera,"XRCamera");
framevm.toolsFunc.defineProperty(XRCamera.prototype, "width", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRCamera.prototype, "XRCamera", "width_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRCamera.prototype, "height", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRCamera.prototype, "XRCamera", "height_get", arguments)}, set:undefined});
