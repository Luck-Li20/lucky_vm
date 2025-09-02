// ReadableStream 对象 
ReadableStream = function ReadableStream(){};
framevm.toolsFunc.safeProto(ReadableStream,"ReadableStream");
framevm.toolsFunc.defineProperty(ReadableStream.prototype, "locked", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ReadableStream.prototype, "ReadableStream", "locked_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ReadableStream.prototype, "cancel", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, ReadableStream.prototype, "ReadableStream", "cancel", arguments)}});
framevm.toolsFunc.defineProperty(ReadableStream.prototype, "getReader", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, ReadableStream.prototype, "ReadableStream", "getReader", arguments)}});
framevm.toolsFunc.defineProperty(ReadableStream.prototype, "pipeThrough", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, ReadableStream.prototype, "ReadableStream", "pipeThrough", arguments)}});
framevm.toolsFunc.defineProperty(ReadableStream.prototype, "pipeTo", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, ReadableStream.prototype, "ReadableStream", "pipeTo", arguments)}});
framevm.toolsFunc.defineProperty(ReadableStream.prototype, "tee", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, ReadableStream.prototype, "ReadableStream", "tee", arguments)}});
