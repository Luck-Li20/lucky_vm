// Ink 对象 
Ink = function Ink(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(Ink,"Ink");
framevm.toolsFunc.defineProperty(Ink.prototype, "requestPresenter", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Ink.prototype, "Ink", "requestPresenter", arguments)}});
