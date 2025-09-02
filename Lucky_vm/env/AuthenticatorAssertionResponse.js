// AuthenticatorAssertionResponse 对象 
AuthenticatorAssertionResponse = function AuthenticatorAssertionResponse(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(AuthenticatorAssertionResponse,"AuthenticatorAssertionResponse");
Object.setPrototypeOf(AuthenticatorAssertionResponse.prototype, AuthenticatorResponse.prototype);
framevm.toolsFunc.defineProperty(AuthenticatorAssertionResponse.prototype, "authenticatorData", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AuthenticatorAssertionResponse.prototype, "AuthenticatorAssertionResponse", "authenticatorData_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(AuthenticatorAssertionResponse.prototype, "signature", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AuthenticatorAssertionResponse.prototype, "AuthenticatorAssertionResponse", "signature_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(AuthenticatorAssertionResponse.prototype, "userHandle", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AuthenticatorAssertionResponse.prototype, "AuthenticatorAssertionResponse", "userHandle_get", arguments)}, set:undefined});
