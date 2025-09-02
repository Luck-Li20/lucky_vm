// GeolocationPosition 对象 
GeolocationPosition = function GeolocationPosition(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(GeolocationPosition,"GeolocationPosition");
framevm.toolsFunc.defineProperty(GeolocationPosition.prototype, "coords", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, GeolocationPosition.prototype, "GeolocationPosition", "coords_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(GeolocationPosition.prototype, "timestamp", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, GeolocationPosition.prototype, "GeolocationPosition", "timestamp_get", arguments)}, set:undefined});
