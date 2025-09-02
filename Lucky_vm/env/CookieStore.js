// CookieStore 对象 
CookieStore = function CookieStore(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CookieStore,"CookieStore");
Object.setPrototypeOf(CookieStore.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(CookieStore.prototype, "delete", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, CookieStore.prototype, "CookieStore", "delete", arguments)}});
framevm.toolsFunc.defineProperty(CookieStore.prototype, "get", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, CookieStore.prototype, "CookieStore", "get", arguments)}});
framevm.toolsFunc.defineProperty(CookieStore.prototype, "getAll", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, CookieStore.prototype, "CookieStore", "getAll", arguments)}});
framevm.toolsFunc.defineProperty(CookieStore.prototype, "set", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, CookieStore.prototype, "CookieStore", "set", arguments)}});
framevm.toolsFunc.defineProperty(CookieStore.prototype, "onchange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CookieStore.prototype, "CookieStore", "onchange_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CookieStore.prototype, "CookieStore", "onchange_set", arguments)}});
