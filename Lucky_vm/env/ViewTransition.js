// ViewTransition 对象 
ViewTransition = function ViewTransition(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(ViewTransition,"ViewTransition");
framevm.toolsFunc.defineProperty(ViewTransition.prototype, "finished", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ViewTransition.prototype, "ViewTransition", "finished_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ViewTransition.prototype, "ready", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ViewTransition.prototype, "ViewTransition", "ready_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ViewTransition.prototype, "updateCallbackDone", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ViewTransition.prototype, "ViewTransition", "updateCallbackDone_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ViewTransition.prototype, "skipTransition", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, ViewTransition.prototype, "ViewTransition", "skipTransition", arguments)}});
