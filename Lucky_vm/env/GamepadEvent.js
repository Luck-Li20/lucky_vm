// GamepadEvent 对象 
GamepadEvent = function GamepadEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'GamepadEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(GamepadEvent,"GamepadEvent");
Object.setPrototypeOf(GamepadEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(GamepadEvent.prototype, "gamepad", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, GamepadEvent.prototype, "GamepadEvent", "gamepad_get", arguments)}, set:undefined});
