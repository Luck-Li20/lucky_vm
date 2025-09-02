// XRRigidTransform 对象 
XRRigidTransform = function XRRigidTransform(){};
framevm.toolsFunc.safeProto(XRRigidTransform,"XRRigidTransform");
framevm.toolsFunc.defineProperty(XRRigidTransform.prototype, "position", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRRigidTransform.prototype, "XRRigidTransform", "position_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRRigidTransform.prototype, "orientation", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRRigidTransform.prototype, "XRRigidTransform", "orientation_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRRigidTransform.prototype, "matrix", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRRigidTransform.prototype, "XRRigidTransform", "matrix_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRRigidTransform.prototype, "inverse", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRRigidTransform.prototype, "XRRigidTransform", "inverse_get", arguments)}, set:undefined});
