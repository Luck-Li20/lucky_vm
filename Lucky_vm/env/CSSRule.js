// CSSRule 对象 
CSSRule = function CSSRule(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(CSSRule,"CSSRule");
framevm.toolsFunc.defineProperty(CSSRule, "STYLE_RULE", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(CSSRule, "CHARSET_RULE", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(CSSRule, "IMPORT_RULE", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(CSSRule, "MEDIA_RULE", {configurable:false, enumerable:true, writable:false, value:4});
framevm.toolsFunc.defineProperty(CSSRule, "FONT_FACE_RULE", {configurable:false, enumerable:true, writable:false, value:5});
framevm.toolsFunc.defineProperty(CSSRule, "PAGE_RULE", {configurable:false, enumerable:true, writable:false, value:6});
framevm.toolsFunc.defineProperty(CSSRule, "NAMESPACE_RULE", {configurable:false, enumerable:true, writable:false, value:10});
framevm.toolsFunc.defineProperty(CSSRule, "KEYFRAMES_RULE", {configurable:false, enumerable:true, writable:false, value:7});
framevm.toolsFunc.defineProperty(CSSRule, "KEYFRAME_RULE", {configurable:false, enumerable:true, writable:false, value:8});
framevm.toolsFunc.defineProperty(CSSRule, "COUNTER_STYLE_RULE", {configurable:false, enumerable:true, writable:false, value:11});
framevm.toolsFunc.defineProperty(CSSRule, "SUPPORTS_RULE", {configurable:false, enumerable:true, writable:false, value:12});
framevm.toolsFunc.defineProperty(CSSRule, "FONT_FEATURE_VALUES_RULE", {configurable:false, enumerable:true, writable:false, value:14});
framevm.toolsFunc.defineProperty(CSSRule.prototype, "type", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSRule.prototype, "CSSRule", "type_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CSSRule.prototype, "cssText", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSRule.prototype, "CSSRule", "cssText_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, CSSRule.prototype, "CSSRule", "cssText_set", arguments)}});
framevm.toolsFunc.defineProperty(CSSRule.prototype, "parentRule", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSRule.prototype, "CSSRule", "parentRule_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CSSRule.prototype, "parentStyleSheet", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, CSSRule.prototype, "CSSRule", "parentStyleSheet_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(CSSRule.prototype, "STYLE_RULE", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(CSSRule.prototype, "CHARSET_RULE", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(CSSRule.prototype, "IMPORT_RULE", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(CSSRule.prototype, "MEDIA_RULE", {configurable:false, enumerable:true, writable:false, value:4});
framevm.toolsFunc.defineProperty(CSSRule.prototype, "FONT_FACE_RULE", {configurable:false, enumerable:true, writable:false, value:5});
framevm.toolsFunc.defineProperty(CSSRule.prototype, "PAGE_RULE", {configurable:false, enumerable:true, writable:false, value:6});
framevm.toolsFunc.defineProperty(CSSRule.prototype, "NAMESPACE_RULE", {configurable:false, enumerable:true, writable:false, value:10});
framevm.toolsFunc.defineProperty(CSSRule.prototype, "KEYFRAMES_RULE", {configurable:false, enumerable:true, writable:false, value:7});
framevm.toolsFunc.defineProperty(CSSRule.prototype, "KEYFRAME_RULE", {configurable:false, enumerable:true, writable:false, value:8});
framevm.toolsFunc.defineProperty(CSSRule.prototype, "COUNTER_STYLE_RULE", {configurable:false, enumerable:true, writable:false, value:11});
framevm.toolsFunc.defineProperty(CSSRule.prototype, "SUPPORTS_RULE", {configurable:false, enumerable:true, writable:false, value:12});
framevm.toolsFunc.defineProperty(CSSRule.prototype, "FONT_FEATURE_VALUES_RULE", {configurable:false, enumerable:true, writable:false, value:14});
