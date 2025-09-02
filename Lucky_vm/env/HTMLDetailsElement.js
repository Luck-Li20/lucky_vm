// HTMLDetailsElement 对象 
HTMLDetailsElement = function HTMLDetailsElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLDetailsElement,"HTMLDetailsElement");
Object.setPrototypeOf(HTMLDetailsElement.prototype, HTMLElement.prototype);
framevm.toolsFunc.defineProperty(HTMLDetailsElement.prototype, "open", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLDetailsElement.prototype, "HTMLDetailsElement", "open_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, HTMLDetailsElement.prototype, "HTMLDetailsElement", "open_set", arguments)}});
