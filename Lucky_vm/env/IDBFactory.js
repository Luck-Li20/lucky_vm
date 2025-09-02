// IDBFactory 对象
IDBFactory = function IDBFactory(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(IDBFactory,"IDBFactory");
framevm.toolsFunc.defineProperty(IDBFactory.prototype, "cmp", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, IDBFactory.prototype, "IDBFactory", "cmp", arguments)}});
framevm.toolsFunc.defineProperty(IDBFactory.prototype, "databases", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, IDBFactory.prototype, "IDBFactory", "databases", arguments)}});
framevm.toolsFunc.defineProperty(IDBFactory.prototype, "deleteDatabase", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, IDBFactory.prototype, "IDBFactory", "deleteDatabase", arguments)}});
framevm.toolsFunc.defineProperty(IDBFactory.prototype, "open", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, IDBFactory.prototype, "IDBFactory", "open", arguments)}});


// indexedDB对象
indexedDB= {};
Object.setPrototypeOf(indexedDB, IDBFactory.prototype);