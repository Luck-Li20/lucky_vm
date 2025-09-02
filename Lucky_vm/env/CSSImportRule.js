// CSSImportRule 对象 
CSSImportRule = function CSSImportRule(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CSSImportRule,"CSSImportRule");
Object.setPrototypeOf(CSSImportRule.prototype, CSSRule.prototype);
framevm.toolsFunc.defineProperty(CSSImportRule.prototype, "href", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSImportRule.prototype, "CSSImportRule", "href_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CSSImportRule.prototype, "media", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSImportRule.prototype, "CSSImportRule", "media_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSImportRule.prototype, "CSSImportRule", "media_set", arguments)}});
framevm.toolsFunc.defineProperty(CSSImportRule.prototype, "styleSheet", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSImportRule.prototype, "CSSImportRule", "styleSheet_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CSSImportRule.prototype, "layerName", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSImportRule.prototype, "CSSImportRule", "layerName_get", arguments)}, set:undefined});
