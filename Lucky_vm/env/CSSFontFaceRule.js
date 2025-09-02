// CSSFontFaceRule 对象 
CSSFontFaceRule = function CSSFontFaceRule(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CSSFontFaceRule,"CSSFontFaceRule");
Object.setPrototypeOf(CSSFontFaceRule.prototype, CSSRule.prototype);
framevm.toolsFunc.defineProperty(CSSFontFaceRule.prototype, "style", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSFontFaceRule.prototype, "CSSFontFaceRule", "style_get", arguments)}, set:undefined});
