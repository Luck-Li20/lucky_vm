// Worker 对象 
Worker = function Worker(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'Worker': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(Worker,"Worker");
Object.setPrototypeOf(Worker.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(Worker.prototype, "onmessage", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Worker.prototype, "Worker", "onmessage_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, Worker.prototype, "Worker", "onmessage_set", arguments)}});
framevm.toolsFunc.defineProperty(Worker.prototype, "postMessage", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Worker.prototype, "Worker", "postMessage", arguments)}});
framevm.toolsFunc.defineProperty(Worker.prototype, "terminate", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Worker.prototype, "Worker", "terminate", arguments)}});
framevm.toolsFunc.defineProperty(Worker.prototype, "onerror", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Worker.prototype, "Worker", "onerror_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, Worker.prototype, "Worker", "onerror_set", arguments)}});
