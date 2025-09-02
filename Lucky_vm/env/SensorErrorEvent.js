// SensorErrorEvent 对象 
SensorErrorEvent = function SensorErrorEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'SensorErrorEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(SensorErrorEvent,"SensorErrorEvent");
Object.setPrototypeOf(SensorErrorEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(SensorErrorEvent.prototype, "error", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SensorErrorEvent.prototype, "SensorErrorEvent", "error_get", arguments)}, set:undefined});
