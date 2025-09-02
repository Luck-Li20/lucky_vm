// TextEncoderStream 对象 
TextEncoderStream = function TextEncoderStream(){};
framevm.toolsFunc.safeProto(TextEncoderStream,"TextEncoderStream");
framevm.toolsFunc.defineProperty(TextEncoderStream.prototype, "encoding", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TextEncoderStream.prototype, "TextEncoderStream", "encoding_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TextEncoderStream.prototype, "readable", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TextEncoderStream.prototype, "TextEncoderStream", "readable_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TextEncoderStream.prototype, "writable", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TextEncoderStream.prototype, "TextEncoderStream", "writable_get", arguments)}, set:undefined});
