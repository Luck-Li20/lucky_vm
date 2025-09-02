// USB 对象
USB = function USB(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(USB,"USB");
Object.setPrototypeOf(USB.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(USB.prototype, "onconnect", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, USB.prototype, "USB", "onconnect_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, USB.prototype, "USB", "onconnect_set", arguments)}});
framevm.toolsFunc.defineProperty(USB.prototype, "ondisconnect", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, USB.prototype, "USB", "ondisconnect_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, USB.prototype, "USB", "ondisconnect_set", arguments)}});
framevm.toolsFunc.defineProperty(USB.prototype, "getDevices", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, USB.prototype, "USB", "getDevices", arguments)}});
framevm.toolsFunc.defineProperty(USB.prototype, "requestDevice", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, USB.prototype, "USB", "requestDevice", arguments)}});
