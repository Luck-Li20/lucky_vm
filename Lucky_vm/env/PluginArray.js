// PluginArray 对象
PluginArray = function PluginArray(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(PluginArray,"PluginArray");
framevm.toolsFunc.defineProperty(PluginArray.prototype, "length", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PluginArray.prototype, "PluginArray", "length_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PluginArray.prototype, "item", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, PluginArray.prototype, "PluginArray", "item", arguments)}});
framevm.toolsFunc.defineProperty(PluginArray.prototype, "namedItem", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, PluginArray.prototype, "PluginArray", "namedItem", arguments)}});
framevm.toolsFunc.defineProperty(PluginArray.prototype, "refresh", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, PluginArray.prototype, "PluginArray", "refresh", arguments)}});
