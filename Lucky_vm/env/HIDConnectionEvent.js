// HIDConnectionEvent 对象 
HIDConnectionEvent = function HIDConnectionEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'HIDConnectionEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(HIDConnectionEvent,"HIDConnectionEvent");
Object.setPrototypeOf(HIDConnectionEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(HIDConnectionEvent.prototype, "device", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HIDConnectionEvent.prototype, "HIDConnectionEvent", "device_get", arguments)}, set:undefined});
