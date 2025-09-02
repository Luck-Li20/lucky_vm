// HTMLLegendElement 对象
HTMLLegendElement = function HTMLLegendElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLLegendElement,"HTMLLegendElement");
Object.setPrototypeOf(HTMLLegendElement.prototype, HTMLElement.prototype);
framevm.toolsFunc.defineProperty(HTMLLegendElement.prototype, "form", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLLegendElement.prototype, "HTMLLegendElement", "form_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(HTMLLegendElement.prototype, "align", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLLegendElement.prototype, "HTMLLegendElement", "align_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, HTMLLegendElement.prototype, "HTMLLegendElement", "align_set", arguments)}});
