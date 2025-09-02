// StereoPannerNode 对象 
StereoPannerNode = function StereoPannerNode(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'StereoPannerNode': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(StereoPannerNode,"StereoPannerNode");
Object.setPrototypeOf(StereoPannerNode.prototype, AudioNode.prototype);
framevm.toolsFunc.defineProperty(StereoPannerNode.prototype, "pan", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, StereoPannerNode.prototype, "StereoPannerNode", "pan_get", arguments)}, set:undefined});
