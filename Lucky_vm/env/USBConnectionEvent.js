// USBConnectionEvent 对象 
USBConnectionEvent = function USBConnectionEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'USBConnectionEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(USBConnectionEvent,"USBConnectionEvent");
Object.setPrototypeOf(USBConnectionEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(USBConnectionEvent.prototype, "device", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, USBConnectionEvent.prototype, "USBConnectionEvent", "device_get", arguments)}, set:undefined});
