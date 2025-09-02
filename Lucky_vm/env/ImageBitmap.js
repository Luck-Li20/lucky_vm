// ImageBitmap 对象 
ImageBitmap = function ImageBitmap(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(ImageBitmap,"ImageBitmap");
framevm.toolsFunc.defineProperty(ImageBitmap.prototype, "width", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ImageBitmap.prototype, "ImageBitmap", "width_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ImageBitmap.prototype, "height", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ImageBitmap.prototype, "ImageBitmap", "height_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ImageBitmap.prototype, "close", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, ImageBitmap.prototype, "ImageBitmap", "close", arguments)}});
