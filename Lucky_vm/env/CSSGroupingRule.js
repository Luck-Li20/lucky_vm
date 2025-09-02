// CSSGroupingRule 对象 
CSSGroupingRule = function CSSGroupingRule(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CSSGroupingRule,"CSSGroupingRule");
Object.setPrototypeOf(CSSGroupingRule.prototype, CSSRule.prototype);
framevm.toolsFunc.defineProperty(CSSGroupingRule.prototype, "cssRules", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSGroupingRule.prototype, "CSSGroupingRule", "cssRules_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CSSGroupingRule.prototype, "deleteRule", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, CSSGroupingRule.prototype, "CSSGroupingRule", "deleteRule", arguments)}});
framevm.toolsFunc.defineProperty(CSSGroupingRule.prototype, "insertRule", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, CSSGroupingRule.prototype, "CSSGroupingRule", "insertRule", arguments)}});
