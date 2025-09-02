// GamepadButton 对象 
GamepadButton = function GamepadButton(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(GamepadButton,"GamepadButton");
framevm.toolsFunc.defineProperty(GamepadButton.prototype, "pressed", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, GamepadButton.prototype, "GamepadButton", "pressed_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(GamepadButton.prototype, "touched", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, GamepadButton.prototype, "GamepadButton", "touched_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(GamepadButton.prototype, "value", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, GamepadButton.prototype, "GamepadButton", "value_get", arguments)}, set:undefined});
