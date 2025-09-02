// CSSMediaRule 对象 
CSSMediaRule = function CSSMediaRule(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CSSMediaRule,"CSSMediaRule");
Object.setPrototypeOf(CSSMediaRule.prototype, CSSConditionRule.prototype);
framevm.toolsFunc.defineProperty(CSSMediaRule.prototype, "media", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSMediaRule.prototype, "CSSMediaRule", "media_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSMediaRule.prototype, "CSSMediaRule", "media_set", arguments)}});
