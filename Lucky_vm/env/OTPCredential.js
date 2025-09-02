// OTPCredential 对象 
OTPCredential = function OTPCredential(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(OTPCredential,"OTPCredential");
Object.setPrototypeOf(OTPCredential.prototype, Credential.prototype);
framevm.toolsFunc.defineProperty(OTPCredential.prototype, "code", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, OTPCredential.prototype, "OTPCredential", "code_get", arguments)}, set:undefined});
