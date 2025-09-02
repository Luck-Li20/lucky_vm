// SVGUseElement 对象 
SVGUseElement = function SVGUseElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGUseElement,"SVGUseElement");
Object.setPrototypeOf(SVGUseElement.prototype, SVGGraphicsElement.prototype);
framevm.toolsFunc.defineProperty(SVGUseElement.prototype, "x", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGUseElement.prototype, "SVGUseElement", "x_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGUseElement.prototype, "y", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGUseElement.prototype, "SVGUseElement", "y_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGUseElement.prototype, "width", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGUseElement.prototype, "SVGUseElement", "width_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGUseElement.prototype, "height", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGUseElement.prototype, "SVGUseElement", "height_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGUseElement.prototype, "href", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGUseElement.prototype, "SVGUseElement", "href_get", arguments)}, set:undefined});
