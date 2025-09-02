// XRAnchor 对象 
XRAnchor = function XRAnchor(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(XRAnchor,"XRAnchor");
framevm.toolsFunc.defineProperty(XRAnchor.prototype, "anchorSpace", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRAnchor.prototype, "XRAnchor", "anchorSpace_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRAnchor.prototype, "delete", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, XRAnchor.prototype, "XRAnchor", "delete", arguments)}});
