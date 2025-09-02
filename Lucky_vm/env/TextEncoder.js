// TextEncoder 对象 
TextEncoder = function TextEncoder(){};
framevm.toolsFunc.safeProto(TextEncoder,"TextEncoder");
framevm.toolsFunc.defineProperty(TextEncoder.prototype, "encoding", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TextEncoder.prototype, "TextEncoder", "encoding_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TextEncoder.prototype, "encode", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, TextEncoder.prototype, "TextEncoder", "encode", arguments)}});
framevm.toolsFunc.defineProperty(TextEncoder.prototype, "encodeInto", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, TextEncoder.prototype, "TextEncoder", "encodeInto", arguments)}});
