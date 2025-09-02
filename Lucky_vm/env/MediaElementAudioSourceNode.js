// MediaElementAudioSourceNode 对象 
MediaElementAudioSourceNode = function MediaElementAudioSourceNode(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaElementAudioSourceNode': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(MediaElementAudioSourceNode,"MediaElementAudioSourceNode");
Object.setPrototypeOf(MediaElementAudioSourceNode.prototype, AudioNode.prototype);
framevm.toolsFunc.defineProperty(MediaElementAudioSourceNode.prototype, "mediaElement", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaElementAudioSourceNode.prototype, "MediaElementAudioSourceNode", "mediaElement_get", arguments)}, set:undefined});
