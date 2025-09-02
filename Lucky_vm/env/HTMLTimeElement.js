// HTMLTimeElement 对象 
HTMLTimeElement = function HTMLTimeElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLTimeElement,"HTMLTimeElement");
Object.setPrototypeOf(HTMLTimeElement.prototype, HTMLElement.prototype);
framevm.toolsFunc.defineProperty(HTMLTimeElement.prototype, "dateTime", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLTimeElement.prototype, "HTMLTimeElement", "dateTime_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, HTMLTimeElement.prototype, "HTMLTimeElement", "dateTime_set", arguments)}});
