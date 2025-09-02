// Plugin 对象
Plugin = function Plugin(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(Plugin,"Plugin");
framevm.toolsFunc.defineProperty(Plugin.prototype, "name", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Plugin.prototype, "Plugin", "name_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Plugin.prototype, "filename", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Plugin.prototype, "Plugin", "filename_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Plugin.prototype, "description", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Plugin.prototype, "Plugin", "description_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Plugin.prototype, "length", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Plugin.prototype, "Plugin", "length_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Plugin.prototype, "item", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Plugin.prototype, "Plugin", "item", arguments)}});
framevm.toolsFunc.defineProperty(Plugin.prototype, "namedItem", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Plugin.prototype, "Plugin", "namedItem", arguments)}});
