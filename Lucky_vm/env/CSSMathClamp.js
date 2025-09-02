// CSSMathClamp 对象 
CSSMathClamp = function CSSMathClamp(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSMathClamp': 3 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(CSSMathClamp,"CSSMathClamp");
Object.setPrototypeOf(CSSMathClamp.prototype, CSSMathValue.prototype);
framevm.toolsFunc.defineProperty(CSSMathClamp.prototype, "lower", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSMathClamp.prototype, "CSSMathClamp", "lower_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CSSMathClamp.prototype, "value", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSMathClamp.prototype, "CSSMathClamp", "value_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CSSMathClamp.prototype, "upper", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSMathClamp.prototype, "CSSMathClamp", "upper_get", arguments)}, set:undefined});
