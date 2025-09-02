// MIDIOutput 对象 
MIDIOutput = function MIDIOutput(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(MIDIOutput,"MIDIOutput");
Object.setPrototypeOf(MIDIOutput.prototype, MIDIPort.prototype);
framevm.toolsFunc.defineProperty(MIDIOutput.prototype, "send", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MIDIOutput.prototype, "MIDIOutput", "send", arguments)}});
