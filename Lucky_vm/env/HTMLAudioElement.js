// HTMLAudioElement 对象 
HTMLAudioElement = function HTMLAudioElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLAudioElement,"HTMLAudioElement");
Object.setPrototypeOf(HTMLAudioElement.prototype, HTMLMediaElement.prototype);
