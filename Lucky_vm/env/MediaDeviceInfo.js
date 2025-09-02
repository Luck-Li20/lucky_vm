// MediaDeviceInfo 对象 
MediaDeviceInfo = function MediaDeviceInfo(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(MediaDeviceInfo,"MediaDeviceInfo");
framevm.toolsFunc.defineProperty(MediaDeviceInfo.prototype, "deviceId", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaDeviceInfo.prototype, "MediaDeviceInfo", "deviceId_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MediaDeviceInfo.prototype, "kind", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaDeviceInfo.prototype, "MediaDeviceInfo", "kind_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MediaDeviceInfo.prototype, "label", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaDeviceInfo.prototype, "MediaDeviceInfo", "label_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MediaDeviceInfo.prototype, "groupId", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaDeviceInfo.prototype, "MediaDeviceInfo", "groupId_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MediaDeviceInfo.prototype, "toJSON", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MediaDeviceInfo.prototype, "MediaDeviceInfo", "toJSON", arguments)}});
