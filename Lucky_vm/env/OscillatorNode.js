// OscillatorNode 对象 
OscillatorNode = function OscillatorNode(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'OscillatorNode': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(OscillatorNode,"OscillatorNode");
Object.setPrototypeOf(OscillatorNode.prototype, AudioScheduledSourceNode.prototype);
framevm.toolsFunc.defineProperty(OscillatorNode.prototype, "type", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, OscillatorNode.prototype, "OscillatorNode", "type_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, OscillatorNode.prototype, "OscillatorNode", "type_set", arguments)}});
framevm.toolsFunc.defineProperty(OscillatorNode.prototype, "frequency", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, OscillatorNode.prototype, "OscillatorNode", "frequency_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(OscillatorNode.prototype, "detune", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, OscillatorNode.prototype, "OscillatorNode", "detune_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(OscillatorNode.prototype, "setPeriodicWave", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, OscillatorNode.prototype, "OscillatorNode", "setPeriodicWave", arguments)}});
