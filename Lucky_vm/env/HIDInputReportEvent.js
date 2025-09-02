// HIDInputReportEvent 对象 
HIDInputReportEvent = function HIDInputReportEvent(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HIDInputReportEvent,"HIDInputReportEvent");
Object.setPrototypeOf(HIDInputReportEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(HIDInputReportEvent.prototype, "device", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HIDInputReportEvent.prototype, "HIDInputReportEvent", "device_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(HIDInputReportEvent.prototype, "reportId", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HIDInputReportEvent.prototype, "HIDInputReportEvent", "reportId_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(HIDInputReportEvent.prototype, "data", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HIDInputReportEvent.prototype, "HIDInputReportEvent", "data_get", arguments)}, set:undefined});
