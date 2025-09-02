// StorageEvent 对象 
StorageEvent = function StorageEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'StorageEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(StorageEvent,"StorageEvent");
Object.setPrototypeOf(StorageEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(StorageEvent.prototype, "key", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, StorageEvent.prototype, "StorageEvent", "key_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(StorageEvent.prototype, "oldValue", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, StorageEvent.prototype, "StorageEvent", "oldValue_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(StorageEvent.prototype, "newValue", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, StorageEvent.prototype, "StorageEvent", "newValue_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(StorageEvent.prototype, "url", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, StorageEvent.prototype, "StorageEvent", "url_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(StorageEvent.prototype, "storageArea", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, StorageEvent.prototype, "StorageEvent", "storageArea_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(StorageEvent.prototype, "initStorageEvent", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, StorageEvent.prototype, "StorageEvent", "initStorageEvent", arguments)}});
