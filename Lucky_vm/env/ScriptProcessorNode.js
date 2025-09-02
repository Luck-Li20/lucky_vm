// ScriptProcessorNode 对象 
ScriptProcessorNode = function ScriptProcessorNode(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(ScriptProcessorNode,"ScriptProcessorNode");
Object.setPrototypeOf(ScriptProcessorNode.prototype, AudioNode.prototype);
framevm.toolsFunc.defineProperty(ScriptProcessorNode.prototype, "onaudioprocess", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ScriptProcessorNode.prototype, "ScriptProcessorNode", "onaudioprocess_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, ScriptProcessorNode.prototype, "ScriptProcessorNode", "onaudioprocess_set", arguments)}});
framevm.toolsFunc.defineProperty(ScriptProcessorNode.prototype, "bufferSize", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ScriptProcessorNode.prototype, "ScriptProcessorNode", "bufferSize_get", arguments)}, set:undefined});
