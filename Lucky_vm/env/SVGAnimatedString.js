// SVGAnimatedString 对象 
SVGAnimatedString = function SVGAnimatedString(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGAnimatedString,"SVGAnimatedString");
framevm.toolsFunc.defineProperty(SVGAnimatedString.prototype, "baseVal", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGAnimatedString.prototype, "SVGAnimatedString", "baseVal_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, SVGAnimatedString.prototype, "SVGAnimatedString", "baseVal_set", arguments)}});
framevm.toolsFunc.defineProperty(SVGAnimatedString.prototype, "animVal", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGAnimatedString.prototype, "SVGAnimatedString", "animVal_get", arguments)}, set:undefined});
