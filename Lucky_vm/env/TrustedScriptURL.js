// TrustedScriptURL 对象 
TrustedScriptURL = function TrustedScriptURL(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(TrustedScriptURL,"TrustedScriptURL");
framevm.toolsFunc.defineProperty(TrustedScriptURL.prototype, "toJSON", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, TrustedScriptURL.prototype, "TrustedScriptURL", "toJSON", arguments)}});
framevm.toolsFunc.defineProperty(TrustedScriptURL.prototype, "toString", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, TrustedScriptURL.prototype, "TrustedScriptURL", "toString", arguments)}});
