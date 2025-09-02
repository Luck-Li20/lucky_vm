// XRReferenceSpaceEvent 对象 
XRReferenceSpaceEvent = function XRReferenceSpaceEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'XRReferenceSpaceEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(XRReferenceSpaceEvent,"XRReferenceSpaceEvent");
Object.setPrototypeOf(XRReferenceSpaceEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(XRReferenceSpaceEvent.prototype, "referenceSpace", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRReferenceSpaceEvent.prototype, "XRReferenceSpaceEvent", "referenceSpace_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRReferenceSpaceEvent.prototype, "transform", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRReferenceSpaceEvent.prototype, "XRReferenceSpaceEvent", "transform_get", arguments)}, set:undefined});
