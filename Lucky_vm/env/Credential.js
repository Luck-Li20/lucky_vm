// Credential 对象 
Credential = function Credential(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(Credential,"Credential");
framevm.toolsFunc.defineProperty(Credential.prototype, "id", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Credential.prototype, "Credential", "id_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Credential.prototype, "type", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Credential.prototype, "Credential", "type_get", arguments)}, set:undefined});
