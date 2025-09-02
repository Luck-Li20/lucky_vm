// SVGPolylineElement 对象 
SVGPolylineElement = function SVGPolylineElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGPolylineElement,"SVGPolylineElement");
Object.setPrototypeOf(SVGPolylineElement.prototype, SVGGeometryElement.prototype);
framevm.toolsFunc.defineProperty(SVGPolylineElement.prototype, "points", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGPolylineElement.prototype, "SVGPolylineElement", "points_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGPolylineElement.prototype, "animatedPoints", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGPolylineElement.prototype, "SVGPolylineElement", "animatedPoints_get", arguments)}, set:undefined});
