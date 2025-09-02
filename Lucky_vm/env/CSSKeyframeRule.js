// CSSKeyframeRule 对象 
CSSKeyframeRule = function CSSKeyframeRule(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CSSKeyframeRule,"CSSKeyframeRule");
Object.setPrototypeOf(CSSKeyframeRule.prototype, CSSRule.prototype);
framevm.toolsFunc.defineProperty(CSSKeyframeRule.prototype, "keyText", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSKeyframeRule.prototype, "CSSKeyframeRule", "keyText_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSKeyframeRule.prototype, "CSSKeyframeRule", "keyText_set", arguments)}});
framevm.toolsFunc.defineProperty(CSSKeyframeRule.prototype, "style", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSKeyframeRule.prototype, "CSSKeyframeRule", "style_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSKeyframeRule.prototype, "CSSKeyframeRule", "style_set", arguments)}});
