// LaunchParams 对象 
LaunchParams = function LaunchParams(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(LaunchParams,"LaunchParams");
framevm.toolsFunc.defineProperty(LaunchParams.prototype, "targetURL", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, LaunchParams.prototype, "LaunchParams", "targetURL_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(LaunchParams.prototype, "files", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, LaunchParams.prototype, "LaunchParams", "files_get", arguments)}, set:undefined});
