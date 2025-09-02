// SVGClipPathElement 对象 
SVGClipPathElement = function SVGClipPathElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGClipPathElement,"SVGClipPathElement");
Object.setPrototypeOf(SVGClipPathElement.prototype, SVGGraphicsElement.prototype);
framevm.toolsFunc.defineProperty(SVGClipPathElement.prototype, "clipPathUnits", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGClipPathElement.prototype, "SVGClipPathElement", "clipPathUnits_get", arguments)}, set:undefined});
