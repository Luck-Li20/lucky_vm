// OfflineAudioContext 对象 
// debugger;
OfflineAudioContext = function OfflineAudioContext(){
    if(arguments.length  >0){
        let result = new Object();
        result.arg_=arguments;
        result = framevm.toolsFunc.createProxyObj(result,OfflineAudioContext,`new OfflineAudioContext `);
        console.log(`OfflineAudioContext new   --->`,result);
        return result;
    }else{
        return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'MutationObserver': 1 argument required, but only 0 present.");
    }
    
    // return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'OfflineAudioContext': 1 argument required, but only 0 present.");
};

framevm.toolsFunc.safeProto(OfflineAudioContext,"OfflineAudioContext");

Object.setPrototypeOf(OfflineAudioContext.prototype, BaseAudioContext.prototype);

framevm.toolsFunc.defineProperty(OfflineAudioContext.prototype, "oncomplete", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContext", "oncomplete_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContext", "oncomplete_set", arguments)}});

framevm.toolsFunc.defineProperty(OfflineAudioContext.prototype, "length", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContext", "length_get", arguments)}, set:undefined});

framevm.toolsFunc.defineProperty(OfflineAudioContext.prototype, "resume", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContext", "resume", arguments)}});

framevm.toolsFunc.defineProperty(OfflineAudioContext.prototype, "startRendering", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContext", "startRendering", arguments)}});

framevm.toolsFunc.defineProperty(OfflineAudioContext.prototype, "suspend", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, OfflineAudioContext.prototype, "OfflineAudioContext", "suspend", arguments)}});

