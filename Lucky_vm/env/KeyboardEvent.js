// KeyboardEvent 对象 
KeyboardEvent = function KeyboardEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'KeyboardEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(KeyboardEvent,"KeyboardEvent");
Object.setPrototypeOf(KeyboardEvent.prototype, UIEvent.prototype);
framevm.toolsFunc.defineProperty(KeyboardEvent, "DOM_KEY_LOCATION_STANDARD", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(KeyboardEvent, "DOM_KEY_LOCATION_LEFT", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(KeyboardEvent, "DOM_KEY_LOCATION_RIGHT", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(KeyboardEvent, "DOM_KEY_LOCATION_NUMPAD", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(KeyboardEvent.prototype, "key", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "key_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(KeyboardEvent.prototype, "code", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "code_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(KeyboardEvent.prototype, "location", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "location_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(KeyboardEvent.prototype, "ctrlKey", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "ctrlKey_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(KeyboardEvent.prototype, "shiftKey", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "shiftKey_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(KeyboardEvent.prototype, "altKey", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "altKey_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(KeyboardEvent.prototype, "metaKey", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "metaKey_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(KeyboardEvent.prototype, "repeat", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "repeat_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(KeyboardEvent.prototype, "isComposing", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "isComposing_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(KeyboardEvent.prototype, "charCode", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "charCode_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(KeyboardEvent.prototype, "keyCode", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "keyCode_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(KeyboardEvent.prototype, "DOM_KEY_LOCATION_STANDARD", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(KeyboardEvent.prototype, "DOM_KEY_LOCATION_LEFT", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(KeyboardEvent.prototype, "DOM_KEY_LOCATION_RIGHT", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(KeyboardEvent.prototype, "DOM_KEY_LOCATION_NUMPAD", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(KeyboardEvent.prototype, "getModifierState", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "getModifierState", arguments)}});
framevm.toolsFunc.defineProperty(KeyboardEvent.prototype, "initKeyboardEvent", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, KeyboardEvent.prototype, "KeyboardEvent", "initKeyboardEvent", arguments)}});
