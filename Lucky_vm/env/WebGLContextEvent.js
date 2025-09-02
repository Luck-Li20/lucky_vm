// WebGLContextEvent 对象 
WebGLContextEvent = function WebGLContextEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'WebGLContextEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(WebGLContextEvent,"WebGLContextEvent");
Object.setPrototypeOf(WebGLContextEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(WebGLContextEvent.prototype, "statusMessage", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WebGLContextEvent.prototype, "WebGLContextEvent", "statusMessage_get", arguments)}, set:undefined});
