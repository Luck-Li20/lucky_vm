// CSSConditionRule 对象 
CSSConditionRule = function CSSConditionRule(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CSSConditionRule,"CSSConditionRule");
Object.setPrototypeOf(CSSConditionRule.prototype, CSSGroupingRule.prototype);
framevm.toolsFunc.defineProperty(CSSConditionRule.prototype, "conditionText", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSConditionRule.prototype, "CSSConditionRule", "conditionText_get", arguments)}, set:undefined});
