// MessagePort 对象 
MessagePort = function MessagePort(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(MessagePort,"MessagePort");
Object.setPrototypeOf(MessagePort.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(MessagePort.prototype, "onmessage", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MessagePort.prototype, "MessagePort", "onmessage_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, MessagePort.prototype, "MessagePort", "onmessage_set", arguments)}});
framevm.toolsFunc.defineProperty(MessagePort.prototype, "onmessageerror", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MessagePort.prototype, "MessagePort", "onmessageerror_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, MessagePort.prototype, "MessagePort", "onmessageerror_set", arguments)}});
framevm.toolsFunc.defineProperty(MessagePort.prototype, "close", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MessagePort.prototype, "MessagePort", "close", arguments)}});
framevm.toolsFunc.defineProperty(MessagePort.prototype, "postMessage", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MessagePort.prototype, "MessagePort", "postMessage", arguments)}});
framevm.toolsFunc.defineProperty(MessagePort.prototype, "start", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MessagePort.prototype, "MessagePort", "start", arguments)}});
