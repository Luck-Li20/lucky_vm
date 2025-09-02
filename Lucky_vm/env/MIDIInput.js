// MIDIInput 对象 
MIDIInput = function MIDIInput(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(MIDIInput,"MIDIInput");
Object.setPrototypeOf(MIDIInput.prototype, MIDIPort.prototype);
framevm.toolsFunc.defineProperty(MIDIInput.prototype, "onmidimessage", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MIDIInput.prototype, "MIDIInput", "onmidimessage_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, MIDIInput.prototype, "MIDIInput", "onmidimessage_set", arguments)}});
