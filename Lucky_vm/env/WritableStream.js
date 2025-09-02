// WritableStream 对象 
WritableStream = function WritableStream(){};
framevm.toolsFunc.safeProto(WritableStream,"WritableStream");
framevm.toolsFunc.defineProperty(WritableStream.prototype, "locked", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WritableStream.prototype, "WritableStream", "locked_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(WritableStream.prototype, "abort", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, WritableStream.prototype, "WritableStream", "abort", arguments)}});
framevm.toolsFunc.defineProperty(WritableStream.prototype, "close", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, WritableStream.prototype, "WritableStream", "close", arguments)}});
framevm.toolsFunc.defineProperty(WritableStream.prototype, "getWriter", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, WritableStream.prototype, "WritableStream", "getWriter", arguments)}});
