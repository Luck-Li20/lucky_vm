// TextDecoder 对象 
TextDecoder = function TextDecoder(){};
framevm.toolsFunc.safeProto(TextDecoder,"TextDecoder");
framevm.toolsFunc.defineProperty(TextDecoder.prototype, "encoding", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TextDecoder.prototype, "TextDecoder", "encoding_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TextDecoder.prototype, "fatal", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TextDecoder.prototype, "TextDecoder", "fatal_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TextDecoder.prototype, "ignoreBOM", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TextDecoder.prototype, "TextDecoder", "ignoreBOM_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TextDecoder.prototype, "decode", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, TextDecoder.prototype, "TextDecoder", "decode", arguments)}});
