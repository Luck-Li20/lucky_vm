// PresentationConnectionList 对象 
PresentationConnectionList = function PresentationConnectionList(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(PresentationConnectionList,"PresentationConnectionList");
Object.setPrototypeOf(PresentationConnectionList.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(PresentationConnectionList.prototype, "connections", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PresentationConnectionList.prototype, "PresentationConnectionList", "connections_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PresentationConnectionList.prototype, "onconnectionavailable", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PresentationConnectionList.prototype, "PresentationConnectionList", "onconnectionavailable_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, PresentationConnectionList.prototype, "PresentationConnectionList", "onconnectionavailable_set", arguments)}});
