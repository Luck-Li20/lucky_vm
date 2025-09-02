// CSSPositionValue 对象 
CSSPositionValue = function CSSPositionValue(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSPositionValue': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(CSSPositionValue,"CSSPositionValue");
Object.setPrototypeOf(CSSPositionValue.prototype, CSSStyleValue.prototype);
framevm.toolsFunc.defineProperty(CSSPositionValue.prototype, "x", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSPositionValue.prototype, "CSSPositionValue", "x_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSPositionValue.prototype, "CSSPositionValue", "x_set", arguments)}});
framevm.toolsFunc.defineProperty(CSSPositionValue.prototype, "y", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSPositionValue.prototype, "CSSPositionValue", "y_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSPositionValue.prototype, "CSSPositionValue", "y_set", arguments)}});
