// BeforeUnloadEvent 对象 
BeforeUnloadEvent = function BeforeUnloadEvent(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(BeforeUnloadEvent,"BeforeUnloadEvent");
Object.setPrototypeOf(BeforeUnloadEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(BeforeUnloadEvent.prototype, "returnValue", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, BeforeUnloadEvent.prototype, "BeforeUnloadEvent", "returnValue_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, BeforeUnloadEvent.prototype, "BeforeUnloadEvent", "returnValue_set", arguments)}});
