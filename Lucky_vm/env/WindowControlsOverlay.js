// WindowControlsOverlay 对象 
WindowControlsOverlay = function WindowControlsOverlay(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(WindowControlsOverlay,"WindowControlsOverlay");
Object.setPrototypeOf(WindowControlsOverlay.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(WindowControlsOverlay.prototype, "visible", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WindowControlsOverlay.prototype, "WindowControlsOverlay", "visible_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(WindowControlsOverlay.prototype, "ongeometrychange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WindowControlsOverlay.prototype, "WindowControlsOverlay", "ongeometrychange_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, WindowControlsOverlay.prototype, "WindowControlsOverlay", "ongeometrychange_set", arguments)}});
framevm.toolsFunc.defineProperty(WindowControlsOverlay.prototype, "getTitlebarAreaRect", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, WindowControlsOverlay.prototype, "WindowControlsOverlay", "getTitlebarAreaRect", arguments)}});
