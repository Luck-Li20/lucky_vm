// RTCError 对象 
RTCError = function RTCError(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCError': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(RTCError,"RTCError");
Object.setPrototypeOf(RTCError.prototype, DOMException.prototype);
framevm.toolsFunc.defineProperty(RTCError.prototype, "errorDetail", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCError.prototype, "RTCError", "errorDetail_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(RTCError.prototype, "sdpLineNumber", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCError.prototype, "RTCError", "sdpLineNumber_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(RTCError.prototype, "httpRequestStatusCode", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCError.prototype, "RTCError", "httpRequestStatusCode_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(RTCError.prototype, "sctpCauseCode", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCError.prototype, "RTCError", "sctpCauseCode_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(RTCError.prototype, "receivedAlert", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCError.prototype, "RTCError", "receivedAlert_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(RTCError.prototype, "sentAlert", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCError.prototype, "RTCError", "sentAlert_get", arguments)}, set:undefined});
