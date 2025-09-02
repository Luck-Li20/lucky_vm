// ClipboardItem 对象 
ClipboardItem = function ClipboardItem(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'ClipboardItem': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(ClipboardItem,"ClipboardItem");
framevm.toolsFunc.defineProperty(ClipboardItem.prototype, "types", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ClipboardItem.prototype, "ClipboardItem", "types_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ClipboardItem.prototype, "getType", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, ClipboardItem.prototype, "ClipboardItem", "getType", arguments)}});
