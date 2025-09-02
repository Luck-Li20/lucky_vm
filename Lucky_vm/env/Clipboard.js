// Clipboard 对象
Clipboard = function Clipboard(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(Clipboard,"Clipboard");
Object.setPrototypeOf(Clipboard.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(Clipboard.prototype, "read", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Clipboard.prototype, "Clipboard", "read", arguments)}});
framevm.toolsFunc.defineProperty(Clipboard.prototype, "readText", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Clipboard.prototype, "Clipboard", "readText", arguments)}});
framevm.toolsFunc.defineProperty(Clipboard.prototype, "write", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Clipboard.prototype, "Clipboard", "write", arguments)}});
framevm.toolsFunc.defineProperty(Clipboard.prototype, "writeText", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Clipboard.prototype, "Clipboard", "writeText", arguments)}});
