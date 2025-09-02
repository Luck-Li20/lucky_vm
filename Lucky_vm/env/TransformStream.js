// TransformStream 对象 
TransformStream = function TransformStream(){};
framevm.toolsFunc.safeProto(TransformStream,"TransformStream");
framevm.toolsFunc.defineProperty(TransformStream.prototype, "readable", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TransformStream.prototype, "TransformStream", "readable_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TransformStream.prototype, "writable", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TransformStream.prototype, "TransformStream", "writable_get", arguments)}, set:undefined});
