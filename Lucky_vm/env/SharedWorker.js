// SharedWorker 对象 
SharedWorker = function SharedWorker(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'SharedWorker': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(SharedWorker,"SharedWorker");
Object.setPrototypeOf(SharedWorker.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(SharedWorker.prototype, "port", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SharedWorker.prototype, "SharedWorker", "port_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SharedWorker.prototype, "onerror", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SharedWorker.prototype, "SharedWorker", "onerror_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, SharedWorker.prototype, "SharedWorker", "onerror_set", arguments)}});
