// HTMLTitleElement 对象
HTMLTitleElement = function HTMLTitleElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLTitleElement,"HTMLTitleElement");
Object.setPrototypeOf(HTMLTitleElement.prototype, HTMLElement.prototype);
framevm.toolsFunc.defineProperty(HTMLTitleElement.prototype, "text", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLTitleElement.prototype, "HTMLTitleElement", "text_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, HTMLTitleElement.prototype, "HTMLTitleElement", "text_set", arguments)}});
