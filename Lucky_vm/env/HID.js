// HID 对象 
HID = function HID(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HID,"HID");
Object.setPrototypeOf(HID.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(HID.prototype, "onconnect", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HID.prototype, "HID", "onconnect_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, HID.prototype, "HID", "onconnect_set", arguments)}});
framevm.toolsFunc.defineProperty(HID.prototype, "ondisconnect", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HID.prototype, "HID", "ondisconnect_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, HID.prototype, "HID", "ondisconnect_set", arguments)}});
framevm.toolsFunc.defineProperty(HID.prototype, "getDevices", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, HID.prototype, "HID", "getDevices", arguments)}});
framevm.toolsFunc.defineProperty(HID.prototype, "requestDevice", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, HID.prototype, "HID", "requestDevice", arguments)}});
