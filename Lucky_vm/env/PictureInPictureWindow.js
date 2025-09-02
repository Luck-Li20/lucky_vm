// PictureInPictureWindow 对象 
PictureInPictureWindow = function PictureInPictureWindow(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(PictureInPictureWindow,"PictureInPictureWindow");
Object.setPrototypeOf(PictureInPictureWindow.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(PictureInPictureWindow.prototype, "width", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PictureInPictureWindow.prototype, "PictureInPictureWindow", "width_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PictureInPictureWindow.prototype, "height", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PictureInPictureWindow.prototype, "PictureInPictureWindow", "height_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PictureInPictureWindow.prototype, "onresize", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PictureInPictureWindow.prototype, "PictureInPictureWindow", "onresize_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, PictureInPictureWindow.prototype, "PictureInPictureWindow", "onresize_set", arguments)}});
