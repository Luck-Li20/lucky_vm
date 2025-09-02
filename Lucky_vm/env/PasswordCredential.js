// PasswordCredential 对象 
PasswordCredential = function PasswordCredential(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'PasswordCredential': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(PasswordCredential,"PasswordCredential");
Object.setPrototypeOf(PasswordCredential.prototype, Credential.prototype);
framevm.toolsFunc.defineProperty(PasswordCredential.prototype, "password", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PasswordCredential.prototype, "PasswordCredential", "password_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PasswordCredential.prototype, "name", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PasswordCredential.prototype, "PasswordCredential", "name_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PasswordCredential.prototype, "iconURL", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PasswordCredential.prototype, "PasswordCredential", "iconURL_get", arguments)}, set:undefined});
