// ScreenDetailed 对象 
ScreenDetailed = function ScreenDetailed(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(ScreenDetailed,"ScreenDetailed");
Object.setPrototypeOf(ScreenDetailed.prototype, Screen.prototype);
framevm.toolsFunc.defineProperty(ScreenDetailed.prototype, "left", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ScreenDetailed.prototype, "ScreenDetailed", "left_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ScreenDetailed.prototype, "top", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ScreenDetailed.prototype, "ScreenDetailed", "top_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ScreenDetailed.prototype, "isPrimary", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ScreenDetailed.prototype, "ScreenDetailed", "isPrimary_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ScreenDetailed.prototype, "isInternal", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ScreenDetailed.prototype, "ScreenDetailed", "isInternal_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ScreenDetailed.prototype, "devicePixelRatio", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ScreenDetailed.prototype, "ScreenDetailed", "devicePixelRatio_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ScreenDetailed.prototype, "label", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ScreenDetailed.prototype, "ScreenDetailed", "label_get", arguments)}, set:undefined});
