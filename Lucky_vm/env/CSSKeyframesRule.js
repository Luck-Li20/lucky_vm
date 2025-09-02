// CSSKeyframesRule 对象 
CSSKeyframesRule = function CSSKeyframesRule(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CSSKeyframesRule,"CSSKeyframesRule");
Object.setPrototypeOf(CSSKeyframesRule.prototype, CSSRule.prototype);
framevm.toolsFunc.defineProperty(CSSKeyframesRule.prototype, "name", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSKeyframesRule.prototype, "CSSKeyframesRule", "name_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSKeyframesRule.prototype, "CSSKeyframesRule", "name_set", arguments)}});
framevm.toolsFunc.defineProperty(CSSKeyframesRule.prototype, "cssRules", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSKeyframesRule.prototype, "CSSKeyframesRule", "cssRules_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CSSKeyframesRule.prototype, "appendRule", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, CSSKeyframesRule.prototype, "CSSKeyframesRule", "appendRule", arguments)}});
framevm.toolsFunc.defineProperty(CSSKeyframesRule.prototype, "deleteRule", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, CSSKeyframesRule.prototype, "CSSKeyframesRule", "deleteRule", arguments)}});
framevm.toolsFunc.defineProperty(CSSKeyframesRule.prototype, "findRule", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, CSSKeyframesRule.prototype, "CSSKeyframesRule", "findRule", arguments)}});
