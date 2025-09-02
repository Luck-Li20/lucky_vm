// FileList 对象 
FileList = function FileList(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(FileList,"FileList");
framevm.toolsFunc.defineProperty(FileList.prototype, "length", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, FileList.prototype, "FileList", "length_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(FileList.prototype, "item", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, FileList.prototype, "FileList", "item", arguments)}});
