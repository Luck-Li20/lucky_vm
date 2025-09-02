// HTMLMenuElement 对象 
HTMLMenuElement = function HTMLMenuElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLMenuElement,"HTMLMenuElement");
Object.setPrototypeOf(HTMLMenuElement.prototype, HTMLElement.prototype);
framevm.toolsFunc.defineProperty(HTMLMenuElement.prototype, "compact", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLMenuElement.prototype, "HTMLMenuElement", "compact_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, HTMLMenuElement.prototype, "HTMLMenuElement", "compact_set", arguments)}});
