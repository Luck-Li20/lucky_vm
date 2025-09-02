// CSSUnitValue 对象 
CSSUnitValue = function CSSUnitValue(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSUnitValue': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(CSSUnitValue,"CSSUnitValue");
Object.setPrototypeOf(CSSUnitValue.prototype, CSSNumericValue.prototype);
framevm.toolsFunc.defineProperty(CSSUnitValue.prototype, "value", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSUnitValue.prototype, "CSSUnitValue", "value_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSUnitValue.prototype, "CSSUnitValue", "value_set", arguments)}});
framevm.toolsFunc.defineProperty(CSSUnitValue.prototype, "unit", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSUnitValue.prototype, "CSSUnitValue", "unit_get", arguments)}, set:undefined});
