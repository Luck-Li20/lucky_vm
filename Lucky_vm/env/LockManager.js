// LockManager 对象
LockManager = function LockManager(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(LockManager,"LockManager");
framevm.toolsFunc.defineProperty(LockManager.prototype, "query", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, LockManager.prototype, "LockManager", "query", arguments)}});
framevm.toolsFunc.defineProperty(LockManager.prototype, "request", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, LockManager.prototype, "LockManager", "request", arguments)}});
