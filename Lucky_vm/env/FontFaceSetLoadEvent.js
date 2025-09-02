// FontFaceSetLoadEvent 对象 
FontFaceSetLoadEvent = function FontFaceSetLoadEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'FontFaceSetLoadEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(FontFaceSetLoadEvent,"FontFaceSetLoadEvent");
Object.setPrototypeOf(FontFaceSetLoadEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(FontFaceSetLoadEvent.prototype, "fontfaces", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, FontFaceSetLoadEvent.prototype, "FontFaceSetLoadEvent", "fontfaces_get", arguments)}, set:undefined});
