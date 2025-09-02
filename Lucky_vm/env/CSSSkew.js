// CSSSkew 对象 
CSSSkew = function CSSSkew(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSSkew': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(CSSSkew,"CSSSkew");
Object.setPrototypeOf(CSSSkew.prototype, CSSTransformComponent.prototype);
framevm.toolsFunc.defineProperty(CSSSkew.prototype, "ax", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSSkew.prototype, "CSSSkew", "ax_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSSkew.prototype, "CSSSkew", "ax_set", arguments)}});
framevm.toolsFunc.defineProperty(CSSSkew.prototype, "ay", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSSkew.prototype, "CSSSkew", "ay_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSSkew.prototype, "CSSSkew", "ay_set", arguments)}});
