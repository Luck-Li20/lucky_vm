// MIDIMessageEvent 对象 
MIDIMessageEvent = function MIDIMessageEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'MIDIMessageEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(MIDIMessageEvent,"MIDIMessageEvent");
Object.setPrototypeOf(MIDIMessageEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(MIDIMessageEvent.prototype, "data", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MIDIMessageEvent.prototype, "MIDIMessageEvent", "data_get", arguments)}, set:undefined});
