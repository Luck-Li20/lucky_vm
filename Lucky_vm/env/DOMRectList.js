// DOMRectList 对象 
DOMRectList = function DOMRectList(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(DOMRectList,"DOMRectList");
framevm.toolsFunc.defineProperty(DOMRectList.prototype, "length", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DOMRectList.prototype, "DOMRectList", "length_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(DOMRectList.prototype, "item", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, DOMRectList.prototype, "DOMRectList", "item", arguments)}});
