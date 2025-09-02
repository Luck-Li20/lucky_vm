// File 对象 
File = function File(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'File': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(File,"File");
Object.setPrototypeOf(File.prototype, Blob.prototype);
framevm.toolsFunc.defineProperty(File.prototype, "name", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, File.prototype, "File", "name_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(File.prototype, "lastModified", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, File.prototype, "File", "lastModified_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(File.prototype, "lastModifiedDate", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, File.prototype, "File", "lastModifiedDate_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(File.prototype, "webkitRelativePath", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, File.prototype, "File", "webkitRelativePath_get", arguments)}, set:undefined});
