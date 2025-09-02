// SVGGeometryElement 对象 
SVGGeometryElement = function SVGGeometryElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGGeometryElement,"SVGGeometryElement");
Object.setPrototypeOf(SVGGeometryElement.prototype, SVGGraphicsElement.prototype);
framevm.toolsFunc.defineProperty(SVGGeometryElement.prototype, "pathLength", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGGeometryElement.prototype, "SVGGeometryElement", "pathLength_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGGeometryElement.prototype, "getPointAtLength", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, SVGGeometryElement.prototype, "SVGGeometryElement", "getPointAtLength", arguments)}});
framevm.toolsFunc.defineProperty(SVGGeometryElement.prototype, "getTotalLength", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, SVGGeometryElement.prototype, "SVGGeometryElement", "getTotalLength", arguments)}});
framevm.toolsFunc.defineProperty(SVGGeometryElement.prototype, "isPointInFill", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, SVGGeometryElement.prototype, "SVGGeometryElement", "isPointInFill", arguments)}});
framevm.toolsFunc.defineProperty(SVGGeometryElement.prototype, "isPointInStroke", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, SVGGeometryElement.prototype, "SVGGeometryElement", "isPointInStroke", arguments)}});
