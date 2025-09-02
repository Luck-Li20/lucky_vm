// ImageTrack 对象 
ImageTrack = function ImageTrack(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(ImageTrack,"ImageTrack");
framevm.toolsFunc.defineProperty(ImageTrack.prototype, "frameCount", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ImageTrack.prototype, "ImageTrack", "frameCount_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ImageTrack.prototype, "animated", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ImageTrack.prototype, "ImageTrack", "animated_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ImageTrack.prototype, "repetitionCount", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ImageTrack.prototype, "ImageTrack", "repetitionCount_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ImageTrack.prototype, "selected", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ImageTrack.prototype, "ImageTrack", "selected_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, ImageTrack.prototype, "ImageTrack", "selected_set", arguments)}});
