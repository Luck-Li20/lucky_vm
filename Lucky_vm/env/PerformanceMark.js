// PerformanceMark 对象 
PerformanceMark = function PerformanceMark(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'PerformanceMark': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(PerformanceMark,"PerformanceMark");
Object.setPrototypeOf(PerformanceMark.prototype, PerformanceEntry.prototype);
framevm.toolsFunc.defineProperty(PerformanceMark.prototype, "detail", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PerformanceMark.prototype, "PerformanceMark", "detail_get", arguments)}, set:undefined});
