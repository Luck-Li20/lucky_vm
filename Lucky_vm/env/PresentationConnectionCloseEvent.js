// PresentationConnectionCloseEvent 对象 
PresentationConnectionCloseEvent = function PresentationConnectionCloseEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'PresentationConnectionCloseEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(PresentationConnectionCloseEvent,"PresentationConnectionCloseEvent");
Object.setPrototypeOf(PresentationConnectionCloseEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(PresentationConnectionCloseEvent.prototype, "reason", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PresentationConnectionCloseEvent.prototype, "PresentationConnectionCloseEvent", "reason_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PresentationConnectionCloseEvent.prototype, "message", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PresentationConnectionCloseEvent.prototype, "PresentationConnectionCloseEvent", "message_get", arguments)}, set:undefined});
