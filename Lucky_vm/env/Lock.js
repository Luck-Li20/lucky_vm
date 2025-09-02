// Lock 对象 
Lock = function Lock(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(Lock,"Lock");
framevm.toolsFunc.defineProperty(Lock.prototype, "name", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Lock.prototype, "Lock", "name_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Lock.prototype, "mode", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Lock.prototype, "Lock", "mode_get", arguments)}, set:undefined});
