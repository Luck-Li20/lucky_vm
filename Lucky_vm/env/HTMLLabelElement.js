// HTMLLabelElement 对象 
HTMLLabelElement = function HTMLLabelElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLLabelElement,"HTMLLabelElement");
Object.setPrototypeOf(HTMLLabelElement.prototype, HTMLElement.prototype);
framevm.toolsFunc.defineProperty(HTMLLabelElement.prototype, "form", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLLabelElement.prototype, "HTMLLabelElement", "form_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(HTMLLabelElement.prototype, "htmlFor", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLLabelElement.prototype, "HTMLLabelElement", "htmlFor_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, HTMLLabelElement.prototype, "HTMLLabelElement", "htmlFor_set", arguments)}});
framevm.toolsFunc.defineProperty(HTMLLabelElement.prototype, "control", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLLabelElement.prototype, "HTMLLabelElement", "control_get", arguments)}, set:undefined});
