// SVGLineElement 对象 
SVGLineElement = function SVGLineElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGLineElement,"SVGLineElement");
Object.setPrototypeOf(SVGLineElement.prototype, SVGGeometryElement.prototype);
framevm.toolsFunc.defineProperty(SVGLineElement.prototype, "x1", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGLineElement.prototype, "SVGLineElement", "x1_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGLineElement.prototype, "y1", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGLineElement.prototype, "SVGLineElement", "y1_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGLineElement.prototype, "x2", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGLineElement.prototype, "SVGLineElement", "x2_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGLineElement.prototype, "y2", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGLineElement.prototype, "SVGLineElement", "y2_get", arguments)}, set:undefined});
