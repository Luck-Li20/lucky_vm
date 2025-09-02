// HTMLTemplateElement 对象 
HTMLTemplateElement = function HTMLTemplateElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLTemplateElement,"HTMLTemplateElement");
Object.setPrototypeOf(HTMLTemplateElement.prototype, HTMLElement.prototype);
framevm.toolsFunc.defineProperty(HTMLTemplateElement.prototype, "content", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLTemplateElement.prototype, "HTMLTemplateElement", "content_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(HTMLTemplateElement.prototype, "shadowRoot", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLTemplateElement.prototype, "HTMLTemplateElement", "shadowRoot_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(HTMLTemplateElement.prototype, "shadowRootMode", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLTemplateElement.prototype, "HTMLTemplateElement", "shadowRootMode_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, HTMLTemplateElement.prototype, "HTMLTemplateElement", "shadowRootMode_set", arguments)}});
