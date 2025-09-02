// MediaKeyMessageEvent 对象 
MediaKeyMessageEvent = function MediaKeyMessageEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaKeyMessageEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(MediaKeyMessageEvent,"MediaKeyMessageEvent");
Object.setPrototypeOf(MediaKeyMessageEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(MediaKeyMessageEvent.prototype, "messageType", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaKeyMessageEvent.prototype, "MediaKeyMessageEvent", "messageType_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MediaKeyMessageEvent.prototype, "message", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MediaKeyMessageEvent.prototype, "MediaKeyMessageEvent", "message_get", arguments)}, set:undefined});
