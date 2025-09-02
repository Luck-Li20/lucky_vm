// PresentationReceiver 对象 
PresentationReceiver = function PresentationReceiver(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(PresentationReceiver,"PresentationReceiver");
framevm.toolsFunc.defineProperty(PresentationReceiver.prototype, "connectionList", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PresentationReceiver.prototype, "PresentationReceiver", "connectionList_get", arguments)}, set:undefined});
