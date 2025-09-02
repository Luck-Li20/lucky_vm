// CookieChangeEvent 对象 
CookieChangeEvent = function CookieChangeEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'CookieChangeEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(CookieChangeEvent,"CookieChangeEvent");
Object.setPrototypeOf(CookieChangeEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(CookieChangeEvent.prototype, "changed", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CookieChangeEvent.prototype, "CookieChangeEvent", "changed_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CookieChangeEvent.prototype, "deleted", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CookieChangeEvent.prototype, "CookieChangeEvent", "deleted_get", arguments)}, set:undefined});
