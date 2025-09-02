// HTMLBaseElement 对象 
HTMLBaseElement = function HTMLBaseElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLBaseElement,"HTMLBaseElement");
Object.setPrototypeOf(HTMLBaseElement.prototype, HTMLElement.prototype);
framevm.toolsFunc.defineProperty(HTMLBaseElement.prototype, "href", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLBaseElement.prototype, "HTMLBaseElement", "href_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, HTMLBaseElement.prototype, "HTMLBaseElement", "href_set", arguments)}});
framevm.toolsFunc.defineProperty(HTMLBaseElement.prototype, "target", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLBaseElement.prototype, "HTMLBaseElement", "target_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, HTMLBaseElement.prototype, "HTMLBaseElement", "target_set", arguments)}});
