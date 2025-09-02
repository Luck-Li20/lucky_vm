// CSSMathMax 对象 
CSSMathMax = function CSSMathMax(){return framevm.toolsFunc.throwError("SyntaxError", "Failed to construct 'CSSMathMax': Arguments can't be empty");};
framevm.toolsFunc.safeProto(CSSMathMax,"CSSMathMax");
Object.setPrototypeOf(CSSMathMax.prototype, CSSMathValue.prototype);
framevm.toolsFunc.defineProperty(CSSMathMax.prototype, "values", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSMathMax.prototype, "CSSMathMax", "values_get", arguments)}, set:undefined});
