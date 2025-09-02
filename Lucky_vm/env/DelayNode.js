// DelayNode 对象 
DelayNode = function DelayNode(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'DelayNode': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(DelayNode,"DelayNode");
Object.setPrototypeOf(DelayNode.prototype, AudioNode.prototype);
framevm.toolsFunc.defineProperty(DelayNode.prototype, "delayTime", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DelayNode.prototype, "DelayNode", "delayTime_get", arguments)}, set:undefined});
