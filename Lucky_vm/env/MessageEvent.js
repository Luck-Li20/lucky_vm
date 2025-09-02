// MessageEvent 对象 
MessageEvent = function MessageEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'MessageEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(MessageEvent,"MessageEvent");
Object.setPrototypeOf(MessageEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(MessageEvent.prototype, "data", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MessageEvent.prototype, "MessageEvent", "data_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MessageEvent.prototype, "origin", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MessageEvent.prototype, "MessageEvent", "origin_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MessageEvent.prototype, "lastEventId", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MessageEvent.prototype, "MessageEvent", "lastEventId_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MessageEvent.prototype, "source", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MessageEvent.prototype, "MessageEvent", "source_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MessageEvent.prototype, "ports", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MessageEvent.prototype, "MessageEvent", "ports_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MessageEvent.prototype, "userActivation", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MessageEvent.prototype, "MessageEvent", "userActivation_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MessageEvent.prototype, "initMessageEvent", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MessageEvent.prototype, "MessageEvent", "initMessageEvent", arguments)}});
