// AnimationTimeline 对象 
AnimationTimeline = function AnimationTimeline(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(AnimationTimeline,"AnimationTimeline");
framevm.toolsFunc.defineProperty(AnimationTimeline.prototype, "currentTime", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AnimationTimeline.prototype, "AnimationTimeline", "currentTime_get", arguments)}, set:undefined});
