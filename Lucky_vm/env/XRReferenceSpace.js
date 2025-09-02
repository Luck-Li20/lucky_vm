// XRReferenceSpace 对象 
XRReferenceSpace = function XRReferenceSpace(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(XRReferenceSpace,"XRReferenceSpace");
Object.setPrototypeOf(XRReferenceSpace.prototype, XRSpace.prototype);
framevm.toolsFunc.defineProperty(XRReferenceSpace.prototype, "onreset", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRReferenceSpace.prototype, "XRReferenceSpace", "onreset_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, XRReferenceSpace.prototype, "XRReferenceSpace", "onreset_set", arguments)}});
framevm.toolsFunc.defineProperty(XRReferenceSpace.prototype, "getOffsetReferenceSpace", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, XRReferenceSpace.prototype, "XRReferenceSpace", "getOffsetReferenceSpace", arguments)}});
