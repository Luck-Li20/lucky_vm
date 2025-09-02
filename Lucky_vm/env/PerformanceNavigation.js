// PerformanceNavigation 对象
PerformanceNavigation = function PerformanceNavigation(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(PerformanceNavigation,"PerformanceNavigation");
framevm.toolsFunc.defineProperty(PerformanceNavigation, "TYPE_NAVIGATE", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(PerformanceNavigation, "TYPE_RELOAD", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(PerformanceNavigation, "TYPE_BACK_FORWARD", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(PerformanceNavigation, "TYPE_RESERVED", {configurable:false, enumerable:true, writable:false, value:255});
framevm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "type", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PerformanceNavigation.prototype, "PerformanceNavigation", "type_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "redirectCount", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PerformanceNavigation.prototype, "PerformanceNavigation", "redirectCount_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "TYPE_NAVIGATE", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "TYPE_RELOAD", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "TYPE_BACK_FORWARD", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "TYPE_RESERVED", {configurable:false, enumerable:true, writable:false, value:255});
framevm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "toJSON", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, PerformanceNavigation.prototype, "PerformanceNavigation", "toJSON", arguments)}});
