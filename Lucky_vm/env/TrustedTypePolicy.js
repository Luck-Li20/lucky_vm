// TrustedTypePolicy 对象 
TrustedTypePolicy = function TrustedTypePolicy(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(TrustedTypePolicy,"TrustedTypePolicy");
framevm.toolsFunc.defineProperty(TrustedTypePolicy.prototype, "name", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TrustedTypePolicy.prototype, "TrustedTypePolicy", "name_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TrustedTypePolicy.prototype, "createHTML", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, TrustedTypePolicy.prototype, "TrustedTypePolicy", "createHTML", arguments)}});
framevm.toolsFunc.defineProperty(TrustedTypePolicy.prototype, "createScript", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, TrustedTypePolicy.prototype, "TrustedTypePolicy", "createScript", arguments)}});
framevm.toolsFunc.defineProperty(TrustedTypePolicy.prototype, "createScriptURL", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, TrustedTypePolicy.prototype, "TrustedTypePolicy", "createScriptURL", arguments)}});
