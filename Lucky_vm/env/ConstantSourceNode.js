// ConstantSourceNode 对象 
ConstantSourceNode = function ConstantSourceNode(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'ConstantSourceNode': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(ConstantSourceNode,"ConstantSourceNode");
Object.setPrototypeOf(ConstantSourceNode.prototype, AudioScheduledSourceNode.prototype);
framevm.toolsFunc.defineProperty(ConstantSourceNode.prototype, "offset", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ConstantSourceNode.prototype, "ConstantSourceNode", "offset_get", arguments)}, set:undefined});
