// Crypto 对象
Crypto = function Crypto(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(Crypto,"Crypto");
framevm.toolsFunc.defineProperty(Crypto.prototype, "getRandomValues", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Crypto.prototype, "Crypto", "getRandomValues", arguments)}});
framevm.toolsFunc.defineProperty(Crypto.prototype, "subtle", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Crypto.prototype, "Crypto", "subtle_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Crypto.prototype, "randomUUID", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Crypto.prototype, "Crypto", "randomUUID", arguments)}});
