// ScreenDetails 对象 
ScreenDetails = function ScreenDetails(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(ScreenDetails,"ScreenDetails");
Object.setPrototypeOf(ScreenDetails.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(ScreenDetails.prototype, "screens", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ScreenDetails.prototype, "ScreenDetails", "screens_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ScreenDetails.prototype, "currentScreen", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ScreenDetails.prototype, "ScreenDetails", "currentScreen_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ScreenDetails.prototype, "onscreenschange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ScreenDetails.prototype, "ScreenDetails", "onscreenschange_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, ScreenDetails.prototype, "ScreenDetails", "onscreenschange_set", arguments)}});
framevm.toolsFunc.defineProperty(ScreenDetails.prototype, "oncurrentscreenchange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ScreenDetails.prototype, "ScreenDetails", "oncurrentscreenchange_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, ScreenDetails.prototype, "ScreenDetails", "oncurrentscreenchange_set", arguments)}});
