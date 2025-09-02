// BackgroundFetchRecord 对象 
BackgroundFetchRecord = function BackgroundFetchRecord(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(BackgroundFetchRecord,"BackgroundFetchRecord");
framevm.toolsFunc.defineProperty(BackgroundFetchRecord.prototype, "request", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, BackgroundFetchRecord.prototype, "BackgroundFetchRecord", "request_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(BackgroundFetchRecord.prototype, "responseReady", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, BackgroundFetchRecord.prototype, "BackgroundFetchRecord", "responseReady_get", arguments)}, set:undefined});
