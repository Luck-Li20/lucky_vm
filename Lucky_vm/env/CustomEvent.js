// CustomEvent 对象 
CustomEvent = function CustomEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'CustomEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(CustomEvent,"CustomEvent");
Object.setPrototypeOf(CustomEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(CustomEvent.prototype, "detail", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CustomEvent.prototype, "CustomEvent", "detail_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CustomEvent.prototype, "initCustomEvent", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, CustomEvent.prototype, "CustomEvent", "initCustomEvent", arguments)}});
