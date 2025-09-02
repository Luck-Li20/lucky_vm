// PopStateEvent 对象 
PopStateEvent = function PopStateEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'PopStateEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(PopStateEvent,"PopStateEvent");
Object.setPrototypeOf(PopStateEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(PopStateEvent.prototype, "state", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PopStateEvent.prototype, "PopStateEvent", "state_get", arguments)}, set:undefined});
