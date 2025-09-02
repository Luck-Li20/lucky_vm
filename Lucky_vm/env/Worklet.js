// Worklet 对象 
Worklet = function Worklet(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(Worklet,"Worklet");
framevm.toolsFunc.defineProperty(Worklet.prototype, "addModule", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Worklet.prototype, "Worklet", "addModule", arguments)}});
