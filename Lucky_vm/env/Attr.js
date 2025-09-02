// Attr 对象 
Attr = function Attr(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(Attr,"Attr");
Object.setPrototypeOf(Attr.prototype, Node.prototype);
framevm.toolsFunc.defineProperty(Attr.prototype, "namespaceURI", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "namespaceURI_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Attr.prototype, "prefix", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "prefix_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Attr.prototype, "localName", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "localName_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Attr.prototype, "name", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "name_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Attr.prototype, "value", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "value_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "value_set", arguments)}});
framevm.toolsFunc.defineProperty(Attr.prototype, "ownerElement", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "ownerElement_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Attr.prototype, "specified", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Attr.prototype, "Attr", "specified_get", arguments)}, set:undefined});
