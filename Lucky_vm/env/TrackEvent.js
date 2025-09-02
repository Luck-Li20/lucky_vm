// TrackEvent 对象 
TrackEvent = function TrackEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'TrackEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(TrackEvent,"TrackEvent");
Object.setPrototypeOf(TrackEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(TrackEvent.prototype, "track", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TrackEvent.prototype, "TrackEvent", "track_get", arguments)}, set:undefined});
