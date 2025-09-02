// IDBCursor 对象 
IDBCursor = function IDBCursor(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(IDBCursor,"IDBCursor");
framevm.toolsFunc.defineProperty(IDBCursor.prototype, "source", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IDBCursor.prototype, "IDBCursor", "source_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(IDBCursor.prototype, "direction", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IDBCursor.prototype, "IDBCursor", "direction_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(IDBCursor.prototype, "key", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IDBCursor.prototype, "IDBCursor", "key_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(IDBCursor.prototype, "primaryKey", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IDBCursor.prototype, "IDBCursor", "primaryKey_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(IDBCursor.prototype, "request", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IDBCursor.prototype, "IDBCursor", "request_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(IDBCursor.prototype, "advance", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, IDBCursor.prototype, "IDBCursor", "advance", arguments)}});
framevm.toolsFunc.defineProperty(IDBCursor.prototype, "continue", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, IDBCursor.prototype, "IDBCursor", "continue", arguments)}});
framevm.toolsFunc.defineProperty(IDBCursor.prototype, "continuePrimaryKey", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, IDBCursor.prototype, "IDBCursor", "continuePrimaryKey", arguments)}});
framevm.toolsFunc.defineProperty(IDBCursor.prototype, "delete", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, IDBCursor.prototype, "IDBCursor", "delete", arguments)}});
framevm.toolsFunc.defineProperty(IDBCursor.prototype, "update", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, IDBCursor.prototype, "IDBCursor", "update", arguments)}});
