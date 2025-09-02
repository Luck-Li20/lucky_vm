// MimeType 对象
MimeType = function MimeType(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(MimeType,"MimeType");
framevm.toolsFunc.defineProperty(MimeType.prototype, "type", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MimeType.prototype, "MimeType", "type_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MimeType.prototype, "suffixes", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MimeType.prototype, "MimeType", "suffixes_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MimeType.prototype, "description", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MimeType.prototype, "MimeType", "description_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MimeType.prototype, "enabledPlugin", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MimeType.prototype, "MimeType", "enabledPlugin_get", arguments)}, set:undefined});
