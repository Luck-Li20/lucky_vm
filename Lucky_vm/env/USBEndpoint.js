// USBEndpoint 对象 
USBEndpoint = function USBEndpoint(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'USBEndpoint': 3 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(USBEndpoint,"USBEndpoint");
framevm.toolsFunc.defineProperty(USBEndpoint.prototype, "endpointNumber", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, USBEndpoint.prototype, "USBEndpoint", "endpointNumber_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(USBEndpoint.prototype, "direction", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, USBEndpoint.prototype, "USBEndpoint", "direction_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(USBEndpoint.prototype, "type", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, USBEndpoint.prototype, "USBEndpoint", "type_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(USBEndpoint.prototype, "packetSize", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, USBEndpoint.prototype, "USBEndpoint", "packetSize_get", arguments)}, set:undefined});
