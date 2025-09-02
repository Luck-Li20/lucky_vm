// PictureInPictureEvent 对象 
PictureInPictureEvent = function PictureInPictureEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'PictureInPictureEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(PictureInPictureEvent,"PictureInPictureEvent");
Object.setPrototypeOf(PictureInPictureEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(PictureInPictureEvent.prototype, "pictureInPictureWindow", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PictureInPictureEvent.prototype, "PictureInPictureEvent", "pictureInPictureWindow_get", arguments)}, set:undefined});
