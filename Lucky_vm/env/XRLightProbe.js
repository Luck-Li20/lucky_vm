// XRLightProbe 对象 
XRLightProbe = function XRLightProbe(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(XRLightProbe,"XRLightProbe");
Object.setPrototypeOf(XRLightProbe.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(XRLightProbe.prototype, "probeSpace", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRLightProbe.prototype, "XRLightProbe", "probeSpace_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRLightProbe.prototype, "onreflectionchange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRLightProbe.prototype, "XRLightProbe", "onreflectionchange_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, XRLightProbe.prototype, "XRLightProbe", "onreflectionchange_set", arguments)}});
