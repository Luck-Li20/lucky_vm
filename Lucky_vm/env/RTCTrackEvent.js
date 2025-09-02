// RTCTrackEvent 对象 
RTCTrackEvent = function RTCTrackEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCTrackEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(RTCTrackEvent,"RTCTrackEvent");
Object.setPrototypeOf(RTCTrackEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(RTCTrackEvent.prototype, "receiver", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCTrackEvent.prototype, "RTCTrackEvent", "receiver_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(RTCTrackEvent.prototype, "track", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCTrackEvent.prototype, "RTCTrackEvent", "track_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(RTCTrackEvent.prototype, "streams", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCTrackEvent.prototype, "RTCTrackEvent", "streams_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(RTCTrackEvent.prototype, "transceiver", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCTrackEvent.prototype, "RTCTrackEvent", "transceiver_get", arguments)}, set:undefined});
