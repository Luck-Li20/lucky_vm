// FileSystemWritableFileStream 对象 
FileSystemWritableFileStream = function FileSystemWritableFileStream(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(FileSystemWritableFileStream,"FileSystemWritableFileStream");
Object.setPrototypeOf(FileSystemWritableFileStream.prototype, WritableStream.prototype);
framevm.toolsFunc.defineProperty(FileSystemWritableFileStream.prototype, "seek", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, FileSystemWritableFileStream.prototype, "FileSystemWritableFileStream", "seek", arguments)}});
framevm.toolsFunc.defineProperty(FileSystemWritableFileStream.prototype, "truncate", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, FileSystemWritableFileStream.prototype, "FileSystemWritableFileStream", "truncate", arguments)}});
framevm.toolsFunc.defineProperty(FileSystemWritableFileStream.prototype, "write", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, FileSystemWritableFileStream.prototype, "FileSystemWritableFileStream", "write", arguments)}});
