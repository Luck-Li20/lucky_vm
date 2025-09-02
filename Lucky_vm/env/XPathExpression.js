// XPathExpression 对象
XPathExpression = function XPathExpression(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(XPathExpression,"XPathExpression");
framevm.toolsFunc.defineProperty(XPathExpression.prototype, "evaluate", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, XPathExpression.prototype, "XPathExpression", "evaluate", arguments)}});
