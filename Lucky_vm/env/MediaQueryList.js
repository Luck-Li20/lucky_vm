// MediaQueryList 对象 
MediaQueryList = function MediaQueryList(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(MediaQueryList,"MediaQueryList");
Object.setPrototypeOf(MediaQueryList.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(MediaQueryList.prototype, "media", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryList", "media_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MediaQueryList.prototype, "matches", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryList", "matches_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MediaQueryList.prototype, "onchange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryList", "onchange_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryList", "onchange_set", arguments)}});
framevm.toolsFunc.defineProperty(MediaQueryList.prototype, "addListener", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryList", "addListener", arguments)}});
framevm.toolsFunc.defineProperty(MediaQueryList.prototype, "removeListener", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MediaQueryList.prototype, "MediaQueryList", "removeListener", arguments)}});
