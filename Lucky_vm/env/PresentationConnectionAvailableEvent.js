// PresentationConnectionAvailableEvent 对象 
PresentationConnectionAvailableEvent = function PresentationConnectionAvailableEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'PresentationConnectionAvailableEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(PresentationConnectionAvailableEvent,"PresentationConnectionAvailableEvent");
Object.setPrototypeOf(PresentationConnectionAvailableEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(PresentationConnectionAvailableEvent.prototype, "connection", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PresentationConnectionAvailableEvent.prototype, "PresentationConnectionAvailableEvent", "connection_get", arguments)}, set:undefined});
