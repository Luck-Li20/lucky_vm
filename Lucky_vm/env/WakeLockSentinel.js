// WakeLockSentinel 对象 
WakeLockSentinel = function WakeLockSentinel(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(WakeLockSentinel,"WakeLockSentinel");
Object.setPrototypeOf(WakeLockSentinel.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(WakeLockSentinel.prototype, "onrelease", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WakeLockSentinel.prototype, "WakeLockSentinel", "onrelease_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, WakeLockSentinel.prototype, "WakeLockSentinel", "onrelease_set", arguments)}});
framevm.toolsFunc.defineProperty(WakeLockSentinel.prototype, "released", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WakeLockSentinel.prototype, "WakeLockSentinel", "released_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(WakeLockSentinel.prototype, "type", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WakeLockSentinel.prototype, "WakeLockSentinel", "type_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(WakeLockSentinel.prototype, "release", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, WakeLockSentinel.prototype, "WakeLockSentinel", "release", arguments)}});
