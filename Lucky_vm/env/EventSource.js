// EventSource 对象 
EventSource = function EventSource(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'EventSource': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(EventSource,"EventSource");
Object.setPrototypeOf(EventSource.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(EventSource, "CONNECTING", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(EventSource, "OPEN", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(EventSource, "CLOSED", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(EventSource.prototype, "url", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, EventSource.prototype, "EventSource", "url_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(EventSource.prototype, "withCredentials", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, EventSource.prototype, "EventSource", "withCredentials_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(EventSource.prototype, "readyState", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, EventSource.prototype, "EventSource", "readyState_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(EventSource.prototype, "onopen", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, EventSource.prototype, "EventSource", "onopen_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, EventSource.prototype, "EventSource", "onopen_set", arguments)}});
framevm.toolsFunc.defineProperty(EventSource.prototype, "onmessage", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, EventSource.prototype, "EventSource", "onmessage_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, EventSource.prototype, "EventSource", "onmessage_set", arguments)}});
framevm.toolsFunc.defineProperty(EventSource.prototype, "onerror", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, EventSource.prototype, "EventSource", "onerror_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, EventSource.prototype, "EventSource", "onerror_set", arguments)}});
framevm.toolsFunc.defineProperty(EventSource.prototype, "CONNECTING", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(EventSource.prototype, "OPEN", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(EventSource.prototype, "CLOSED", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(EventSource.prototype, "close", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, EventSource.prototype, "EventSource", "close", arguments)}});
