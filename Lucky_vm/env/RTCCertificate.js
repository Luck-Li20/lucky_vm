// RTCCertificate 对象 
RTCCertificate = function RTCCertificate(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(RTCCertificate,"RTCCertificate");
framevm.toolsFunc.defineProperty(RTCCertificate.prototype, "expires", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCCertificate.prototype, "RTCCertificate", "expires_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(RTCCertificate.prototype, "getFingerprints", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, RTCCertificate.prototype, "RTCCertificate", "getFingerprints", arguments)}});
