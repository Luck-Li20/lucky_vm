// TouchEvent 对象 
TouchEvent = function TouchEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'TouchEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(TouchEvent,"TouchEvent");
Object.setPrototypeOf(TouchEvent.prototype, UIEvent.prototype);
framevm.toolsFunc.defineProperty(TouchEvent.prototype, "touches", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TouchEvent.prototype, "TouchEvent", "touches_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TouchEvent.prototype, "targetTouches", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TouchEvent.prototype, "TouchEvent", "targetTouches_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TouchEvent.prototype, "changedTouches", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TouchEvent.prototype, "TouchEvent", "changedTouches_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TouchEvent.prototype, "altKey", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TouchEvent.prototype, "TouchEvent", "altKey_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TouchEvent.prototype, "metaKey", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TouchEvent.prototype, "TouchEvent", "metaKey_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TouchEvent.prototype, "ctrlKey", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TouchEvent.prototype, "TouchEvent", "ctrlKey_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TouchEvent.prototype, "shiftKey", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TouchEvent.prototype, "TouchEvent", "shiftKey_get", arguments)}, set:undefined});
