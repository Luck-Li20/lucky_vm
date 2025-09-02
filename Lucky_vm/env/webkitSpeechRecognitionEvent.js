// SpeechRecognitionEvent 对象 
SpeechRecognitionEvent = function SpeechRecognitionEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'SpeechRecognitionEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(SpeechRecognitionEvent,"SpeechRecognitionEvent");
Object.setPrototypeOf(SpeechRecognitionEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(SpeechRecognitionEvent.prototype, "resultIndex", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SpeechRecognitionEvent.prototype, "SpeechRecognitionEvent", "resultIndex_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SpeechRecognitionEvent.prototype, "results", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SpeechRecognitionEvent.prototype, "SpeechRecognitionEvent", "results_get", arguments)}, set:undefined});
