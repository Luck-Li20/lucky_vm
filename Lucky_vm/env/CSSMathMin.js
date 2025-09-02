// CSSMathMin 对象 
CSSMathMin = function CSSMathMin(){return framevm.toolsFunc.throwError("SyntaxError", "Failed to construct 'CSSMathMin': Arguments can't be empty");};
framevm.toolsFunc.safeProto(CSSMathMin,"CSSMathMin");
Object.setPrototypeOf(CSSMathMin.prototype, CSSMathValue.prototype);
framevm.toolsFunc.defineProperty(CSSMathMin.prototype, "values", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSMathMin.prototype, "CSSMathMin", "values_get", arguments)}, set:undefined});
