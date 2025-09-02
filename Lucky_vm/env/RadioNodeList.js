// RadioNodeList 对象 
RadioNodeList = function RadioNodeList(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(RadioNodeList,"RadioNodeList");
Object.setPrototypeOf(RadioNodeList.prototype, NodeList.prototype);
framevm.toolsFunc.defineProperty(RadioNodeList.prototype, "value", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, RadioNodeList.prototype, "RadioNodeList", "value_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, RadioNodeList.prototype, "RadioNodeList", "value_set", arguments)}});
