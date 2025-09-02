// XMLHttpRequestUpload 对象 
XMLHttpRequestUpload = function XMLHttpRequestUpload(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(XMLHttpRequestUpload,"XMLHttpRequestUpload");
Object.setPrototypeOf(XMLHttpRequestUpload.prototype, XMLHttpRequestEventTarget.prototype);
