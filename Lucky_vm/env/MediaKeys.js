// MediaKeys 对象 
MediaKeys = function MediaKeys(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(MediaKeys,"MediaKeys");
framevm.toolsFunc.defineProperty(MediaKeys.prototype, "createSession", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MediaKeys.prototype, "MediaKeys", "createSession", arguments)}});
framevm.toolsFunc.defineProperty(MediaKeys.prototype, "setServerCertificate", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MediaKeys.prototype, "MediaKeys", "setServerCertificate", arguments)}});
framevm.toolsFunc.defineProperty(MediaKeys.prototype, "getStatusForPolicy", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MediaKeys.prototype, "MediaKeys", "getStatusForPolicy", arguments)}});
