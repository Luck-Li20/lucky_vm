// SpeechRecognitionErrorEvent 对象 
SpeechRecognitionErrorEvent = function SpeechRecognitionErrorEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'SpeechRecognitionErrorEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(SpeechRecognitionErrorEvent,"SpeechRecognitionErrorEvent");
Object.setPrototypeOf(SpeechRecognitionErrorEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(SpeechRecognitionErrorEvent.prototype, "error", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SpeechRecognitionErrorEvent.prototype, "SpeechRecognitionErrorEvent", "error_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SpeechRecognitionErrorEvent.prototype, "message", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SpeechRecognitionErrorEvent.prototype, "SpeechRecognitionErrorEvent", "message_get", arguments)}, set:undefined});
