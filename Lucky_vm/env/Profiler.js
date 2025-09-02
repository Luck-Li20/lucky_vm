// Profiler 对象 
Profiler = function Profiler(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'Profiler': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(Profiler,"Profiler");
Object.setPrototypeOf(Profiler.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(Profiler.prototype, "sampleInterval", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Profiler.prototype, "Profiler", "sampleInterval_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Profiler.prototype, "stopped", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Profiler.prototype, "Profiler", "stopped_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Profiler.prototype, "stop", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Profiler.prototype, "Profiler", "stop", arguments)}});
