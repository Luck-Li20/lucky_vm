// OverconstrainedError 对象 
OverconstrainedError = function OverconstrainedError(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'OverconstrainedError': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(OverconstrainedError,"OverconstrainedError");
framevm.toolsFunc.defineProperty(OverconstrainedError.prototype, "name", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, OverconstrainedError.prototype, "OverconstrainedError", "name_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(OverconstrainedError.prototype, "message", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, OverconstrainedError.prototype, "OverconstrainedError", "message_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(OverconstrainedError.prototype, "constraint", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, OverconstrainedError.prototype, "OverconstrainedError", "constraint_get", arguments)}, set:undefined});
