// IdentityCredential 对象 
IdentityCredential = function IdentityCredential(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(IdentityCredential,"IdentityCredential");
Object.setPrototypeOf(IdentityCredential.prototype, Credential.prototype);
framevm.toolsFunc.defineProperty(IdentityCredential.prototype, "token", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IdentityCredential.prototype, "IdentityCredential", "token_get", arguments)}, set:undefined});
