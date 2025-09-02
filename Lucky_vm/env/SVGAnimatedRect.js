// SVGAnimatedRect 对象 
SVGAnimatedRect = function SVGAnimatedRect(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGAnimatedRect,"SVGAnimatedRect");
framevm.toolsFunc.defineProperty(SVGAnimatedRect.prototype, "baseVal", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGAnimatedRect.prototype, "SVGAnimatedRect", "baseVal_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGAnimatedRect.prototype, "animVal", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGAnimatedRect.prototype, "SVGAnimatedRect", "animVal_get", arguments)}, set:undefined});
