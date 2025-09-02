// HTMLBRElement 对象
HTMLBRElement = function HTMLBRElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLBRElement,"HTMLBRElement");
Object.setPrototypeOf(HTMLBRElement.prototype, HTMLElement.prototype);
framevm.toolsFunc.defineProperty(HTMLBRElement.prototype, "clear", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLBRElement.prototype, "HTMLBRElement", "clear_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, HTMLBRElement.prototype, "HTMLBRElement", "clear_set", arguments)}});
