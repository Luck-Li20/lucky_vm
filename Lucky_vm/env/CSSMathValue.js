// CSSMathValue 对象 
CSSMathValue = function CSSMathValue(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CSSMathValue,"CSSMathValue");
Object.setPrototypeOf(CSSMathValue.prototype, CSSNumericValue.prototype);
framevm.toolsFunc.defineProperty(CSSMathValue.prototype, "operator", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSMathValue.prototype, "CSSMathValue", "operator_get", arguments)}, set:undefined});
