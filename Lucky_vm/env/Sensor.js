// Sensor 对象 
Sensor = function Sensor(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(Sensor,"Sensor");
Object.setPrototypeOf(Sensor.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(Sensor.prototype, "activated", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "activated_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Sensor.prototype, "hasReading", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "hasReading_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Sensor.prototype, "timestamp", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "timestamp_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Sensor.prototype, "onerror", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "onerror_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "onerror_set", arguments)}});
framevm.toolsFunc.defineProperty(Sensor.prototype, "onreading", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "onreading_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "onreading_set", arguments)}});
framevm.toolsFunc.defineProperty(Sensor.prototype, "onactivate", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "onactivate_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "onactivate_set", arguments)}});
framevm.toolsFunc.defineProperty(Sensor.prototype, "start", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "start", arguments)}});
framevm.toolsFunc.defineProperty(Sensor.prototype, "stop", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "stop", arguments)}});
