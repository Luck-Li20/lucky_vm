// SpeechSynthesisErrorEvent 对象 
SpeechSynthesisErrorEvent = function SpeechSynthesisErrorEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'SpeechSynthesisErrorEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(SpeechSynthesisErrorEvent,"SpeechSynthesisErrorEvent");
Object.setPrototypeOf(SpeechSynthesisErrorEvent.prototype, SpeechSynthesisEvent.prototype);
framevm.toolsFunc.defineProperty(SpeechSynthesisErrorEvent.prototype, "error", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SpeechSynthesisErrorEvent.prototype, "SpeechSynthesisErrorEvent", "error_get", arguments)}, set:undefined});
