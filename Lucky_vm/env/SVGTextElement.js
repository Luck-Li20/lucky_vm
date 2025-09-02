// SVGTextElement 对象 
SVGTextElement = function SVGTextElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGTextElement,"SVGTextElement");
Object.setPrototypeOf(SVGTextElement.prototype, SVGTextPositioningElement.prototype);
framevm.toolsFunc.defineProperty(SVGTextElement, "LENGTHADJUST_SPACINGANDGLYPHS", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(SVGTextElement, "LENGTHADJUST_SPACING", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(SVGTextElement, "LENGTHADJUST_UNKNOWN", {configurable:false, enumerable:true, writable:false, value:0});
