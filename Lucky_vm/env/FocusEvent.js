// FocusEvent 对象 
FocusEvent = function FocusEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'FocusEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(FocusEvent,"FocusEvent");
Object.setPrototypeOf(FocusEvent.prototype, UIEvent.prototype);
framevm.toolsFunc.defineProperty(FocusEvent.prototype, "relatedTarget", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, FocusEvent.prototype, "FocusEvent", "relatedTarget_get", arguments)}, set:undefined});
