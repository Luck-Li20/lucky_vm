// TrustedScript 对象 
TrustedScript = function TrustedScript(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(TrustedScript,"TrustedScript");
framevm.toolsFunc.defineProperty(TrustedScript.prototype, "toJSON", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, TrustedScript.prototype, "TrustedScript", "toJSON", arguments)}});
framevm.toolsFunc.defineProperty(TrustedScript.prototype, "toString", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, TrustedScript.prototype, "TrustedScript", "toString", arguments)}});
