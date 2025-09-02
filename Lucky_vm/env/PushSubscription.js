// PushSubscription 对象 
PushSubscription = function PushSubscription(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(PushSubscription,"PushSubscription");
framevm.toolsFunc.defineProperty(PushSubscription.prototype, "endpoint", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PushSubscription.prototype, "PushSubscription", "endpoint_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PushSubscription.prototype, "expirationTime", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PushSubscription.prototype, "PushSubscription", "expirationTime_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PushSubscription.prototype, "options", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PushSubscription.prototype, "PushSubscription", "options_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PushSubscription.prototype, "getKey", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, PushSubscription.prototype, "PushSubscription", "getKey", arguments)}});
framevm.toolsFunc.defineProperty(PushSubscription.prototype, "toJSON", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, PushSubscription.prototype, "PushSubscription", "toJSON", arguments)}});
framevm.toolsFunc.defineProperty(PushSubscription.prototype, "unsubscribe", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, PushSubscription.prototype, "PushSubscription", "unsubscribe", arguments)}});
