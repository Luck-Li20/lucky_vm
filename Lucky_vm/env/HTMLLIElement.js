// HTMLLIElement 对象
HTMLLIElement = function HTMLLIElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLLIElement,"HTMLLIElement");
Object.setPrototypeOf(HTMLLIElement.prototype, HTMLElement.prototype);
framevm.toolsFunc.defineProperty(HTMLLIElement.prototype, "value", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLLIElement.prototype, "HTMLLIElement", "value_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, HTMLLIElement.prototype, "HTMLLIElement", "value_set", arguments)}});
framevm.toolsFunc.defineProperty(HTMLLIElement.prototype, "type", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLLIElement.prototype, "HTMLLIElement", "type_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, HTMLLIElement.prototype, "HTMLLIElement", "type_set", arguments)}});
