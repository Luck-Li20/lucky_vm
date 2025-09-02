// GainNode 对象 
GainNode = function GainNode(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'GainNode': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(GainNode,"GainNode");
Object.setPrototypeOf(GainNode.prototype, AudioNode.prototype);
framevm.toolsFunc.defineProperty(GainNode.prototype, "gain", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, GainNode.prototype, "GainNode", "gain_get", arguments)}, set:undefined});
