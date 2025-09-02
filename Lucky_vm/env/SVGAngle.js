// SVGAngle 对象 
SVGAngle = function SVGAngle(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGAngle,"SVGAngle");
framevm.toolsFunc.defineProperty(SVGAngle, "SVG_ANGLETYPE_UNKNOWN", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(SVGAngle, "SVG_ANGLETYPE_UNSPECIFIED", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(SVGAngle, "SVG_ANGLETYPE_DEG", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(SVGAngle, "SVG_ANGLETYPE_RAD", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(SVGAngle, "SVG_ANGLETYPE_GRAD", {configurable:false, enumerable:true, writable:false, value:4});
framevm.toolsFunc.defineProperty(SVGAngle.prototype, "unitType", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGAngle.prototype, "SVGAngle", "unitType_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGAngle.prototype, "value", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGAngle.prototype, "SVGAngle", "value_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, SVGAngle.prototype, "SVGAngle", "value_set", arguments)}});
framevm.toolsFunc.defineProperty(SVGAngle.prototype, "valueInSpecifiedUnits", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGAngle.prototype, "SVGAngle", "valueInSpecifiedUnits_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, SVGAngle.prototype, "SVGAngle", "valueInSpecifiedUnits_set", arguments)}});
framevm.toolsFunc.defineProperty(SVGAngle.prototype, "valueAsString", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGAngle.prototype, "SVGAngle", "valueAsString_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, SVGAngle.prototype, "SVGAngle", "valueAsString_set", arguments)}});
framevm.toolsFunc.defineProperty(SVGAngle.prototype, "SVG_ANGLETYPE_UNKNOWN", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(SVGAngle.prototype, "SVG_ANGLETYPE_UNSPECIFIED", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(SVGAngle.prototype, "SVG_ANGLETYPE_DEG", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(SVGAngle.prototype, "SVG_ANGLETYPE_RAD", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(SVGAngle.prototype, "SVG_ANGLETYPE_GRAD", {configurable:false, enumerable:true, writable:false, value:4});
framevm.toolsFunc.defineProperty(SVGAngle.prototype, "convertToSpecifiedUnits", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, SVGAngle.prototype, "SVGAngle", "convertToSpecifiedUnits", arguments)}});
framevm.toolsFunc.defineProperty(SVGAngle.prototype, "newValueSpecifiedUnits", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, SVGAngle.prototype, "SVGAngle", "newValueSpecifiedUnits", arguments)}});
