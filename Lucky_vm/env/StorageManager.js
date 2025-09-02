// StorageManager 对象
StorageManager = function StorageManager(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(StorageManager,"StorageManager");
Object.setPrototypeOf(StorageManager.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(StorageManager.prototype, "estimate", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, StorageManager.prototype, "StorageManager", "estimate", arguments)}});
framevm.toolsFunc.defineProperty(StorageManager.prototype, "persisted", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, StorageManager.prototype, "StorageManager", "persisted", arguments)}});
framevm.toolsFunc.defineProperty(StorageManager.prototype, "getDirectory", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, StorageManager.prototype, "StorageManager", "getDirectory", arguments)}});
framevm.toolsFunc.defineProperty(StorageManager.prototype, "persist", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, StorageManager.prototype, "StorageManager", "persist", arguments)}});
