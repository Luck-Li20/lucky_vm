// XRRay 对象 
XRRay = function XRRay(){};
framevm.toolsFunc.safeProto(XRRay,"XRRay");
framevm.toolsFunc.defineProperty(XRRay.prototype, "origin", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRRay.prototype, "XRRay", "origin_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRRay.prototype, "direction", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRRay.prototype, "XRRay", "direction_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRRay.prototype, "matrix", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRRay.prototype, "XRRay", "matrix_get", arguments)}, set:undefined});
