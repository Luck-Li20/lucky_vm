// CSSPerspective 对象 
CSSPerspective = function CSSPerspective(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSPerspective': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(CSSPerspective,"CSSPerspective");
Object.setPrototypeOf(CSSPerspective.prototype, CSSTransformComponent.prototype);
framevm.toolsFunc.defineProperty(CSSPerspective.prototype, "length", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSPerspective.prototype, "CSSPerspective", "length_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSPerspective.prototype, "CSSPerspective", "length_set", arguments)}});
