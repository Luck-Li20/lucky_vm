// Gamepad 对象 
Gamepad = function Gamepad(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(Gamepad,"Gamepad");
framevm.toolsFunc.defineProperty(Gamepad.prototype, "id", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Gamepad.prototype, "Gamepad", "id_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Gamepad.prototype, "index", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Gamepad.prototype, "Gamepad", "index_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Gamepad.prototype, "connected", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Gamepad.prototype, "Gamepad", "connected_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Gamepad.prototype, "timestamp", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Gamepad.prototype, "Gamepad", "timestamp_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Gamepad.prototype, "mapping", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Gamepad.prototype, "Gamepad", "mapping_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Gamepad.prototype, "axes", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Gamepad.prototype, "Gamepad", "axes_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Gamepad.prototype, "buttons", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Gamepad.prototype, "Gamepad", "buttons_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Gamepad.prototype, "vibrationActuator", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Gamepad.prototype, "Gamepad", "vibrationActuator_get", arguments)}, set:undefined});
