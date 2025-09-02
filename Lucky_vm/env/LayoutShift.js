// LayoutShift 对象 
LayoutShift = function LayoutShift(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(LayoutShift,"LayoutShift");
Object.setPrototypeOf(LayoutShift.prototype, PerformanceEntry.prototype);
framevm.toolsFunc.defineProperty(LayoutShift.prototype, "value", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, LayoutShift.prototype, "LayoutShift", "value_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(LayoutShift.prototype, "hadRecentInput", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, LayoutShift.prototype, "LayoutShift", "hadRecentInput_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(LayoutShift.prototype, "lastInputTime", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, LayoutShift.prototype, "LayoutShift", "lastInputTime_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(LayoutShift.prototype, "sources", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, LayoutShift.prototype, "LayoutShift", "sources_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(LayoutShift.prototype, "toJSON", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, LayoutShift.prototype, "LayoutShift", "toJSON", arguments)}});
