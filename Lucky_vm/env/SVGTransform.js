// SVGTransform 对象 
SVGTransform = function SVGTransform(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGTransform,"SVGTransform");
framevm.toolsFunc.defineProperty(SVGTransform, "SVG_TRANSFORM_UNKNOWN", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(SVGTransform, "SVG_TRANSFORM_MATRIX", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(SVGTransform, "SVG_TRANSFORM_TRANSLATE", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(SVGTransform, "SVG_TRANSFORM_SCALE", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(SVGTransform, "SVG_TRANSFORM_ROTATE", {configurable:false, enumerable:true, writable:false, value:4});
framevm.toolsFunc.defineProperty(SVGTransform, "SVG_TRANSFORM_SKEWX", {configurable:false, enumerable:true, writable:false, value:5});
framevm.toolsFunc.defineProperty(SVGTransform, "SVG_TRANSFORM_SKEWY", {configurable:false, enumerable:true, writable:false, value:6});
framevm.toolsFunc.defineProperty(SVGTransform.prototype, "type", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGTransform.prototype, "SVGTransform", "type_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGTransform.prototype, "matrix", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGTransform.prototype, "SVGTransform", "matrix_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGTransform.prototype, "angle", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGTransform.prototype, "SVGTransform", "angle_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGTransform.prototype, "SVG_TRANSFORM_UNKNOWN", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(SVGTransform.prototype, "SVG_TRANSFORM_MATRIX", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(SVGTransform.prototype, "SVG_TRANSFORM_TRANSLATE", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(SVGTransform.prototype, "SVG_TRANSFORM_SCALE", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(SVGTransform.prototype, "SVG_TRANSFORM_ROTATE", {configurable:false, enumerable:true, writable:false, value:4});
framevm.toolsFunc.defineProperty(SVGTransform.prototype, "SVG_TRANSFORM_SKEWX", {configurable:false, enumerable:true, writable:false, value:5});
framevm.toolsFunc.defineProperty(SVGTransform.prototype, "SVG_TRANSFORM_SKEWY", {configurable:false, enumerable:true, writable:false, value:6});
framevm.toolsFunc.defineProperty(SVGTransform.prototype, "setMatrix", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, SVGTransform.prototype, "SVGTransform", "setMatrix", arguments)}});
framevm.toolsFunc.defineProperty(SVGTransform.prototype, "setRotate", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, SVGTransform.prototype, "SVGTransform", "setRotate", arguments)}});
framevm.toolsFunc.defineProperty(SVGTransform.prototype, "setScale", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, SVGTransform.prototype, "SVGTransform", "setScale", arguments)}});
framevm.toolsFunc.defineProperty(SVGTransform.prototype, "setSkewX", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, SVGTransform.prototype, "SVGTransform", "setSkewX", arguments)}});
framevm.toolsFunc.defineProperty(SVGTransform.prototype, "setSkewY", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, SVGTransform.prototype, "SVGTransform", "setSkewY", arguments)}});
framevm.toolsFunc.defineProperty(SVGTransform.prototype, "setTranslate", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, SVGTransform.prototype, "SVGTransform", "setTranslate", arguments)}});
