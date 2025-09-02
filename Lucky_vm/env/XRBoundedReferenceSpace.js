// XRBoundedReferenceSpace 对象 
XRBoundedReferenceSpace = function XRBoundedReferenceSpace(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(XRBoundedReferenceSpace,"XRBoundedReferenceSpace");
Object.setPrototypeOf(XRBoundedReferenceSpace.prototype, XRReferenceSpace.prototype);
framevm.toolsFunc.defineProperty(XRBoundedReferenceSpace.prototype, "boundsGeometry", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRBoundedReferenceSpace.prototype, "XRBoundedReferenceSpace", "boundsGeometry_get", arguments)}, set:undefined});
