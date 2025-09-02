// CSSMathNegate 对象 
CSSMathNegate = function CSSMathNegate(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSMathNegate': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(CSSMathNegate,"CSSMathNegate");
Object.setPrototypeOf(CSSMathNegate.prototype, CSSMathValue.prototype);
framevm.toolsFunc.defineProperty(CSSMathNegate.prototype, "value", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSMathNegate.prototype, "CSSMathNegate", "value_get", arguments)}, set:undefined});
