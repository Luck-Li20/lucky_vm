// HTMLDataListElement 对象 
HTMLDataListElement = function HTMLDataListElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLDataListElement,"HTMLDataListElement");
Object.setPrototypeOf(HTMLDataListElement.prototype, HTMLElement.prototype);
framevm.toolsFunc.defineProperty(HTMLDataListElement.prototype, "options", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLDataListElement.prototype, "HTMLDataListElement", "options_get", arguments)}, set:undefined});
