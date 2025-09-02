// SourceBufferList 对象 
SourceBufferList = function SourceBufferList(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SourceBufferList,"SourceBufferList");
Object.setPrototypeOf(SourceBufferList.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(SourceBufferList.prototype, "length", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SourceBufferList.prototype, "SourceBufferList", "length_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SourceBufferList.prototype, "onaddsourcebuffer", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SourceBufferList.prototype, "SourceBufferList", "onaddsourcebuffer_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, SourceBufferList.prototype, "SourceBufferList", "onaddsourcebuffer_set", arguments)}});
framevm.toolsFunc.defineProperty(SourceBufferList.prototype, "onremovesourcebuffer", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SourceBufferList.prototype, "SourceBufferList", "onremovesourcebuffer_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, SourceBufferList.prototype, "SourceBufferList", "onremovesourcebuffer_set", arguments)}});
