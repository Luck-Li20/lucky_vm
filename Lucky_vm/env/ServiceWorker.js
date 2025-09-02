// ServiceWorker 对象 
ServiceWorker = function ServiceWorker(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(ServiceWorker,"ServiceWorker");
Object.setPrototypeOf(ServiceWorker.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(ServiceWorker.prototype, "scriptURL", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ServiceWorker.prototype, "ServiceWorker", "scriptURL_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ServiceWorker.prototype, "state", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ServiceWorker.prototype, "ServiceWorker", "state_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ServiceWorker.prototype, "onstatechange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ServiceWorker.prototype, "ServiceWorker", "onstatechange_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, ServiceWorker.prototype, "ServiceWorker", "onstatechange_set", arguments)}});
framevm.toolsFunc.defineProperty(ServiceWorker.prototype, "postMessage", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, ServiceWorker.prototype, "ServiceWorker", "postMessage", arguments)}});
framevm.toolsFunc.defineProperty(ServiceWorker.prototype, "onerror", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ServiceWorker.prototype, "ServiceWorker", "onerror_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, ServiceWorker.prototype, "ServiceWorker", "onerror_set", arguments)}});
