// ErrorEvent 对象 
ErrorEvent = function ErrorEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'ErrorEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(ErrorEvent,"ErrorEvent");
Object.setPrototypeOf(ErrorEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(ErrorEvent.prototype, "message", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ErrorEvent.prototype, "ErrorEvent", "message_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ErrorEvent.prototype, "filename", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ErrorEvent.prototype, "ErrorEvent", "filename_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ErrorEvent.prototype, "lineno", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ErrorEvent.prototype, "ErrorEvent", "lineno_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ErrorEvent.prototype, "colno", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ErrorEvent.prototype, "ErrorEvent", "colno_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ErrorEvent.prototype, "error", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ErrorEvent.prototype, "ErrorEvent", "error_get", arguments)}, set:undefined});
