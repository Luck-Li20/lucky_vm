// RTCDataChannelEvent 对象 
RTCDataChannelEvent = function RTCDataChannelEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCDataChannelEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(RTCDataChannelEvent,"RTCDataChannelEvent");
Object.setPrototypeOf(RTCDataChannelEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(RTCDataChannelEvent.prototype, "channel", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCDataChannelEvent.prototype, "RTCDataChannelEvent", "channel_get", arguments)}, set:undefined});
