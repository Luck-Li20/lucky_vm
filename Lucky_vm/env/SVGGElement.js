// SVGGElement 对象 
SVGGElement = function SVGGElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGGElement,"SVGGElement");
Object.setPrototypeOf(SVGGElement.prototype, SVGGraphicsElement.prototype);
