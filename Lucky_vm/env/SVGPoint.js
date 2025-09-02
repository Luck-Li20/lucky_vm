// SVGPoint 对象 
SVGPoint = function SVGPoint(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGPoint,"SVGPoint");
framevm.toolsFunc.defineProperty(SVGPoint.prototype, "x", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGPoint.prototype, "SVGPoint", "x_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, SVGPoint.prototype, "SVGPoint", "x_set", arguments)}});
framevm.toolsFunc.defineProperty(SVGPoint.prototype, "y", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGPoint.prototype, "SVGPoint", "y_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, SVGPoint.prototype, "SVGPoint", "y_set", arguments)}});
framevm.toolsFunc.defineProperty(SVGPoint.prototype, "matrixTransform", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, SVGPoint.prototype, "SVGPoint", "matrixTransform", arguments)}});
