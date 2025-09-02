// DeviceMotionEvent 对象 
DeviceMotionEvent = function DeviceMotionEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'DeviceMotionEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(DeviceMotionEvent,"DeviceMotionEvent");
Object.setPrototypeOf(DeviceMotionEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(DeviceMotionEvent.prototype, "acceleration", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DeviceMotionEvent.prototype, "DeviceMotionEvent", "acceleration_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(DeviceMotionEvent.prototype, "accelerationIncludingGravity", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DeviceMotionEvent.prototype, "DeviceMotionEvent", "accelerationIncludingGravity_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(DeviceMotionEvent.prototype, "rotationRate", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DeviceMotionEvent.prototype, "DeviceMotionEvent", "rotationRate_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(DeviceMotionEvent.prototype, "interval", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DeviceMotionEvent.prototype, "DeviceMotionEvent", "interval_get", arguments)}, set:undefined});
