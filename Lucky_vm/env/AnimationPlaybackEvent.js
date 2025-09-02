// AnimationPlaybackEvent 对象 
AnimationPlaybackEvent = function AnimationPlaybackEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'AnimationPlaybackEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(AnimationPlaybackEvent,"AnimationPlaybackEvent");
Object.setPrototypeOf(AnimationPlaybackEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(AnimationPlaybackEvent.prototype, "currentTime", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AnimationPlaybackEvent.prototype, "AnimationPlaybackEvent", "currentTime_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(AnimationPlaybackEvent.prototype, "timelineTime", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AnimationPlaybackEvent.prototype, "AnimationPlaybackEvent", "timelineTime_get", arguments)}, set:undefined});
