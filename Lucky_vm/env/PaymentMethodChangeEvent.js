// PaymentMethodChangeEvent 对象 
PaymentMethodChangeEvent = function PaymentMethodChangeEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'PaymentMethodChangeEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(PaymentMethodChangeEvent,"PaymentMethodChangeEvent");
Object.setPrototypeOf(PaymentMethodChangeEvent.prototype, PaymentRequestUpdateEvent.prototype);
framevm.toolsFunc.defineProperty(PaymentMethodChangeEvent.prototype, "methodName", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PaymentMethodChangeEvent.prototype, "PaymentMethodChangeEvent", "methodName_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(PaymentMethodChangeEvent.prototype, "methodDetails", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PaymentMethodChangeEvent.prototype, "PaymentMethodChangeEvent", "methodDetails_get", arguments)}, set:undefined});
