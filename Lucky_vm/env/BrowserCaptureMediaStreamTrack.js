// BrowserCaptureMediaStreamTrack 对象 
BrowserCaptureMediaStreamTrack = function BrowserCaptureMediaStreamTrack(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(BrowserCaptureMediaStreamTrack,"BrowserCaptureMediaStreamTrack");
Object.setPrototypeOf(BrowserCaptureMediaStreamTrack.prototype, MediaStreamTrack.prototype);
framevm.toolsFunc.defineProperty(BrowserCaptureMediaStreamTrack.prototype, "cropTo", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, BrowserCaptureMediaStreamTrack.prototype, "BrowserCaptureMediaStreamTrack", "cropTo", arguments)}});
