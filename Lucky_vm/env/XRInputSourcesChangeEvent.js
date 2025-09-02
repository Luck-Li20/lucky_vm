// XRInputSourcesChangeEvent 对象 
XRInputSourcesChangeEvent = function XRInputSourcesChangeEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'XRInputSourcesChangeEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(XRInputSourcesChangeEvent,"XRInputSourcesChangeEvent");
Object.setPrototypeOf(XRInputSourcesChangeEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(XRInputSourcesChangeEvent.prototype, "session", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRInputSourcesChangeEvent.prototype, "XRInputSourcesChangeEvent", "session_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRInputSourcesChangeEvent.prototype, "added", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRInputSourcesChangeEvent.prototype, "XRInputSourcesChangeEvent", "added_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRInputSourcesChangeEvent.prototype, "removed", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRInputSourcesChangeEvent.prototype, "XRInputSourcesChangeEvent", "removed_get", arguments)}, set:undefined});
