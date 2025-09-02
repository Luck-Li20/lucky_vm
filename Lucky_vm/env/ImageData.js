// ImageData 对象 
ImageData = function ImageData(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'ImageData': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(ImageData,"ImageData");
framevm.toolsFunc.defineProperty(ImageData.prototype, "width", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ImageData.prototype, "ImageData", "width_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ImageData.prototype, "height", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ImageData.prototype, "ImageData", "height_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ImageData.prototype, "colorSpace", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ImageData.prototype, "ImageData", "colorSpace_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ImageData.prototype, "data", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ImageData.prototype, "ImageData", "data_get", arguments)}, set:undefined});
