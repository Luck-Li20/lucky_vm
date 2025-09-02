// MediaDevices 对象
MediaDevices = function MediaDevices(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(MediaDevices,"MediaDevices");
Object.setPrototypeOf(MediaDevices.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(MediaDevices.prototype, "enumerateDevices", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevices", "enumerateDevices", arguments)}});
framevm.toolsFunc.defineProperty(MediaDevices.prototype, "getSupportedConstraints", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevices", "getSupportedConstraints", arguments)}});
framevm.toolsFunc.defineProperty(MediaDevices.prototype, "getUserMedia", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevices", "getUserMedia", arguments)}});
framevm.toolsFunc.defineProperty(MediaDevices.prototype, "ondevicechange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevices", "ondevicechange_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevices", "ondevicechange_set", arguments)}});
framevm.toolsFunc.defineProperty(MediaDevices.prototype, "getDisplayMedia", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevices", "getDisplayMedia", arguments)}});
framevm.toolsFunc.defineProperty(MediaDevices.prototype, "setCaptureHandleConfig", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MediaDevices.prototype, "MediaDevices", "setCaptureHandleConfig", arguments)}});
