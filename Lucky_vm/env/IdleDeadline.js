// IdleDeadline 对象 
IdleDeadline = function IdleDeadline(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(IdleDeadline,"IdleDeadline");
framevm.toolsFunc.defineProperty(IdleDeadline.prototype, "didTimeout", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IdleDeadline.prototype, "IdleDeadline", "didTimeout_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(IdleDeadline.prototype, "timeRemaining", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, IdleDeadline.prototype, "IdleDeadline", "timeRemaining", arguments)}});
