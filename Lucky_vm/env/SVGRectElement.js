// SVGRectElement 对象 
SVGRectElement = function SVGRectElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGRectElement,"SVGRectElement");
Object.setPrototypeOf(SVGRectElement.prototype, SVGGeometryElement.prototype);
framevm.toolsFunc.defineProperty(SVGRectElement.prototype, "x", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGRectElement.prototype, "SVGRectElement", "x_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGRectElement.prototype, "y", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGRectElement.prototype, "SVGRectElement", "y_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGRectElement.prototype, "width", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGRectElement.prototype, "SVGRectElement", "width_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGRectElement.prototype, "height", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGRectElement.prototype, "SVGRectElement", "height_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGRectElement.prototype, "rx", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGRectElement.prototype, "SVGRectElement", "rx_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGRectElement.prototype, "ry", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGRectElement.prototype, "SVGRectElement", "ry_get", arguments)}, set:undefined});
