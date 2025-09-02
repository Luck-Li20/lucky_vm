// Storage 对象
Storage = function Storage(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(Storage,"Storage");
framevm.toolsFunc.defineProperty(Storage.prototype, "length", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Storage.prototype, "Storage", "length_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Storage.prototype, "clear", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Storage.prototype, "Storage", "clear", arguments)}});
framevm.toolsFunc.defineProperty(Storage.prototype, "getItem", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Storage.prototype, "Storage", "getItem", arguments)}});
framevm.toolsFunc.defineProperty(Storage.prototype, "key", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Storage.prototype, "Storage", "key", arguments)}});
framevm.toolsFunc.defineProperty(Storage.prototype, "removeItem", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Storage.prototype, "Storage", "removeItem", arguments)}});
framevm.toolsFunc.defineProperty(Storage.prototype, "setItem", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Storage.prototype, "Storage", "setItem", arguments)}});


// localStorage对象
localStorage = {}
Object.setPrototypeOf(localStorage, Storage.prototype);
// sessionStorage对象
sessionStorage = {}
Object.setPrototypeOf(sessionStorage, Storage.prototype);
