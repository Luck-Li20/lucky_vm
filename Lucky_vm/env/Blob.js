// Blob 对象 
Blob = function Blob(){
    // debugger;
    let res ={
        "text_name":arguments[0],
        "type":arguments[1]
    }
    Object.defineProperty(this,"_framevm",{
        configurable:true,
        enumerable:false,
        writable:true,
        value:res
    });
};
framevm.toolsFunc.safeProto(Blob,"Blob");
framevm.toolsFunc.defineProperty(Blob.prototype, "size", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Blob.prototype, "Blob", "size_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Blob.prototype, "type", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Blob.prototype, "Blob", "type_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Blob.prototype, "arrayBuffer", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Blob.prototype, "Blob", "arrayBuffer", arguments)}});
framevm.toolsFunc.defineProperty(Blob.prototype, "slice", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Blob.prototype, "Blob", "slice", arguments)}});
framevm.toolsFunc.defineProperty(Blob.prototype, "stream", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Blob.prototype, "Blob", "stream", arguments)}});
framevm.toolsFunc.defineProperty(Blob.prototype, "text", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Blob.prototype, "Blob", "text", arguments)}});
