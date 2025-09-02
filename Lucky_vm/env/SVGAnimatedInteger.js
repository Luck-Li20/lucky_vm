// SVGAnimatedInteger 对象 
SVGAnimatedInteger = function SVGAnimatedInteger(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGAnimatedInteger,"SVGAnimatedInteger");
framevm.toolsFunc.defineProperty(SVGAnimatedInteger.prototype, "baseVal", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGAnimatedInteger.prototype, "SVGAnimatedInteger", "baseVal_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, SVGAnimatedInteger.prototype, "SVGAnimatedInteger", "baseVal_set", arguments)}});
framevm.toolsFunc.defineProperty(SVGAnimatedInteger.prototype, "animVal", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGAnimatedInteger.prototype, "SVGAnimatedInteger", "animVal_get", arguments)}, set:undefined});
