// CanvasCaptureMediaStreamTrack 对象 
CanvasCaptureMediaStreamTrack = function CanvasCaptureMediaStreamTrack(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CanvasCaptureMediaStreamTrack,"CanvasCaptureMediaStreamTrack");
Object.setPrototypeOf(CanvasCaptureMediaStreamTrack.prototype, MediaStreamTrack.prototype);
framevm.toolsFunc.defineProperty(CanvasCaptureMediaStreamTrack.prototype, "canvas", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CanvasCaptureMediaStreamTrack.prototype, "CanvasCaptureMediaStreamTrack", "canvas_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CanvasCaptureMediaStreamTrack.prototype, "requestFrame", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, CanvasCaptureMediaStreamTrack.prototype, "CanvasCaptureMediaStreamTrack", "requestFrame", arguments)}});
