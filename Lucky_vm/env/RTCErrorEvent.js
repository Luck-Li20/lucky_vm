// RTCErrorEvent 对象 
RTCErrorEvent = function RTCErrorEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCErrorEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(RTCErrorEvent,"RTCErrorEvent");
Object.setPrototypeOf(RTCErrorEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(RTCErrorEvent.prototype, "error", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCErrorEvent.prototype, "RTCErrorEvent", "error_get", arguments)}, set:undefined});
