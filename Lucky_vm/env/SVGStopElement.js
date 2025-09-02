// SVGStopElement 对象 
SVGStopElement = function SVGStopElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGStopElement,"SVGStopElement");
Object.setPrototypeOf(SVGStopElement.prototype, SVGElement.prototype);
framevm.toolsFunc.defineProperty(SVGStopElement.prototype, "offset", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGStopElement.prototype, "SVGStopElement", "offset_get", arguments)}, set:undefined});
