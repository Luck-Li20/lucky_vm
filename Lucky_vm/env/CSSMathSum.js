// CSSMathSum 对象 
CSSMathSum = function CSSMathSum(){return framevm.toolsFunc.throwError("SyntaxError", "Failed to construct 'CSSMathSum': Arguments can't be empty");};
framevm.toolsFunc.safeProto(CSSMathSum,"CSSMathSum");
Object.setPrototypeOf(CSSMathSum.prototype, CSSMathValue.prototype);
framevm.toolsFunc.defineProperty(CSSMathSum.prototype, "values", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSMathSum.prototype, "CSSMathSum", "values_get", arguments)}, set:undefined});
