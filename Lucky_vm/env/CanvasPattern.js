// CanvasPattern 对象 
CanvasPattern = function CanvasPattern(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CanvasPattern,"CanvasPattern");
framevm.toolsFunc.defineProperty(CanvasPattern.prototype, "setTransform", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, CanvasPattern.prototype, "CanvasPattern", "setTransform", arguments)}});
