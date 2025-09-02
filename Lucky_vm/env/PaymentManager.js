// PaymentManager 对象 
PaymentManager = function PaymentManager(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(PaymentManager,"PaymentManager");
framevm.toolsFunc.defineProperty(PaymentManager.prototype, "userHint", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PaymentManager.prototype, "PaymentManager", "userHint_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, PaymentManager.prototype, "PaymentManager", "userHint_set", arguments)}});
framevm.toolsFunc.defineProperty(PaymentManager.prototype, "enableDelegations", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, PaymentManager.prototype, "PaymentManager", "enableDelegations", arguments)}});
