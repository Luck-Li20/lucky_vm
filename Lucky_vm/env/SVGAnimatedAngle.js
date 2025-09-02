// SVGAnimatedAngle 对象 
SVGAnimatedAngle = function SVGAnimatedAngle(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGAnimatedAngle,"SVGAnimatedAngle");
framevm.toolsFunc.defineProperty(SVGAnimatedAngle.prototype, "baseVal", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGAnimatedAngle.prototype, "SVGAnimatedAngle", "baseVal_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGAnimatedAngle.prototype, "animVal", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGAnimatedAngle.prototype, "SVGAnimatedAngle", "animVal_get", arguments)}, set:undefined});
