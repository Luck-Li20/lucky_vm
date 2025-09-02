// RTCPeerConnectionIceEvent 对象 
RTCPeerConnectionIceEvent = function RTCPeerConnectionIceEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCPeerConnectionIceEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(RTCPeerConnectionIceEvent,"RTCPeerConnectionIceEvent");
Object.setPrototypeOf(RTCPeerConnectionIceEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(RTCPeerConnectionIceEvent.prototype, "candidate", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCPeerConnectionIceEvent.prototype, "RTCPeerConnectionIceEvent", "candidate_get", arguments)}, set:undefined});
