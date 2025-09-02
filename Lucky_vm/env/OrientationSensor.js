// OrientationSensor 对象 
OrientationSensor = function OrientationSensor(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(OrientationSensor,"OrientationSensor");
Object.setPrototypeOf(OrientationSensor.prototype, Sensor.prototype);
framevm.toolsFunc.defineProperty(OrientationSensor.prototype, "quaternion", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, OrientationSensor.prototype, "OrientationSensor", "quaternion_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(OrientationSensor.prototype, "populateMatrix", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, OrientationSensor.prototype, "OrientationSensor", "populateMatrix", arguments)}});
