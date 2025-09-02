// HashChangeEvent 对象 
HashChangeEvent = function HashChangeEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'HashChangeEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(HashChangeEvent,"HashChangeEvent");
Object.setPrototypeOf(HashChangeEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(HashChangeEvent.prototype, "oldURL", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HashChangeEvent.prototype, "HashChangeEvent", "oldURL_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(HashChangeEvent.prototype, "newURL", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HashChangeEvent.prototype, "HashChangeEvent", "newURL_get", arguments)}, set:undefined});
