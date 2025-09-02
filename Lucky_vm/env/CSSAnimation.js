// CSSAnimation 对象 
CSSAnimation = function CSSAnimation(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CSSAnimation,"CSSAnimation");
Object.setPrototypeOf(CSSAnimation.prototype, Animation.prototype);
framevm.toolsFunc.defineProperty(CSSAnimation.prototype, "animationName", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSAnimation.prototype, "CSSAnimation", "animationName_get", arguments)}, set:undefined});
