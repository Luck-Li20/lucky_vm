// DOMError 对象 
DOMError = function DOMError(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'DOMError': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(DOMError,"DOMError");
framevm.toolsFunc.defineProperty(DOMError.prototype, "name", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DOMError.prototype, "DOMError", "name_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(DOMError.prototype, "message", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DOMError.prototype, "DOMError", "message_get", arguments)}, set:undefined});
