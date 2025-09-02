// MediaQueryListEvent 对象 
MediaQueryListEvent = function MediaQueryListEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaQueryListEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(MediaQueryListEvent,"MediaQueryListEvent");
Object.setPrototypeOf(MediaQueryListEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(MediaQueryListEvent.prototype, "media", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaQueryListEvent.prototype, "MediaQueryListEvent", "media_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MediaQueryListEvent.prototype, "matches", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaQueryListEvent.prototype, "MediaQueryListEvent", "matches_get", arguments)}, set:undefined});
