// ImageCapture 对象 
ImageCapture = function ImageCapture(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'ImageCapture': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(ImageCapture,"ImageCapture");
framevm.toolsFunc.defineProperty(ImageCapture.prototype, "track", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ImageCapture.prototype, "ImageCapture", "track_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ImageCapture.prototype, "getPhotoCapabilities", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, ImageCapture.prototype, "ImageCapture", "getPhotoCapabilities", arguments)}});
framevm.toolsFunc.defineProperty(ImageCapture.prototype, "getPhotoSettings", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, ImageCapture.prototype, "ImageCapture", "getPhotoSettings", arguments)}});
framevm.toolsFunc.defineProperty(ImageCapture.prototype, "grabFrame", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, ImageCapture.prototype, "ImageCapture", "grabFrame", arguments)}});
framevm.toolsFunc.defineProperty(ImageCapture.prototype, "takePhoto", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, ImageCapture.prototype, "ImageCapture", "takePhoto", arguments)}});
