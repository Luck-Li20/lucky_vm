// PerformanceEntry 对象 
PerformanceEntry = function PerformanceEntry(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(PerformanceEntry,"PerformanceEntry");
framevm.toolsFunc.defineProperty(PerformanceEntry.prototype, "name", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PerformanceEntry.prototype, "PerformanceEntry", "name_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PerformanceEntry.prototype, "entryType", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PerformanceEntry.prototype, "PerformanceEntry", "entryType_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PerformanceEntry.prototype, "startTime", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PerformanceEntry.prototype, "PerformanceEntry", "startTime_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PerformanceEntry.prototype, "duration", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PerformanceEntry.prototype, "PerformanceEntry", "duration_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PerformanceEntry.prototype, "toJSON", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, PerformanceEntry.prototype, "PerformanceEntry", "toJSON", arguments)}});
