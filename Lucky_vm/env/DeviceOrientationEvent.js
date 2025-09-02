// DeviceOrientationEvent 对象 
DeviceOrientationEvent = function DeviceOrientationEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'DeviceOrientationEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(DeviceOrientationEvent,"DeviceOrientationEvent");
Object.setPrototypeOf(DeviceOrientationEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "alpha", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DeviceOrientationEvent.prototype, "DeviceOrientationEvent", "alpha_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "beta", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DeviceOrientationEvent.prototype, "DeviceOrientationEvent", "beta_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "gamma", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DeviceOrientationEvent.prototype, "DeviceOrientationEvent", "gamma_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "absolute", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DeviceOrientationEvent.prototype, "DeviceOrientationEvent", "absolute_get", arguments)}, set:undefined});
