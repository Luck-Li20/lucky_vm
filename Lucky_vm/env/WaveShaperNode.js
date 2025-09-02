// WaveShaperNode 对象 
WaveShaperNode = function WaveShaperNode(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'WaveShaperNode': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(WaveShaperNode,"WaveShaperNode");
Object.setPrototypeOf(WaveShaperNode.prototype, AudioNode.prototype);
framevm.toolsFunc.defineProperty(WaveShaperNode.prototype, "curve", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WaveShaperNode.prototype, "WaveShaperNode", "curve_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, WaveShaperNode.prototype, "WaveShaperNode", "curve_set", arguments)}});
framevm.toolsFunc.defineProperty(WaveShaperNode.prototype, "oversample", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WaveShaperNode.prototype, "WaveShaperNode", "oversample_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, WaveShaperNode.prototype, "WaveShaperNode", "oversample_set", arguments)}});
