// TextEvent 对象 
TextEvent = function TextEvent(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(TextEvent,"TextEvent");
Object.setPrototypeOf(TextEvent.prototype, UIEvent.prototype);
framevm.toolsFunc.defineProperty(TextEvent.prototype, "data", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TextEvent.prototype, "TextEvent", "data_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TextEvent.prototype, "initTextEvent", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, TextEvent.prototype, "TextEvent", "initTextEvent", arguments)}});
