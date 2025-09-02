// AudioProcessingEvent 对象 
AudioProcessingEvent = function AudioProcessingEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'AudioProcessingEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(AudioProcessingEvent,"AudioProcessingEvent");
Object.setPrototypeOf(AudioProcessingEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(AudioProcessingEvent.prototype, "playbackTime", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AudioProcessingEvent.prototype, "AudioProcessingEvent", "playbackTime_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(AudioProcessingEvent.prototype, "inputBuffer", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AudioProcessingEvent.prototype, "AudioProcessingEvent", "inputBuffer_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(AudioProcessingEvent.prototype, "outputBuffer", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AudioProcessingEvent.prototype, "AudioProcessingEvent", "outputBuffer_get", arguments)}, set:undefined});
