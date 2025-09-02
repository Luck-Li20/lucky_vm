// DragEvent 对象 
DragEvent = function DragEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'DragEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(DragEvent,"DragEvent");
Object.setPrototypeOf(DragEvent.prototype, MouseEvent.prototype);
framevm.toolsFunc.defineProperty(DragEvent.prototype, "dataTransfer", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DragEvent.prototype, "DragEvent", "dataTransfer_get", arguments)}, set:undefined});
