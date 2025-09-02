// CryptoKey 对象 
CryptoKey = function CryptoKey(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CryptoKey,"CryptoKey");
framevm.toolsFunc.defineProperty(CryptoKey.prototype, "type", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CryptoKey.prototype, "CryptoKey", "type_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CryptoKey.prototype, "extractable", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CryptoKey.prototype, "CryptoKey", "extractable_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CryptoKey.prototype, "algorithm", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CryptoKey.prototype, "CryptoKey", "algorithm_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CryptoKey.prototype, "usages", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CryptoKey.prototype, "CryptoKey", "usages_get", arguments)}, set:undefined});
