// Gyroscope 对象 
Gyroscope = function Gyroscope(){};
framevm.toolsFunc.safeProto(Gyroscope,"Gyroscope");
Object.setPrototypeOf(Gyroscope.prototype, Sensor.prototype);
framevm.toolsFunc.defineProperty(Gyroscope.prototype, "x", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Gyroscope.prototype, "Gyroscope", "x_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Gyroscope.prototype, "y", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Gyroscope.prototype, "Gyroscope", "y_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Gyroscope.prototype, "z", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Gyroscope.prototype, "Gyroscope", "z_get", arguments)}, set:undefined});
