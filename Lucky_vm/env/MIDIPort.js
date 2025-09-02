// MIDIPort 对象 
MIDIPort = function MIDIPort(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(MIDIPort,"MIDIPort");
Object.setPrototypeOf(MIDIPort.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(MIDIPort.prototype, "connection", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "connection_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MIDIPort.prototype, "id", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "id_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MIDIPort.prototype, "manufacturer", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "manufacturer_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MIDIPort.prototype, "name", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "name_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MIDIPort.prototype, "state", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "state_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MIDIPort.prototype, "type", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "type_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MIDIPort.prototype, "version", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "version_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MIDIPort.prototype, "onstatechange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "onstatechange_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "onstatechange_set", arguments)}});
framevm.toolsFunc.defineProperty(MIDIPort.prototype, "close", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "close", arguments)}});
framevm.toolsFunc.defineProperty(MIDIPort.prototype, "open", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "open", arguments)}});
