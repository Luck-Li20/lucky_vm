// MediaStreamTrackEvent 对象 
MediaStreamTrackEvent = function MediaStreamTrackEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaStreamTrackEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(MediaStreamTrackEvent,"MediaStreamTrackEvent");
Object.setPrototypeOf(MediaStreamTrackEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(MediaStreamTrackEvent.prototype, "track", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaStreamTrackEvent.prototype, "MediaStreamTrackEvent", "track_get", arguments)}, set:undefined});
