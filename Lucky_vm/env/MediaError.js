// MediaError 对象 
MediaError = function MediaError(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(MediaError,"MediaError");
framevm.toolsFunc.defineProperty(MediaError, "MEDIA_ERR_ABORTED", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(MediaError, "MEDIA_ERR_NETWORK", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(MediaError, "MEDIA_ERR_DECODE", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(MediaError, "MEDIA_ERR_SRC_NOT_SUPPORTED", {configurable:false, enumerable:true, writable:false, value:4});
framevm.toolsFunc.defineProperty(MediaError.prototype, "code", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaError.prototype, "MediaError", "code_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MediaError.prototype, "message", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaError.prototype, "MediaError", "message_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MediaError.prototype, "MEDIA_ERR_ABORTED", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(MediaError.prototype, "MEDIA_ERR_NETWORK", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(MediaError.prototype, "MEDIA_ERR_DECODE", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(MediaError.prototype, "MEDIA_ERR_SRC_NOT_SUPPORTED", {configurable:false, enumerable:true, writable:false, value:4});
