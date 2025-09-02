// CSSContainerRule 对象 
CSSContainerRule = function CSSContainerRule(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CSSContainerRule,"CSSContainerRule");
Object.setPrototypeOf(CSSContainerRule.prototype, CSSConditionRule.prototype);
framevm.toolsFunc.defineProperty(CSSContainerRule.prototype, "containerName", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSContainerRule.prototype, "CSSContainerRule", "containerName_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CSSContainerRule.prototype, "containerQuery", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSContainerRule.prototype, "CSSContainerRule", "containerQuery_get", arguments)}, set:undefined});
