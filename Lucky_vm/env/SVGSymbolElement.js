// SVGSymbolElement 对象 
SVGSymbolElement = function SVGSymbolElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGSymbolElement,"SVGSymbolElement");
Object.setPrototypeOf(SVGSymbolElement.prototype, SVGElement.prototype);
framevm.toolsFunc.defineProperty(SVGSymbolElement.prototype, "viewBox", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGSymbolElement.prototype, "SVGSymbolElement", "viewBox_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGSymbolElement.prototype, "preserveAspectRatio", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGSymbolElement.prototype, "SVGSymbolElement", "preserveAspectRatio_get", arguments)}, set:undefined});
