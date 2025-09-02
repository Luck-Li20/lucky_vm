// SVGScriptElement 对象 
SVGScriptElement = function SVGScriptElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGScriptElement,"SVGScriptElement");
Object.setPrototypeOf(SVGScriptElement.prototype, SVGElement.prototype);
framevm.toolsFunc.defineProperty(SVGScriptElement.prototype, "type", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGScriptElement.prototype, "SVGScriptElement", "type_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, SVGScriptElement.prototype, "SVGScriptElement", "type_set", arguments)}});
framevm.toolsFunc.defineProperty(SVGScriptElement.prototype, "href", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGScriptElement.prototype, "SVGScriptElement", "href_get", arguments)}, set:undefined});
