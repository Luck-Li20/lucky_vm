// CSSPropertyRule 对象 
CSSPropertyRule = function CSSPropertyRule(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CSSPropertyRule,"CSSPropertyRule");
Object.setPrototypeOf(CSSPropertyRule.prototype, CSSRule.prototype);
framevm.toolsFunc.defineProperty(CSSPropertyRule.prototype, "name", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSPropertyRule.prototype, "CSSPropertyRule", "name_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CSSPropertyRule.prototype, "syntax", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSPropertyRule.prototype, "CSSPropertyRule", "syntax_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CSSPropertyRule.prototype, "inherits", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSPropertyRule.prototype, "CSSPropertyRule", "inherits_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CSSPropertyRule.prototype, "initialValue", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSPropertyRule.prototype, "CSSPropertyRule", "initialValue_get", arguments)}, set:undefined});
