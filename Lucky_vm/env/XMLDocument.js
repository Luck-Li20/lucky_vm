// XMLDocument 对象 
XMLDocument = function XMLDocument(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(XMLDocument,"XMLDocument");
Object.setPrototypeOf(XMLDocument.prototype, Document.prototype);
