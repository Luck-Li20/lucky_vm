// Presentation 对象
Presentation = function Presentation(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(Presentation,"Presentation");
framevm.toolsFunc.defineProperty(Presentation.prototype, "defaultRequest", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Presentation.prototype, "Presentation", "defaultRequest_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, Presentation.prototype, "Presentation", "defaultRequest_set", arguments)}});
framevm.toolsFunc.defineProperty(Presentation.prototype, "receiver", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Presentation.prototype, "Presentation", "receiver_get", arguments)}, set:undefined});
