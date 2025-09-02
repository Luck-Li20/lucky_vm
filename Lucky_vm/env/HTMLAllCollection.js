// HTMLAllCollection 对象
HTMLAllCollection = function HTMLAllCollection(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLAllCollection,"HTMLAllCollection");
framevm.toolsFunc.defineProperty(HTMLAllCollection.prototype, "length", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLAllCollection.prototype, "HTMLAllCollection", "length_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(HTMLAllCollection.prototype, "item", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, HTMLAllCollection.prototype, "HTMLAllCollection", "item", arguments)}});
framevm.toolsFunc.defineProperty(HTMLAllCollection.prototype, "namedItem", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, HTMLAllCollection.prototype, "HTMLAllCollection", "namedItem", arguments)}});
