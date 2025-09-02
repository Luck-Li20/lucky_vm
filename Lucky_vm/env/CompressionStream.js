// CompressionStream 对象 
CompressionStream = function CompressionStream(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'CompressionStream': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(CompressionStream,"CompressionStream");
framevm.toolsFunc.defineProperty(CompressionStream.prototype, "readable", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CompressionStream.prototype, "CompressionStream", "readable_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CompressionStream.prototype, "writable", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CompressionStream.prototype, "CompressionStream", "writable_get", arguments)}, set:undefined});
