// MessageChannel 对象 
MessageChannel = function MessageChannel(){};
framevm.toolsFunc.safeProto(MessageChannel,"MessageChannel");
framevm.toolsFunc.defineProperty(MessageChannel.prototype, "port1", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MessageChannel.prototype, "MessageChannel", "port1_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MessageChannel.prototype, "port2", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MessageChannel.prototype, "MessageChannel", "port2_get", arguments)}, set:undefined});
