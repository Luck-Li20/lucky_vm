// MediaKeySystemAccess 对象 
MediaKeySystemAccess = function MediaKeySystemAccess(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(MediaKeySystemAccess,"MediaKeySystemAccess");
framevm.toolsFunc.defineProperty(MediaKeySystemAccess.prototype, "keySystem", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaKeySystemAccess.prototype, "MediaKeySystemAccess", "keySystem_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MediaKeySystemAccess.prototype, "createMediaKeys", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MediaKeySystemAccess.prototype, "MediaKeySystemAccess", "createMediaKeys", arguments)}});
framevm.toolsFunc.defineProperty(MediaKeySystemAccess.prototype, "getConfiguration", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MediaKeySystemAccess.prototype, "MediaKeySystemAccess", "getConfiguration", arguments)}});
