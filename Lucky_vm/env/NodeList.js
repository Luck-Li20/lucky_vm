// NodeList 对象 
NodeList = function NodeList(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(NodeList,"NodeList");
framevm.toolsFunc.defineProperty(NodeList.prototype, "entries", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, NodeList.prototype, "NodeList", "entries", arguments)}});
framevm.toolsFunc.defineProperty(NodeList.prototype, "keys", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, NodeList.prototype, "NodeList", "keys", arguments)}});
framevm.toolsFunc.defineProperty(NodeList.prototype, "values", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, NodeList.prototype, "NodeList", "values", arguments)}});
framevm.toolsFunc.defineProperty(NodeList.prototype, "forEach", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, NodeList.prototype, "NodeList", "forEach", arguments)}});
framevm.toolsFunc.defineProperty(NodeList.prototype, "length", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, NodeList.prototype, "NodeList", "length_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(NodeList.prototype, "item", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, NodeList.prototype, "NodeList", "item", arguments)}});
