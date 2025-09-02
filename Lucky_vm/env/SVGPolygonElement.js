// SVGPolygonElement 对象 
SVGPolygonElement = function SVGPolygonElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGPolygonElement,"SVGPolygonElement");
Object.setPrototypeOf(SVGPolygonElement.prototype, SVGGeometryElement.prototype);
framevm.toolsFunc.defineProperty(SVGPolygonElement.prototype, "points", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGPolygonElement.prototype, "SVGPolygonElement", "points_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGPolygonElement.prototype, "animatedPoints", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGPolygonElement.prototype, "SVGPolygonElement", "animatedPoints_get", arguments)}, set:undefined});
