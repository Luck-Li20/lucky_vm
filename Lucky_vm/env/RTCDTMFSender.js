// RTCDTMFSender 对象 
RTCDTMFSender = function RTCDTMFSender(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(RTCDTMFSender,"RTCDTMFSender");
Object.setPrototypeOf(RTCDTMFSender.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(RTCDTMFSender.prototype, "ontonechange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCDTMFSender.prototype, "RTCDTMFSender", "ontonechange_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, RTCDTMFSender.prototype, "RTCDTMFSender", "ontonechange_set", arguments)}});
framevm.toolsFunc.defineProperty(RTCDTMFSender.prototype, "canInsertDTMF", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCDTMFSender.prototype, "RTCDTMFSender", "canInsertDTMF_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(RTCDTMFSender.prototype, "toneBuffer", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCDTMFSender.prototype, "RTCDTMFSender", "toneBuffer_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(RTCDTMFSender.prototype, "insertDTMF", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, RTCDTMFSender.prototype, "RTCDTMFSender", "insertDTMF", arguments)}});
