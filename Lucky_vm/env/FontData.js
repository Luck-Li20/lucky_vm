// FontData 对象 
FontData = function FontData(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(FontData,"FontData");
framevm.toolsFunc.defineProperty(FontData.prototype, "postscriptName", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, FontData.prototype, "FontData", "postscriptName_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(FontData.prototype, "fullName", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, FontData.prototype, "FontData", "fullName_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(FontData.prototype, "family", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, FontData.prototype, "FontData", "family_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(FontData.prototype, "style", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, FontData.prototype, "FontData", "style_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(FontData.prototype, "blob", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, FontData.prototype, "FontData", "blob", arguments)}});
