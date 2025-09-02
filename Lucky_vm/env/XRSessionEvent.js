// XRSessionEvent 对象 
XRSessionEvent = function XRSessionEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'XRSessionEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(XRSessionEvent,"XRSessionEvent");
Object.setPrototypeOf(XRSessionEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(XRSessionEvent.prototype, "session", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRSessionEvent.prototype, "XRSessionEvent", "session_get", arguments)}, set:undefined});
