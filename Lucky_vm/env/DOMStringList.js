// DOMStringList 对象
DOMStringList = function DOMStringList(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(DOMStringList,"DOMStringList");
framevm.toolsFunc.defineProperty(DOMStringList.prototype, "length", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DOMStringList.prototype, "DOMStringList", "length_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(DOMStringList.prototype, "contains", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, DOMStringList.prototype, "DOMStringList", "contains", arguments)}});
framevm.toolsFunc.defineProperty(DOMStringList.prototype, "item", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, DOMStringList.prototype, "DOMStringList", "item", arguments)}});
