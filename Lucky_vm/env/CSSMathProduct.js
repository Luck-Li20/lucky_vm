// CSSMathProduct 对象 
CSSMathProduct = function CSSMathProduct(){return framevm.toolsFunc.throwError("SyntaxError", "Failed to construct 'CSSMathProduct': Arguments can't be empty");};
framevm.toolsFunc.safeProto(CSSMathProduct,"CSSMathProduct");
Object.setPrototypeOf(CSSMathProduct.prototype, CSSMathValue.prototype);
framevm.toolsFunc.defineProperty(CSSMathProduct.prototype, "values", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSMathProduct.prototype, "CSSMathProduct", "values_get", arguments)}, set:undefined});
