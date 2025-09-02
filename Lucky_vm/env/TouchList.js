// TouchList 对象 
TouchList = function TouchList(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(TouchList,"TouchList");
framevm.toolsFunc.defineProperty(TouchList.prototype, "length", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TouchList.prototype, "TouchList", "length_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TouchList.prototype, "item", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, TouchList.prototype, "TouchList", "item", arguments)}});
