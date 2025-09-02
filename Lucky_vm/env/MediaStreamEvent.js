// MediaStreamEvent 对象 
MediaStreamEvent = function MediaStreamEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaStreamEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(MediaStreamEvent,"MediaStreamEvent");
Object.setPrototypeOf(MediaStreamEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(MediaStreamEvent.prototype, "stream", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaStreamEvent.prototype, "MediaStreamEvent", "stream_get", arguments)}, set:undefined});
