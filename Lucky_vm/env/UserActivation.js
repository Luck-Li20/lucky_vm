// UserActivation 对象
UserActivation = function UserActivation(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(UserActivation,"UserActivation");
framevm.toolsFunc.defineProperty(UserActivation.prototype, "hasBeenActive", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, UserActivation.prototype, "UserActivation", "hasBeenActive_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(UserActivation.prototype, "isActive", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, UserActivation.prototype, "UserActivation", "isActive_get", arguments)}, set:undefined});
