// Text 对象
Text = function Text(){};
framevm.toolsFunc.safeProto(Text,"Text");
Object.setPrototypeOf(Text.prototype, CharacterData.prototype);
framevm.toolsFunc.defineProperty(Text.prototype, "wholeText", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Text.prototype, "Text", "wholeText_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Text.prototype, "assignedSlot", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Text.prototype, "Text", "assignedSlot_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Text.prototype, "splitText", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Text.prototype, "Text", "splitText", arguments)}});
