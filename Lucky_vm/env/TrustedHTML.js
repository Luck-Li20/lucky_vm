// TrustedHTML 对象 
TrustedHTML = function TrustedHTML(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(TrustedHTML,"TrustedHTML");
framevm.toolsFunc.defineProperty(TrustedHTML.prototype, "toJSON", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, TrustedHTML.prototype, "TrustedHTML", "toJSON", arguments)}});
framevm.toolsFunc.defineProperty(TrustedHTML.prototype, "toString", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, TrustedHTML.prototype, "TrustedHTML", "toString", arguments)}});
