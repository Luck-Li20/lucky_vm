// CSSStyleRule 对象 
CSSStyleRule = function CSSStyleRule(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CSSStyleRule,"CSSStyleRule");
Object.setPrototypeOf(CSSStyleRule.prototype, CSSRule.prototype);
framevm.toolsFunc.defineProperty(CSSStyleRule.prototype, "selectorText", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSStyleRule.prototype, "CSSStyleRule", "selectorText_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSStyleRule.prototype, "CSSStyleRule", "selectorText_set", arguments)}});
framevm.toolsFunc.defineProperty(CSSStyleRule.prototype, "style", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSStyleRule.prototype, "CSSStyleRule", "style_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSStyleRule.prototype, "CSSStyleRule", "style_set", arguments)}});
framevm.toolsFunc.defineProperty(CSSStyleRule.prototype, "styleMap", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSStyleRule.prototype, "CSSStyleRule", "styleMap_get", arguments)}, set:undefined});
