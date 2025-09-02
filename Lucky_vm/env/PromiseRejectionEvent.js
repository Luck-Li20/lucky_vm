// PromiseRejectionEvent 对象 
PromiseRejectionEvent = function PromiseRejectionEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'PromiseRejectionEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(PromiseRejectionEvent,"PromiseRejectionEvent");
Object.setPrototypeOf(PromiseRejectionEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(PromiseRejectionEvent.prototype, "promise", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PromiseRejectionEvent.prototype, "PromiseRejectionEvent", "promise_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PromiseRejectionEvent.prototype, "reason", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PromiseRejectionEvent.prototype, "PromiseRejectionEvent", "reason_get", arguments)}, set:undefined});
