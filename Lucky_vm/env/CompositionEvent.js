// CompositionEvent 对象 
CompositionEvent = function CompositionEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'CompositionEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(CompositionEvent,"CompositionEvent");
Object.setPrototypeOf(CompositionEvent.prototype, UIEvent.prototype);
framevm.toolsFunc.defineProperty(CompositionEvent.prototype, "data", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CompositionEvent.prototype, "CompositionEvent", "data_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CompositionEvent.prototype, "initCompositionEvent", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, CompositionEvent.prototype, "CompositionEvent", "initCompositionEvent", arguments)}});
