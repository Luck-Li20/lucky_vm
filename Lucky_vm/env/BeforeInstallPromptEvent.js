// BeforeInstallPromptEvent 对象 
BeforeInstallPromptEvent = function BeforeInstallPromptEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'BeforeInstallPromptEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(BeforeInstallPromptEvent,"BeforeInstallPromptEvent");
Object.setPrototypeOf(BeforeInstallPromptEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(BeforeInstallPromptEvent.prototype, "platforms", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, BeforeInstallPromptEvent.prototype, "BeforeInstallPromptEvent", "platforms_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(BeforeInstallPromptEvent.prototype, "userChoice", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, BeforeInstallPromptEvent.prototype, "BeforeInstallPromptEvent", "userChoice_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(BeforeInstallPromptEvent.prototype, "prompt", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, BeforeInstallPromptEvent.prototype, "BeforeInstallPromptEvent", "prompt", arguments)}});
