// SVGCircleElement 对象 
SVGCircleElement = function SVGCircleElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGCircleElement,"SVGCircleElement");
Object.setPrototypeOf(SVGCircleElement.prototype, SVGGeometryElement.prototype);
framevm.toolsFunc.defineProperty(SVGCircleElement.prototype, "cx", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGCircleElement.prototype, "SVGCircleElement", "cx_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGCircleElement.prototype, "cy", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGCircleElement.prototype, "SVGCircleElement", "cy_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGCircleElement.prototype, "r", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGCircleElement.prototype, "SVGCircleElement", "r_get", arguments)}, set:undefined});
