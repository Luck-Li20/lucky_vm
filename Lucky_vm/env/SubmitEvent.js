// SubmitEvent 对象 
SubmitEvent = function SubmitEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'SubmitEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(SubmitEvent,"SubmitEvent");
Object.setPrototypeOf(SubmitEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(SubmitEvent.prototype, "submitter", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SubmitEvent.prototype, "SubmitEvent", "submitter_get", arguments)}, set:undefined});
