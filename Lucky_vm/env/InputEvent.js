// InputEvent 对象 
InputEvent = function InputEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'InputEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(InputEvent,"InputEvent");
Object.setPrototypeOf(InputEvent.prototype, UIEvent.prototype);
framevm.toolsFunc.defineProperty(InputEvent.prototype, "data", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, InputEvent.prototype, "InputEvent", "data_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(InputEvent.prototype, "isComposing", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, InputEvent.prototype, "InputEvent", "isComposing_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(InputEvent.prototype, "inputType", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, InputEvent.prototype, "InputEvent", "inputType_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(InputEvent.prototype, "dataTransfer", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, InputEvent.prototype, "InputEvent", "dataTransfer_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(InputEvent.prototype, "getTargetRanges", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, InputEvent.prototype, "InputEvent", "getTargetRanges", arguments)}});
