// HTMLPreElement 对象 
HTMLPreElement = function HTMLPreElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLPreElement,"HTMLPreElement");
Object.setPrototypeOf(HTMLPreElement.prototype, HTMLElement.prototype);
framevm.toolsFunc.defineProperty(HTMLPreElement.prototype, "width", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLPreElement.prototype, "HTMLPreElement", "width_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, HTMLPreElement.prototype, "HTMLPreElement", "width_set", arguments)}});
