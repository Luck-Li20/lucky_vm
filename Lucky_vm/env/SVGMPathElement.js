// SVGMPathElement 对象 
SVGMPathElement = function SVGMPathElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGMPathElement,"SVGMPathElement");
Object.setPrototypeOf(SVGMPathElement.prototype, SVGElement.prototype);
framevm.toolsFunc.defineProperty(SVGMPathElement.prototype, "href", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGMPathElement.prototype, "SVGMPathElement", "href_get", arguments)}, set:undefined});
