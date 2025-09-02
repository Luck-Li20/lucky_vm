// HTMLQuoteElement 对象 
HTMLQuoteElement = function HTMLQuoteElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLQuoteElement,"HTMLQuoteElement");
Object.setPrototypeOf(HTMLQuoteElement.prototype, HTMLElement.prototype);
framevm.toolsFunc.defineProperty(HTMLQuoteElement.prototype, "cite", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLQuoteElement.prototype, "HTMLQuoteElement", "cite_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, HTMLQuoteElement.prototype, "HTMLQuoteElement", "cite_set", arguments)}});
