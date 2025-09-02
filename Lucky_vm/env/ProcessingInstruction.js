// ProcessingInstruction 对象 
ProcessingInstruction = function ProcessingInstruction(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(ProcessingInstruction,"ProcessingInstruction");
Object.setPrototypeOf(ProcessingInstruction.prototype, CharacterData.prototype);
framevm.toolsFunc.defineProperty(ProcessingInstruction.prototype, "target", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ProcessingInstruction.prototype, "ProcessingInstruction", "target_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ProcessingInstruction.prototype, "sheet", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ProcessingInstruction.prototype, "ProcessingInstruction", "sheet_get", arguments)}, set:undefined});
