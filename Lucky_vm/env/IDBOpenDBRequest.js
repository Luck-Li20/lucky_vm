// IDBOpenDBRequest 对象
IDBOpenDBRequest = function IDBOpenDBRequest(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(IDBOpenDBRequest,"IDBOpenDBRequest");
Object.setPrototypeOf(IDBOpenDBRequest.prototype, IDBRequest.prototype);
framevm.toolsFunc.defineProperty(IDBOpenDBRequest.prototype, "onblocked", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IDBOpenDBRequest.prototype, "IDBOpenDBRequest", "onblocked_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, IDBOpenDBRequest.prototype, "IDBOpenDBRequest", "onblocked_set", arguments)}});
framevm.toolsFunc.defineProperty(IDBOpenDBRequest.prototype, "onupgradeneeded", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IDBOpenDBRequest.prototype, "IDBOpenDBRequest", "onupgradeneeded_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, IDBOpenDBRequest.prototype, "IDBOpenDBRequest", "onupgradeneeded_set", arguments)}});
