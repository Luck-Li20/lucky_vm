// BarProp 对象 
BarProp = function BarProp(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(BarProp,"BarProp");
framevm.toolsFunc.defineProperty(BarProp.prototype, "visible", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, BarProp.prototype, "BarProp", "visible_get", arguments)}, set:undefined});
