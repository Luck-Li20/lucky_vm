// RTCSctpTransport 对象 
RTCSctpTransport = function RTCSctpTransport(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(RTCSctpTransport,"RTCSctpTransport");
Object.setPrototypeOf(RTCSctpTransport.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(RTCSctpTransport.prototype, "transport", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCSctpTransport.prototype, "RTCSctpTransport", "transport_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(RTCSctpTransport.prototype, "state", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCSctpTransport.prototype, "RTCSctpTransport", "state_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(RTCSctpTransport.prototype, "maxMessageSize", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCSctpTransport.prototype, "RTCSctpTransport", "maxMessageSize_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(RTCSctpTransport.prototype, "maxChannels", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCSctpTransport.prototype, "RTCSctpTransport", "maxChannels_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(RTCSctpTransport.prototype, "onstatechange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RTCSctpTransport.prototype, "RTCSctpTransport", "onstatechange_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, RTCSctpTransport.prototype, "RTCSctpTransport", "onstatechange_set", arguments)}});
