// MediaEncryptedEvent 对象 
MediaEncryptedEvent = function MediaEncryptedEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaEncryptedEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(MediaEncryptedEvent,"MediaEncryptedEvent");
Object.setPrototypeOf(MediaEncryptedEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(MediaEncryptedEvent.prototype, "initDataType", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaEncryptedEvent.prototype, "MediaEncryptedEvent", "initDataType_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MediaEncryptedEvent.prototype, "initData", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaEncryptedEvent.prototype, "MediaEncryptedEvent", "initData_get", arguments)}, set:undefined});
