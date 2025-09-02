// WebTransportError 对象 
WebTransportError = function WebTransportError(){};
framevm.toolsFunc.safeProto(WebTransportError,"WebTransportError");
Object.setPrototypeOf(WebTransportError.prototype, DOMException.prototype);
framevm.toolsFunc.defineProperty(WebTransportError.prototype, "streamErrorCode", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WebTransportError.prototype, "WebTransportError", "streamErrorCode_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(WebTransportError.prototype, "source", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WebTransportError.prototype, "WebTransportError", "source_get", arguments)}, set:undefined});
