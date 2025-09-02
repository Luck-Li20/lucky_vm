// AbortController 对象 
AbortController = function AbortController(){};
framevm.toolsFunc.safeProto(AbortController,"AbortController");
framevm.toolsFunc.defineProperty(AbortController.prototype, "signal", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AbortController.prototype, "AbortController", "signal_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(AbortController.prototype, "abort", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, AbortController.prototype, "AbortController", "abort", arguments)}});
