// Scheduler 对象 
Scheduler = function Scheduler(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(Scheduler,"Scheduler");
framevm.toolsFunc.defineProperty(Scheduler.prototype, "postTask", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Scheduler.prototype, "Scheduler", "postTask", arguments)}});
