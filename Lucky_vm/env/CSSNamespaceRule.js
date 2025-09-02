// CSSNamespaceRule 对象 
CSSNamespaceRule = function CSSNamespaceRule(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CSSNamespaceRule,"CSSNamespaceRule");
Object.setPrototypeOf(CSSNamespaceRule.prototype, CSSRule.prototype);
framevm.toolsFunc.defineProperty(CSSNamespaceRule.prototype, "namespaceURI", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSNamespaceRule.prototype, "CSSNamespaceRule", "namespaceURI_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CSSNamespaceRule.prototype, "prefix", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSNamespaceRule.prototype, "CSSNamespaceRule", "prefix_get", arguments)}, set:undefined});
