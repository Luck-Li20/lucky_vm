// XRPose 对象 
XRPose = function XRPose(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(XRPose,"XRPose");
framevm.toolsFunc.defineProperty(XRPose.prototype, "transform", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRPose.prototype, "XRPose", "transform_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRPose.prototype, "emulatedPosition", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRPose.prototype, "XRPose", "emulatedPosition_get", arguments)}, set:undefined});
