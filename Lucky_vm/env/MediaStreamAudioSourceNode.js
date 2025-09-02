// MediaStreamAudioSourceNode 对象 
MediaStreamAudioSourceNode = function MediaStreamAudioSourceNode(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaStreamAudioSourceNode': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(MediaStreamAudioSourceNode,"MediaStreamAudioSourceNode");
Object.setPrototypeOf(MediaStreamAudioSourceNode.prototype, AudioNode.prototype);
framevm.toolsFunc.defineProperty(MediaStreamAudioSourceNode.prototype, "mediaStream", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaStreamAudioSourceNode.prototype, "MediaStreamAudioSourceNode", "mediaStream_get", arguments)}, set:undefined});
