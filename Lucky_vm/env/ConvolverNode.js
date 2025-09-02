// ConvolverNode 对象 
ConvolverNode = function ConvolverNode(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'ConvolverNode': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(ConvolverNode,"ConvolverNode");
Object.setPrototypeOf(ConvolverNode.prototype, AudioNode.prototype);
framevm.toolsFunc.defineProperty(ConvolverNode.prototype, "buffer", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ConvolverNode.prototype, "ConvolverNode", "buffer_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, ConvolverNode.prototype, "ConvolverNode", "buffer_set", arguments)}});
framevm.toolsFunc.defineProperty(ConvolverNode.prototype, "normalize", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ConvolverNode.prototype, "ConvolverNode", "normalize_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, ConvolverNode.prototype, "ConvolverNode", "normalize_set", arguments)}});
