// StylePropertyMap 对象 
StylePropertyMap = function StylePropertyMap(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(StylePropertyMap,"StylePropertyMap");
Object.setPrototypeOf(StylePropertyMap.prototype, StylePropertyMapReadOnly.prototype);
framevm.toolsFunc.defineProperty(StylePropertyMap.prototype, "append", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, StylePropertyMap.prototype, "StylePropertyMap", "append", arguments)}});
framevm.toolsFunc.defineProperty(StylePropertyMap.prototype, "clear", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, StylePropertyMap.prototype, "StylePropertyMap", "clear", arguments)}});
framevm.toolsFunc.defineProperty(StylePropertyMap.prototype, "delete", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, StylePropertyMap.prototype, "StylePropertyMap", "delete", arguments)}});
framevm.toolsFunc.defineProperty(StylePropertyMap.prototype, "set", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, StylePropertyMap.prototype, "StylePropertyMap", "set", arguments)}});
