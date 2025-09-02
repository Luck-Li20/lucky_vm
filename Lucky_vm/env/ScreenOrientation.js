// ScreenOrientation 对象
ScreenOrientation = function ScreenOrientation(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(ScreenOrientation,"ScreenOrientation");
Object.setPrototypeOf(ScreenOrientation.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(ScreenOrientation.prototype, "angle", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientation", "angle_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ScreenOrientation.prototype, "type", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientation", "type_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ScreenOrientation.prototype, "onchange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientation", "onchange_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientation", "onchange_set", arguments)}});
framevm.toolsFunc.defineProperty(ScreenOrientation.prototype, "lock", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientation", "lock", arguments)}});
framevm.toolsFunc.defineProperty(ScreenOrientation.prototype, "unlock", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, ScreenOrientation.prototype, "ScreenOrientation", "unlock", arguments)}});
