// Screen 对象
Screen = function Screen(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(Screen,"Screen");
Object.setPrototypeOf(Screen.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(Screen.prototype, "availWidth", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "availWidth_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Screen.prototype, "availHeight", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "availHeight_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Screen.prototype, "width", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "width_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Screen.prototype, "height", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "height_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Screen.prototype, "colorDepth", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "colorDepth_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Screen.prototype, "pixelDepth", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "pixelDepth_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Screen.prototype, "availLeft", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "availLeft_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Screen.prototype, "availTop", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "availTop_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Screen.prototype, "orientation", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "orientation_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Screen.prototype, "onchange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "onchange_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "onchange_set", arguments)}});
framevm.toolsFunc.defineProperty(Screen.prototype, "isExtended", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "isExtended_get", arguments)}, set:undefined});
// screen对象
screen = {}
Object.setPrototypeOf(screen, Screen.prototype);
