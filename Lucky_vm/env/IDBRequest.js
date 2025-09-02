// IDBRequest 对象
IDBRequest = function IDBRequest(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(IDBRequest,"IDBRequest");
Object.setPrototypeOf(IDBRequest.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(IDBRequest.prototype, "result", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "result_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(IDBRequest.prototype, "error", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "error_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(IDBRequest.prototype, "source", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "source_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(IDBRequest.prototype, "transaction", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "transaction_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(IDBRequest.prototype, "readyState", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "readyState_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(IDBRequest.prototype, "onsuccess", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "onsuccess_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "onsuccess_set", arguments)}});
framevm.toolsFunc.defineProperty(IDBRequest.prototype, "onerror", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "onerror_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, IDBRequest.prototype, "IDBRequest", "onerror_set", arguments)}});
