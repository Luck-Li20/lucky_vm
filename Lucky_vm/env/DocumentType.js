// DocumentType 对象 
DocumentType = function DocumentType(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(DocumentType,"DocumentType");
Object.setPrototypeOf(DocumentType.prototype, Node.prototype);
framevm.toolsFunc.defineProperty(DocumentType.prototype, "name", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "name_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(DocumentType.prototype, "publicId", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "publicId_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(DocumentType.prototype, "systemId", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "systemId_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(DocumentType.prototype, "after", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "after", arguments)}});
framevm.toolsFunc.defineProperty(DocumentType.prototype, "before", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "before", arguments)}});
framevm.toolsFunc.defineProperty(DocumentType.prototype, "remove", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "remove", arguments)}});
framevm.toolsFunc.defineProperty(DocumentType.prototype, "replaceWith", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "replaceWith", arguments)}});
