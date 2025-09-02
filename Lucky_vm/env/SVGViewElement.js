// SVGViewElement 对象 
SVGViewElement = function SVGViewElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGViewElement,"SVGViewElement");
Object.setPrototypeOf(SVGViewElement.prototype, SVGElement.prototype);
framevm.toolsFunc.defineProperty(SVGViewElement, "SVG_ZOOMANDPAN_UNKNOWN", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(SVGViewElement, "SVG_ZOOMANDPAN_DISABLE", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(SVGViewElement, "SVG_ZOOMANDPAN_MAGNIFY", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(SVGViewElement.prototype, "viewBox", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGViewElement.prototype, "SVGViewElement", "viewBox_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGViewElement.prototype, "preserveAspectRatio", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGViewElement.prototype, "SVGViewElement", "preserveAspectRatio_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGViewElement.prototype, "zoomAndPan", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGViewElement.prototype, "SVGViewElement", "zoomAndPan_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, SVGViewElement.prototype, "SVGViewElement", "zoomAndPan_set", arguments)}});
framevm.toolsFunc.defineProperty(SVGViewElement.prototype, "SVG_ZOOMANDPAN_UNKNOWN", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(SVGViewElement.prototype, "SVG_ZOOMANDPAN_DISABLE", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(SVGViewElement.prototype, "SVG_ZOOMANDPAN_MAGNIFY", {configurable:false, enumerable:true, writable:false, value:2});
