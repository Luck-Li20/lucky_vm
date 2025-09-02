// XRCPUDepthInformation 对象 
XRCPUDepthInformation = function XRCPUDepthInformation(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(XRCPUDepthInformation,"XRCPUDepthInformation");
Object.setPrototypeOf(XRCPUDepthInformation.prototype, XRDepthInformation.prototype);
framevm.toolsFunc.defineProperty(XRCPUDepthInformation.prototype, "data", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRCPUDepthInformation.prototype, "XRCPUDepthInformation", "data_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRCPUDepthInformation.prototype, "getDepthInMeters", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, XRCPUDepthInformation.prototype, "XRCPUDepthInformation", "getDepthInMeters", arguments)}});
