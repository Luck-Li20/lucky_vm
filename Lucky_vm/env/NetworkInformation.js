// NetworkInformation 对象
NetworkInformation = function NetworkInformation(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(NetworkInformation,"NetworkInformation");
Object.setPrototypeOf(NetworkInformation.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(NetworkInformation.prototype, "onchange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "onchange_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "onchange_set", arguments)}});
framevm.toolsFunc.defineProperty(NetworkInformation.prototype, "effectiveType", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "effectiveType_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(NetworkInformation.prototype, "rtt", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "rtt_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(NetworkInformation.prototype, "downlink", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "downlink_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(NetworkInformation.prototype, "saveData", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "saveData_get", arguments)}, set:undefined});
