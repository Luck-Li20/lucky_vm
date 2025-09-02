// FederatedCredential 对象 
FederatedCredential = function FederatedCredential(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'FederatedCredential': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(FederatedCredential,"FederatedCredential");
Object.setPrototypeOf(FederatedCredential.prototype, Credential.prototype);
framevm.toolsFunc.defineProperty(FederatedCredential.prototype, "provider", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, FederatedCredential.prototype, "FederatedCredential", "provider_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(FederatedCredential.prototype, "protocol", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, FederatedCredential.prototype, "FederatedCredential", "protocol_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(FederatedCredential.prototype, "name", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, FederatedCredential.prototype, "FederatedCredential", "name_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(FederatedCredential.prototype, "iconURL", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, FederatedCredential.prototype, "FederatedCredential", "iconURL_get", arguments)}, set:undefined});
