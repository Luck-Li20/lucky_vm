// AudioWorkletNode 对象 
AudioWorkletNode = function AudioWorkletNode(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'AudioWorkletNode': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(AudioWorkletNode,"AudioWorkletNode");
Object.setPrototypeOf(AudioWorkletNode.prototype, AudioNode.prototype);
framevm.toolsFunc.defineProperty(AudioWorkletNode.prototype, "parameters", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AudioWorkletNode.prototype, "AudioWorkletNode", "parameters_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(AudioWorkletNode.prototype, "port", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AudioWorkletNode.prototype, "AudioWorkletNode", "port_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(AudioWorkletNode.prototype, "onprocessorerror", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AudioWorkletNode.prototype, "AudioWorkletNode", "onprocessorerror_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, AudioWorkletNode.prototype, "AudioWorkletNode", "onprocessorerror_set", arguments)}});
