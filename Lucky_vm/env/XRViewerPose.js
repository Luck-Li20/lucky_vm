// XRViewerPose 对象 
XRViewerPose = function XRViewerPose(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(XRViewerPose,"XRViewerPose");
Object.setPrototypeOf(XRViewerPose.prototype, XRPose.prototype);
framevm.toolsFunc.defineProperty(XRViewerPose.prototype, "views", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRViewerPose.prototype, "XRViewerPose", "views_get", arguments)}, set:undefined});
