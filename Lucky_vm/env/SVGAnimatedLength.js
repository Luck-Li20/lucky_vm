// SVGAnimatedLength 对象 
SVGAnimatedLength = function SVGAnimatedLength(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGAnimatedLength,"SVGAnimatedLength");
framevm.toolsFunc.defineProperty(SVGAnimatedLength.prototype, "baseVal", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGAnimatedLength.prototype, "SVGAnimatedLength", "baseVal_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGAnimatedLength.prototype, "animVal", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGAnimatedLength.prototype, "SVGAnimatedLength", "animVal_get", arguments)}, set:undefined});
