// AudioSinkInfo 对象 
AudioSinkInfo = function AudioSinkInfo(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(AudioSinkInfo,"AudioSinkInfo");
framevm.toolsFunc.defineProperty(AudioSinkInfo.prototype, "type", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AudioSinkInfo.prototype, "AudioSinkInfo", "type_get", arguments)}, set:undefined});
