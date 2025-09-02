// SVGAElement 对象 
SVGAElement = function SVGAElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGAElement,"SVGAElement");
Object.setPrototypeOf(SVGAElement.prototype, SVGGraphicsElement.prototype);
framevm.toolsFunc.defineProperty(SVGAElement.prototype, "target", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGAElement.prototype, "SVGAElement", "target_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGAElement.prototype, "href", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGAElement.prototype, "SVGAElement", "href_get", arguments)}, set:undefined});
