// PermissionStatus 对象 
PermissionStatus = function PermissionStatus(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(PermissionStatus,"PermissionStatus");
Object.setPrototypeOf(PermissionStatus.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(PermissionStatus.prototype, "name", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PermissionStatus.prototype, "PermissionStatus", "name_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PermissionStatus.prototype, "state", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PermissionStatus.prototype, "PermissionStatus", "state_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PermissionStatus.prototype, "onchange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PermissionStatus.prototype, "PermissionStatus", "onchange_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, PermissionStatus.prototype, "PermissionStatus", "onchange_set", arguments)}});
