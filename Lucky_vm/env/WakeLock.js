// WakeLock 对象 
WakeLock = function WakeLock(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(WakeLock,"WakeLock");
framevm.toolsFunc.defineProperty(WakeLock.prototype, "request", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, WakeLock.prototype, "WakeLock", "request", arguments)}});
