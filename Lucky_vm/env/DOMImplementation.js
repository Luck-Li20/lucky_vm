// DOMImplementation 对象 
DOMImplementation = function DOMImplementation(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(DOMImplementation,"DOMImplementation");
framevm.toolsFunc.defineProperty(DOMImplementation.prototype, "createDocument", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, DOMImplementation.prototype, "DOMImplementation", "createDocument", arguments)}});
framevm.toolsFunc.defineProperty(DOMImplementation.prototype, "createDocumentType", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, DOMImplementation.prototype, "DOMImplementation", "createDocumentType", arguments)}});
framevm.toolsFunc.defineProperty(DOMImplementation.prototype, "createHTMLDocument", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, DOMImplementation.prototype, "DOMImplementation", "createHTMLDocument", arguments)}});
framevm.toolsFunc.defineProperty(DOMImplementation.prototype, "hasFeature", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, DOMImplementation.prototype, "DOMImplementation", "hasFeature", arguments)}});
