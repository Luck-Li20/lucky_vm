// CanvasGradient 对象 
CanvasGradient = function CanvasGradient(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CanvasGradient,"CanvasGradient");
framevm.toolsFunc.defineProperty(CanvasGradient.prototype, "addColorStop", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, CanvasGradient.prototype, "CanvasGradient", "addColorStop", arguments)}});
