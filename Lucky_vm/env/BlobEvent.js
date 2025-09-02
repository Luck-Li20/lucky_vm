// BlobEvent 对象 
BlobEvent = function BlobEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'BlobEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(BlobEvent,"BlobEvent");
Object.setPrototypeOf(BlobEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(BlobEvent.prototype, "data", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, BlobEvent.prototype, "BlobEvent", "data_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(BlobEvent.prototype, "timecode", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, BlobEvent.prototype, "BlobEvent", "timecode_get", arguments)}, set:undefined});
