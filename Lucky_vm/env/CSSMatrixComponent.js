// CSSMatrixComponent 对象 
CSSMatrixComponent = function CSSMatrixComponent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSMatrixComponent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(CSSMatrixComponent,"CSSMatrixComponent");
Object.setPrototypeOf(CSSMatrixComponent.prototype, CSSTransformComponent.prototype);
framevm.toolsFunc.defineProperty(CSSMatrixComponent.prototype, "matrix", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSMatrixComponent.prototype, "CSSMatrixComponent", "matrix_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSMatrixComponent.prototype, "CSSMatrixComponent", "matrix_set", arguments)}});
