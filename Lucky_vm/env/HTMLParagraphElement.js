// HTMLParagraphElement 对象
HTMLParagraphElement = function HTMLParagraphElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLParagraphElement,"HTMLParagraphElement");
Object.setPrototypeOf(HTMLParagraphElement.prototype, HTMLElement.prototype);
framevm.toolsFunc.defineProperty(HTMLParagraphElement.prototype, "align", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLParagraphElement.prototype, "HTMLParagraphElement", "align_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, HTMLParagraphElement.prototype, "HTMLParagraphElement", "align_set", arguments)}});
