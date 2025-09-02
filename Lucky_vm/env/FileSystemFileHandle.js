// FileSystemFileHandle 对象 
FileSystemFileHandle = function FileSystemFileHandle(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(FileSystemFileHandle,"FileSystemFileHandle");
Object.setPrototypeOf(FileSystemFileHandle.prototype, FileSystemHandle.prototype);
framevm.toolsFunc.defineProperty(FileSystemFileHandle.prototype, "createWritable", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, FileSystemFileHandle.prototype, "FileSystemFileHandle", "createWritable", arguments)}});
framevm.toolsFunc.defineProperty(FileSystemFileHandle.prototype, "getFile", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, FileSystemFileHandle.prototype, "FileSystemFileHandle", "getFile", arguments)}});
framevm.toolsFunc.defineProperty(FileSystemFileHandle.prototype, "move", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, FileSystemFileHandle.prototype, "FileSystemFileHandle", "move", arguments)}});
