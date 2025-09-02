// TimeRanges 对象 
TimeRanges = function TimeRanges(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(TimeRanges,"TimeRanges");
framevm.toolsFunc.defineProperty(TimeRanges.prototype, "length", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TimeRanges.prototype, "TimeRanges", "length_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TimeRanges.prototype, "end", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, TimeRanges.prototype, "TimeRanges", "end", arguments)}});
framevm.toolsFunc.defineProperty(TimeRanges.prototype, "start", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, TimeRanges.prototype, "TimeRanges", "start", arguments)}});
