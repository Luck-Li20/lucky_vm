// XMLSerializer 对象 
XMLSerializer = function XMLSerializer(){};
framevm.toolsFunc.safeProto(XMLSerializer,"XMLSerializer");
framevm.toolsFunc.defineProperty(XMLSerializer.prototype, "serializeToString", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, XMLSerializer.prototype, "XMLSerializer", "serializeToString", arguments)}});
