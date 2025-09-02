// WebSocket 对象 
WebSocket = function WebSocket(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'WebSocket': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(WebSocket,"WebSocket");
Object.setPrototypeOf(WebSocket.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(WebSocket, "CONNECTING", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(WebSocket, "OPEN", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(WebSocket, "CLOSING", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(WebSocket, "CLOSED", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(WebSocket.prototype, "url", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "url_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(WebSocket.prototype, "readyState", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "readyState_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(WebSocket.prototype, "bufferedAmount", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "bufferedAmount_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(WebSocket.prototype, "onopen", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "onopen_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "onopen_set", arguments)}});
framevm.toolsFunc.defineProperty(WebSocket.prototype, "onerror", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "onerror_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "onerror_set", arguments)}});
framevm.toolsFunc.defineProperty(WebSocket.prototype, "onclose", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "onclose_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "onclose_set", arguments)}});
framevm.toolsFunc.defineProperty(WebSocket.prototype, "extensions", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "extensions_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(WebSocket.prototype, "protocol", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "protocol_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(WebSocket.prototype, "onmessage", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "onmessage_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "onmessage_set", arguments)}});
framevm.toolsFunc.defineProperty(WebSocket.prototype, "binaryType", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "binaryType_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "binaryType_set", arguments)}});
framevm.toolsFunc.defineProperty(WebSocket.prototype, "CONNECTING", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(WebSocket.prototype, "OPEN", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(WebSocket.prototype, "CLOSING", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(WebSocket.prototype, "CLOSED", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(WebSocket.prototype, "close", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "close", arguments)}});
framevm.toolsFunc.defineProperty(WebSocket.prototype, "send", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, WebSocket.prototype, "WebSocket", "send", arguments)}});
