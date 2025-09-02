// MIDIAccess 对象 
MIDIAccess = function MIDIAccess(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(MIDIAccess,"MIDIAccess");
Object.setPrototypeOf(MIDIAccess.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(MIDIAccess.prototype, "inputs", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MIDIAccess.prototype, "MIDIAccess", "inputs_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MIDIAccess.prototype, "outputs", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MIDIAccess.prototype, "MIDIAccess", "outputs_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MIDIAccess.prototype, "sysexEnabled", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MIDIAccess.prototype, "MIDIAccess", "sysexEnabled_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MIDIAccess.prototype, "onstatechange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MIDIAccess.prototype, "MIDIAccess", "onstatechange_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, MIDIAccess.prototype, "MIDIAccess", "onstatechange_set", arguments)}});
