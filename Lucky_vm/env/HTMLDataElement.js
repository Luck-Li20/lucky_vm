// HTMLDataElement 对象 
HTMLDataElement = function HTMLDataElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLDataElement,"HTMLDataElement");
Object.setPrototypeOf(HTMLDataElement.prototype, HTMLElement.prototype);
framevm.toolsFunc.defineProperty(HTMLDataElement.prototype, "value", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLDataElement.prototype, "HTMLDataElement", "value_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, HTMLDataElement.prototype, "HTMLDataElement", "value_set", arguments)}});
