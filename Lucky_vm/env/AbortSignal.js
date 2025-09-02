// AbortSignal 对象 
AbortSignal = function AbortSignal(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(AbortSignal,"AbortSignal");
Object.setPrototypeOf(AbortSignal.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(AbortSignal, "abort", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, AbortSignal, "AbortSignal", "abort", arguments)}});
framevm.toolsFunc.defineProperty(AbortSignal, "timeout", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, AbortSignal, "AbortSignal", "timeout", arguments)}});
framevm.toolsFunc.defineProperty(AbortSignal.prototype, "aborted", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AbortSignal.prototype, "AbortSignal", "aborted_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(AbortSignal.prototype, "reason", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AbortSignal.prototype, "AbortSignal", "reason_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(AbortSignal.prototype, "onabort", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AbortSignal.prototype, "AbortSignal", "onabort_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, AbortSignal.prototype, "AbortSignal", "onabort_set", arguments)}});
framevm.toolsFunc.defineProperty(AbortSignal.prototype, "throwIfAborted", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, AbortSignal.prototype, "AbortSignal", "throwIfAborted", arguments)}});
