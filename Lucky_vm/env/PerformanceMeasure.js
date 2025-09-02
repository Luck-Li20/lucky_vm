// PerformanceMeasure 对象 
PerformanceMeasure = function PerformanceMeasure(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(PerformanceMeasure,"PerformanceMeasure");
Object.setPrototypeOf(PerformanceMeasure.prototype, PerformanceEntry.prototype);
framevm.toolsFunc.defineProperty(PerformanceMeasure.prototype, "detail", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PerformanceMeasure.prototype, "PerformanceMeasure", "detail_get", arguments)}, set:undefined});
