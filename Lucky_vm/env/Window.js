// Window 对象
Window = function Window(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(Window,"Window");
Object.setPrototypeOf(Window.prototype, WindowProperties.prototype);
framevm.toolsFunc.defineProperty(Window, "TEMPORARY", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(Window, "PERSISTENT", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(Window.prototype, "TEMPORARY", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(Window.prototype, "PERSISTENT", {configurable:false, enumerable:true, writable:false, value:1});
