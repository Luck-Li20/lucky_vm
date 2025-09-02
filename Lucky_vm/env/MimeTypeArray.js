// MimeTypeArray 对象
MimeTypeArray = function MimeTypeArray(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(MimeTypeArray,"MimeTypeArray");
framevm.toolsFunc.defineProperty(MimeTypeArray.prototype, "length", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MimeTypeArray.prototype, "MimeTypeArray", "length_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MimeTypeArray.prototype, "item", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MimeTypeArray.prototype, "MimeTypeArray", "item", arguments)}});
framevm.toolsFunc.defineProperty(MimeTypeArray.prototype, "namedItem", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MimeTypeArray.prototype, "MimeTypeArray", "namedItem", arguments)}});
