// CSSTransition 对象 
CSSTransition = function CSSTransition(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CSSTransition,"CSSTransition");
Object.setPrototypeOf(CSSTransition.prototype, Animation.prototype);
framevm.toolsFunc.defineProperty(CSSTransition.prototype, "transitionProperty", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSTransition.prototype, "CSSTransition", "transitionProperty_get", arguments)}, set:undefined});
