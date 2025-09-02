
// HTMLHeadingElement 对象
HTMLHeadingElement = function HTMLHeadingElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLHeadingElement,"HTMLHeadingElement");
Object.setPrototypeOf(HTMLHeadingElement.prototype, HTMLElement.prototype);
framevm.toolsFunc.defineProperty(HTMLHeadingElement.prototype, "align", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLHeadingElement.prototype, "HTMLHeadingElement", "align_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, HTMLHeadingElement.prototype, "HTMLHeadingElement", "align_set", arguments)}});
