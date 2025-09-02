// CSSKeywordValue 对象 
CSSKeywordValue = function CSSKeywordValue(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSKeywordValue': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(CSSKeywordValue,"CSSKeywordValue");
Object.setPrototypeOf(CSSKeywordValue.prototype, CSSStyleValue.prototype);
framevm.toolsFunc.defineProperty(CSSKeywordValue.prototype, "value", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSKeywordValue.prototype, "CSSKeywordValue", "value_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSKeywordValue.prototype, "CSSKeywordValue", "value_set", arguments)}});
