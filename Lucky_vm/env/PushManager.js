// PushManager 对象 
PushManager = function PushManager(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(PushManager,"PushManager");
framevm.toolsFunc.defineProperty(PushManager, "supportedContentEncodings", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PushManager, "PushManager", "supportedContentEncodings_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PushManager.prototype, "getSubscription", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, PushManager.prototype, "PushManager", "getSubscription", arguments)}});
framevm.toolsFunc.defineProperty(PushManager.prototype, "permissionState", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, PushManager.prototype, "PushManager", "permissionState", arguments)}});
framevm.toolsFunc.defineProperty(PushManager.prototype, "subscribe", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, PushManager.prototype, "PushManager", "subscribe", arguments)}});
