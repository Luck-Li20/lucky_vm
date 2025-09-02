// SpeechSynthesisEvent 对象 
SpeechSynthesisEvent = function SpeechSynthesisEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'SpeechSynthesisEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(SpeechSynthesisEvent,"SpeechSynthesisEvent");
Object.setPrototypeOf(SpeechSynthesisEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(SpeechSynthesisEvent.prototype, "utterance", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SpeechSynthesisEvent.prototype, "SpeechSynthesisEvent", "utterance_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SpeechSynthesisEvent.prototype, "charIndex", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SpeechSynthesisEvent.prototype, "SpeechSynthesisEvent", "charIndex_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SpeechSynthesisEvent.prototype, "charLength", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SpeechSynthesisEvent.prototype, "SpeechSynthesisEvent", "charLength_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SpeechSynthesisEvent.prototype, "elapsedTime", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SpeechSynthesisEvent.prototype, "SpeechSynthesisEvent", "elapsedTime_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SpeechSynthesisEvent.prototype, "name", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SpeechSynthesisEvent.prototype, "SpeechSynthesisEvent", "name_get", arguments)}, set:undefined});
