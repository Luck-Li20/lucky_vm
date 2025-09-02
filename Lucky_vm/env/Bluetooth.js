// Bluetooth 对象
Bluetooth = function Bluetooth(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(Bluetooth,"Bluetooth");
Object.setPrototypeOf(Bluetooth.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(Bluetooth.prototype, "getAvailability", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Bluetooth.prototype, "Bluetooth", "getAvailability", arguments)}});
framevm.toolsFunc.defineProperty(Bluetooth.prototype, "requestDevice", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Bluetooth.prototype, "Bluetooth", "requestDevice", arguments)}});
