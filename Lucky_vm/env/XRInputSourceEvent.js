// XRInputSourceEvent 对象 
XRInputSourceEvent = function XRInputSourceEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'XRInputSourceEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(XRInputSourceEvent,"XRInputSourceEvent");
Object.setPrototypeOf(XRInputSourceEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(XRInputSourceEvent.prototype, "frame", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRInputSourceEvent.prototype, "XRInputSourceEvent", "frame_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRInputSourceEvent.prototype, "inputSource", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRInputSourceEvent.prototype, "XRInputSourceEvent", "inputSource_get", arguments)}, set:undefined});
