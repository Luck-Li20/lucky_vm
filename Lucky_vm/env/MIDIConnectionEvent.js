// MIDIConnectionEvent 对象 
MIDIConnectionEvent = function MIDIConnectionEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'MIDIConnectionEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(MIDIConnectionEvent,"MIDIConnectionEvent");
Object.setPrototypeOf(MIDIConnectionEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(MIDIConnectionEvent.prototype, "port", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MIDIConnectionEvent.prototype, "MIDIConnectionEvent", "port_get", arguments)}, set:undefined});
