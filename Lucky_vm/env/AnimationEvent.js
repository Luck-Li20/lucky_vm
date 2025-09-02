// AnimationEvent 对象 
AnimationEvent = function AnimationEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'AnimationEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(AnimationEvent,"AnimationEvent");
Object.setPrototypeOf(AnimationEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(AnimationEvent.prototype, "animationName", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AnimationEvent.prototype, "AnimationEvent", "animationName_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(AnimationEvent.prototype, "elapsedTime", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AnimationEvent.prototype, "AnimationEvent", "elapsedTime_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(AnimationEvent.prototype, "pseudoElement", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AnimationEvent.prototype, "AnimationEvent", "pseudoElement_get", arguments)}, set:undefined});
