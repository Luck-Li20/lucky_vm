// ProgressEvent 对象 
ProgressEvent = function ProgressEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'ProgressEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(ProgressEvent,"ProgressEvent");
Object.setPrototypeOf(ProgressEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(ProgressEvent.prototype, "lengthComputable", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ProgressEvent.prototype, "ProgressEvent", "lengthComputable_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ProgressEvent.prototype, "loaded", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ProgressEvent.prototype, "ProgressEvent", "loaded_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(ProgressEvent.prototype, "total", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, ProgressEvent.prototype, "ProgressEvent", "total_get", arguments)}, set:undefined});
