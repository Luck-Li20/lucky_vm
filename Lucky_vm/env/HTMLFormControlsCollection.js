// HTMLFormControlsCollection 对象 
HTMLFormControlsCollection = function HTMLFormControlsCollection(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLFormControlsCollection,"HTMLFormControlsCollection");
Object.setPrototypeOf(HTMLFormControlsCollection.prototype, HTMLCollection.prototype);
framevm.toolsFunc.defineProperty(HTMLFormControlsCollection.prototype, "namedItem", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, HTMLFormControlsCollection.prototype, "HTMLFormControlsCollection", "namedItem", arguments)}});
