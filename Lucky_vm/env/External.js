// External 对象 
External = function External(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(External,"External");
framevm.toolsFunc.defineProperty(External.prototype, "AddSearchProvider", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, External.prototype, "External", "AddSearchProvider", arguments)}});
framevm.toolsFunc.defineProperty(External.prototype, "IsSearchProviderInstalled", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, External.prototype, "External", "IsSearchProviderInstalled", arguments)}});
