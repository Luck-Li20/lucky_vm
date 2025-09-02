// CSSScale 对象 
CSSScale = function CSSScale(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSScale': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(CSSScale,"CSSScale");
Object.setPrototypeOf(CSSScale.prototype, CSSTransformComponent.prototype);
framevm.toolsFunc.defineProperty(CSSScale.prototype, "x", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSScale.prototype, "CSSScale", "x_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSScale.prototype, "CSSScale", "x_set", arguments)}});
framevm.toolsFunc.defineProperty(CSSScale.prototype, "y", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSScale.prototype, "CSSScale", "y_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSScale.prototype, "CSSScale", "y_set", arguments)}});
framevm.toolsFunc.defineProperty(CSSScale.prototype, "z", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSScale.prototype, "CSSScale", "z_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSScale.prototype, "CSSScale", "z_set", arguments)}});
