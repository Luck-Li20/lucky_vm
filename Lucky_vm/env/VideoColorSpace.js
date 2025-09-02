// VideoColorSpace 对象 
VideoColorSpace = function VideoColorSpace(){};
framevm.toolsFunc.safeProto(VideoColorSpace,"VideoColorSpace");
framevm.toolsFunc.defineProperty(VideoColorSpace.prototype, "primaries", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, VideoColorSpace.prototype, "VideoColorSpace", "primaries_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(VideoColorSpace.prototype, "transfer", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, VideoColorSpace.prototype, "VideoColorSpace", "transfer_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(VideoColorSpace.prototype, "matrix", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, VideoColorSpace.prototype, "VideoColorSpace", "matrix_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(VideoColorSpace.prototype, "fullRange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, VideoColorSpace.prototype, "VideoColorSpace", "fullRange_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(VideoColorSpace.prototype, "toJSON", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, VideoColorSpace.prototype, "VideoColorSpace", "toJSON", arguments)}});
