// AudioScheduledSourceNode 对象 
AudioScheduledSourceNode = function AudioScheduledSourceNode(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(AudioScheduledSourceNode,"AudioScheduledSourceNode");
Object.setPrototypeOf(AudioScheduledSourceNode.prototype, AudioNode.prototype);
framevm.toolsFunc.defineProperty(AudioScheduledSourceNode.prototype, "onended", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AudioScheduledSourceNode.prototype, "AudioScheduledSourceNode", "onended_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, AudioScheduledSourceNode.prototype, "AudioScheduledSourceNode", "onended_set", arguments)}});
framevm.toolsFunc.defineProperty(AudioScheduledSourceNode.prototype, "start", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, AudioScheduledSourceNode.prototype, "AudioScheduledSourceNode", "start", arguments)}});
framevm.toolsFunc.defineProperty(AudioScheduledSourceNode.prototype, "stop", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, AudioScheduledSourceNode.prototype, "AudioScheduledSourceNode", "stop", arguments)}});
