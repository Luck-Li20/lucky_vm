// SVGNumber 对象 
SVGNumber = function SVGNumber(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGNumber,"SVGNumber");
framevm.toolsFunc.defineProperty(SVGNumber.prototype, "value", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGNumber.prototype, "SVGNumber", "value_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, SVGNumber.prototype, "SVGNumber", "value_set", arguments)}});
