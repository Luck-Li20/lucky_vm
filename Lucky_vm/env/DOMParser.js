// DOMParser 对象 
DOMParser = function DOMParser(){};
framevm.toolsFunc.safeProto(DOMParser,"DOMParser");
framevm.toolsFunc.defineProperty(DOMParser.prototype, "parseFromString", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, DOMParser.prototype, "DOMParser", "parseFromString", arguments)}});
