// WheelEvent 对象 
WheelEvent = function WheelEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'WheelEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(WheelEvent,"WheelEvent");
Object.setPrototypeOf(WheelEvent.prototype, MouseEvent.prototype);
framevm.toolsFunc.defineProperty(WheelEvent, "DOM_DELTA_PIXEL", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(WheelEvent, "DOM_DELTA_LINE", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(WheelEvent, "DOM_DELTA_PAGE", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(WheelEvent.prototype, "deltaX", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WheelEvent.prototype, "WheelEvent", "deltaX_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(WheelEvent.prototype, "deltaY", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WheelEvent.prototype, "WheelEvent", "deltaY_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(WheelEvent.prototype, "deltaZ", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WheelEvent.prototype, "WheelEvent", "deltaZ_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(WheelEvent.prototype, "deltaMode", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WheelEvent.prototype, "WheelEvent", "deltaMode_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(WheelEvent.prototype, "wheelDeltaX", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WheelEvent.prototype, "WheelEvent", "wheelDeltaX_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(WheelEvent.prototype, "wheelDeltaY", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WheelEvent.prototype, "WheelEvent", "wheelDeltaY_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(WheelEvent.prototype, "wheelDelta", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WheelEvent.prototype, "WheelEvent", "wheelDelta_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(WheelEvent.prototype, "DOM_DELTA_PIXEL", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(WheelEvent.prototype, "DOM_DELTA_LINE", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(WheelEvent.prototype, "DOM_DELTA_PAGE", {configurable:false, enumerable:true, writable:false, value:2});
