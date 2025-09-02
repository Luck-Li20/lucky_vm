// TransitionEvent 对象 
TransitionEvent = function TransitionEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'TransitionEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(TransitionEvent,"TransitionEvent");
Object.setPrototypeOf(TransitionEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(TransitionEvent.prototype, "propertyName", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TransitionEvent.prototype, "TransitionEvent", "propertyName_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TransitionEvent.prototype, "elapsedTime", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TransitionEvent.prototype, "TransitionEvent", "elapsedTime_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TransitionEvent.prototype, "pseudoElement", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TransitionEvent.prototype, "TransitionEvent", "pseudoElement_get", arguments)}, set:undefined});
