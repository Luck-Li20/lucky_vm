// HTMLDocument 对象
HTMLDocument = function HTMLDocument(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLDocument,"HTMLDocument");
Object.setPrototypeOf(HTMLDocument.prototype, Document.prototype);





// document对象
document = {}
Object.setPrototypeOf(document, HTMLDocument.prototype);
framevm.toolsFunc.defineProperty(document, "location", {configurable:false, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, document, "document", "location_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, document, "document", "location_set", arguments)}});
