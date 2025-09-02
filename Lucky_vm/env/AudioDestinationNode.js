// AudioDestinationNode 对象 
AudioDestinationNode = function AudioDestinationNode(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(AudioDestinationNode,"AudioDestinationNode");
Object.setPrototypeOf(AudioDestinationNode.prototype, AudioNode.prototype);
framevm.toolsFunc.defineProperty(AudioDestinationNode.prototype, "maxChannelCount", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AudioDestinationNode.prototype, "AudioDestinationNode", "maxChannelCount_get", arguments)}, set:undefined});
