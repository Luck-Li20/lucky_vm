// Keyboard 对象
Keyboard = function Keyboard(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(Keyboard,"Keyboard");
framevm.toolsFunc.defineProperty(Keyboard.prototype, "getLayoutMap", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Keyboard.prototype, "Keyboard", "getLayoutMap", arguments)}});
framevm.toolsFunc.defineProperty(Keyboard.prototype, "lock", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Keyboard.prototype, "Keyboard", "lock", arguments)}});
framevm.toolsFunc.defineProperty(Keyboard.prototype, "unlock", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Keyboard.prototype, "Keyboard", "unlock", arguments)}});
