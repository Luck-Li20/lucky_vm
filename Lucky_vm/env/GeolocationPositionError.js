// GeolocationPositionError 对象 
GeolocationPositionError = function GeolocationPositionError(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(GeolocationPositionError,"GeolocationPositionError");
framevm.toolsFunc.defineProperty(GeolocationPositionError, "PERMISSION_DENIED", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(GeolocationPositionError, "POSITION_UNAVAILABLE", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(GeolocationPositionError, "TIMEOUT", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(GeolocationPositionError.prototype, "code", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, GeolocationPositionError.prototype, "GeolocationPositionError", "code_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(GeolocationPositionError.prototype, "message", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, GeolocationPositionError.prototype, "GeolocationPositionError", "message_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(GeolocationPositionError.prototype, "PERMISSION_DENIED", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(GeolocationPositionError.prototype, "POSITION_UNAVAILABLE", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(GeolocationPositionError.prototype, "TIMEOUT", {configurable:false, enumerable:true, writable:false, value:3});
