// OfflineAudioCompletionEvent 对象 
OfflineAudioCompletionEvent = function OfflineAudioCompletionEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'OfflineAudioCompletionEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(OfflineAudioCompletionEvent,"OfflineAudioCompletionEvent");
Object.setPrototypeOf(OfflineAudioCompletionEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(OfflineAudioCompletionEvent.prototype, "renderedBuffer", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, OfflineAudioCompletionEvent.prototype, "OfflineAudioCompletionEvent", "renderedBuffer_get", arguments)}, set:undefined});
