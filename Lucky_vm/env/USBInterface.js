// USBInterface 对象 
USBInterface = function USBInterface(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'USBInterface': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(USBInterface,"USBInterface");
framevm.toolsFunc.defineProperty(USBInterface.prototype, "interfaceNumber", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, USBInterface.prototype, "USBInterface", "interfaceNumber_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(USBInterface.prototype, "alternate", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, USBInterface.prototype, "USBInterface", "alternate_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(USBInterface.prototype, "alternates", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, USBInterface.prototype, "USBInterface", "alternates_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(USBInterface.prototype, "claimed", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, USBInterface.prototype, "USBInterface", "claimed_get", arguments)}, set:undefined});
