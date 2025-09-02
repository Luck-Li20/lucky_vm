// MediaStreamTrackGenerator 对象 
MediaStreamTrackGenerator = function MediaStreamTrackGenerator(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaStreamTrackGenerator': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(MediaStreamTrackGenerator,"MediaStreamTrackGenerator");
Object.setPrototypeOf(MediaStreamTrackGenerator.prototype, MediaStreamTrack.prototype);
framevm.toolsFunc.defineProperty(MediaStreamTrackGenerator.prototype, "writable", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaStreamTrackGenerator.prototype, "MediaStreamTrackGenerator", "writable_get", arguments)}, set:undefined});
