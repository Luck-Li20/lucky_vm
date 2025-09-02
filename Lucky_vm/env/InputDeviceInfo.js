// InputDeviceInfo 对象 
InputDeviceInfo = function InputDeviceInfo(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(InputDeviceInfo,"InputDeviceInfo");
Object.setPrototypeOf(InputDeviceInfo.prototype, MediaDeviceInfo.prototype);
framevm.toolsFunc.defineProperty(InputDeviceInfo.prototype, "getCapabilities", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, InputDeviceInfo.prototype, "InputDeviceInfo", "getCapabilities", arguments)}});
