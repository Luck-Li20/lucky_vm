// CSSPageRule 对象 
CSSPageRule = function CSSPageRule(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CSSPageRule,"CSSPageRule");
Object.setPrototypeOf(CSSPageRule.prototype, CSSRule.prototype);
framevm.toolsFunc.defineProperty(CSSPageRule.prototype, "selectorText", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSPageRule.prototype, "CSSPageRule", "selectorText_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSPageRule.prototype, "CSSPageRule", "selectorText_set", arguments)}});
framevm.toolsFunc.defineProperty(CSSPageRule.prototype, "style", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSPageRule.prototype, "CSSPageRule", "style_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSPageRule.prototype, "CSSPageRule", "style_set", arguments)}});
