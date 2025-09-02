// MediaStreamAudioDestinationNode 对象 
MediaStreamAudioDestinationNode = function MediaStreamAudioDestinationNode(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaStreamAudioDestinationNode': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(MediaStreamAudioDestinationNode,"MediaStreamAudioDestinationNode");
Object.setPrototypeOf(MediaStreamAudioDestinationNode.prototype, AudioNode.prototype);
framevm.toolsFunc.defineProperty(MediaStreamAudioDestinationNode.prototype, "stream", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaStreamAudioDestinationNode.prototype, "MediaStreamAudioDestinationNode", "stream_get", arguments)}, set:undefined});
