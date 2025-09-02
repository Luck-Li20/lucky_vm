// CSSStyleSheet 对象 
CSSStyleSheet = function CSSStyleSheet(){};
framevm.toolsFunc.safeProto(CSSStyleSheet,"CSSStyleSheet");
Object.setPrototypeOf(CSSStyleSheet.prototype, StyleSheet.prototype);
framevm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "ownerRule", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheet", "ownerRule_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "cssRules", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheet", "cssRules_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "rules", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheet", "rules_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "addRule", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheet", "addRule", arguments)}});
framevm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "deleteRule", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheet", "deleteRule", arguments)}});
framevm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "insertRule", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheet", "insertRule", arguments)}});
framevm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "removeRule", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheet", "removeRule", arguments)}});
framevm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "replace", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheet", "replace", arguments)}});
framevm.toolsFunc.defineProperty(CSSStyleSheet.prototype, "replaceSync", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, CSSStyleSheet.prototype, "CSSStyleSheet", "replaceSync", arguments)}});
