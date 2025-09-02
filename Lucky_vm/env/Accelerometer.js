// Accelerometer 对象 
Accelerometer = function Accelerometer(){};
framevm.toolsFunc.safeProto(Accelerometer,"Accelerometer");
Object.setPrototypeOf(Accelerometer.prototype, Sensor.prototype);
framevm.toolsFunc.defineProperty(Accelerometer.prototype, "x", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Accelerometer.prototype, "Accelerometer", "x_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Accelerometer.prototype, "y", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Accelerometer.prototype, "Accelerometer", "y_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Accelerometer.prototype, "z", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Accelerometer.prototype, "Accelerometer", "z_get", arguments)}, set:undefined});
