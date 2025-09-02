// MutationObserver 对象 

MutationObserver = function MutationObserver(){
    if(arguments.length  >0){
        let result = new Object();
        result.arg_=arguments;
        result = framevm.toolsFunc.createProxyObj(result,MutationObserver,`new MutationObserver `);
        console.log(`MutationObserver new   --->`,result);
        return result;
    }else{
        return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'MutationObserver': 1 argument required, but only 0 present.");
    }
};

framevm.toolsFunc.safeProto(MutationObserver,"MutationObserver");

framevm.toolsFunc.defineProperty(MutationObserver.prototype, "disconnect", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MutationObserver.prototype, "MutationObserver", "disconnect", arguments)}});

framevm.toolsFunc.defineProperty(MutationObserver.prototype, "observe", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MutationObserver.prototype, "MutationObserver", "observe", arguments)}});

framevm.toolsFunc.defineProperty(MutationObserver.prototype, "takeRecords", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MutationObserver.prototype, "MutationObserver", "takeRecords", arguments)}});

