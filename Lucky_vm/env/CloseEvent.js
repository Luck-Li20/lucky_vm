// CloseEvent 对象 
CloseEvent = function CloseEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'CloseEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(CloseEvent,"CloseEvent");
Object.setPrototypeOf(CloseEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(CloseEvent.prototype, "wasClean", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CloseEvent.prototype, "CloseEvent", "wasClean_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CloseEvent.prototype, "code", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CloseEvent.prototype, "CloseEvent", "code_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CloseEvent.prototype, "reason", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CloseEvent.prototype, "CloseEvent", "reason_get", arguments)}, set:undefined});
