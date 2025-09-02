// IIRFilterNode 对象 
IIRFilterNode = function IIRFilterNode(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'IIRFilterNode': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(IIRFilterNode,"IIRFilterNode");
Object.setPrototypeOf(IIRFilterNode.prototype, AudioNode.prototype);
framevm.toolsFunc.defineProperty(IIRFilterNode.prototype, "getFrequencyResponse", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, IIRFilterNode.prototype, "IIRFilterNode", "getFrequencyResponse", arguments)}});
