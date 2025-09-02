// ClipboardEvent 对象 
ClipboardEvent = function ClipboardEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'ClipboardEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(ClipboardEvent,"ClipboardEvent");
Object.setPrototypeOf(ClipboardEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(ClipboardEvent.prototype, "clipboardData", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ClipboardEvent.prototype, "ClipboardEvent", "clipboardData_get", arguments)}, set:undefined});
