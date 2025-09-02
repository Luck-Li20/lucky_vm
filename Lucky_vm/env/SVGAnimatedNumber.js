// SVGAnimatedNumber 对象 
SVGAnimatedNumber = function SVGAnimatedNumber(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGAnimatedNumber,"SVGAnimatedNumber");
framevm.toolsFunc.defineProperty(SVGAnimatedNumber.prototype, "baseVal", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGAnimatedNumber.prototype, "SVGAnimatedNumber", "baseVal_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, SVGAnimatedNumber.prototype, "SVGAnimatedNumber", "baseVal_set", arguments)}});
framevm.toolsFunc.defineProperty(SVGAnimatedNumber.prototype, "animVal", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGAnimatedNumber.prototype, "SVGAnimatedNumber", "animVal_get", arguments)}, set:undefined});
