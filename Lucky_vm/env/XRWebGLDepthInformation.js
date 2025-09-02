// XRWebGLDepthInformation 对象 
XRWebGLDepthInformation = function XRWebGLDepthInformation(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(XRWebGLDepthInformation,"XRWebGLDepthInformation");
Object.setPrototypeOf(XRWebGLDepthInformation.prototype, XRDepthInformation.prototype);
framevm.toolsFunc.defineProperty(XRWebGLDepthInformation.prototype, "texture", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRWebGLDepthInformation.prototype, "XRWebGLDepthInformation", "texture_get", arguments)}, set:undefined});
