// FileSystemHandle 对象 
FileSystemHandle = function FileSystemHandle(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(FileSystemHandle,"FileSystemHandle");
framevm.toolsFunc.defineProperty(FileSystemHandle.prototype, "kind", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, FileSystemHandle.prototype, "FileSystemHandle", "kind_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(FileSystemHandle.prototype, "name", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, FileSystemHandle.prototype, "FileSystemHandle", "name_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(FileSystemHandle.prototype, "isSameEntry", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, FileSystemHandle.prototype, "FileSystemHandle", "isSameEntry", arguments)}});
framevm.toolsFunc.defineProperty(FileSystemHandle.prototype, "queryPermission", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, FileSystemHandle.prototype, "FileSystemHandle", "queryPermission", arguments)}});
framevm.toolsFunc.defineProperty(FileSystemHandle.prototype, "remove", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, FileSystemHandle.prototype, "FileSystemHandle", "remove", arguments)}});
framevm.toolsFunc.defineProperty(FileSystemHandle.prototype, "requestPermission", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, FileSystemHandle.prototype, "FileSystemHandle", "requestPermission", arguments)}});
