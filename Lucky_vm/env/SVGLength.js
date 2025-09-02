// SVGLength 对象 
SVGLength = function SVGLength(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(SVGLength,"SVGLength");
framevm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_UNKNOWN", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_NUMBER", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_PERCENTAGE", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_EMS", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_EXS", {configurable:false, enumerable:true, writable:false, value:4});
framevm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_PX", {configurable:false, enumerable:true, writable:false, value:5});
framevm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_CM", {configurable:false, enumerable:true, writable:false, value:6});
framevm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_MM", {configurable:false, enumerable:true, writable:false, value:7});
framevm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_IN", {configurable:false, enumerable:true, writable:false, value:8});
framevm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_PT", {configurable:false, enumerable:true, writable:false, value:9});
framevm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_PC", {configurable:false, enumerable:true, writable:false, value:10});
framevm.toolsFunc.defineProperty(SVGLength.prototype, "unitType", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGLength.prototype, "SVGLength", "unitType_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(SVGLength.prototype, "value", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGLength.prototype, "SVGLength", "value_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, SVGLength.prototype, "SVGLength", "value_set", arguments)}});
framevm.toolsFunc.defineProperty(SVGLength.prototype, "valueInSpecifiedUnits", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGLength.prototype, "SVGLength", "valueInSpecifiedUnits_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, SVGLength.prototype, "SVGLength", "valueInSpecifiedUnits_set", arguments)}});
framevm.toolsFunc.defineProperty(SVGLength.prototype, "valueAsString", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, SVGLength.prototype, "SVGLength", "valueAsString_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, SVGLength.prototype, "SVGLength", "valueAsString_set", arguments)}});
framevm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_UNKNOWN", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_NUMBER", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_PERCENTAGE", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_EMS", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_EXS", {configurable:false, enumerable:true, writable:false, value:4});
framevm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_PX", {configurable:false, enumerable:true, writable:false, value:5});
framevm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_CM", {configurable:false, enumerable:true, writable:false, value:6});
framevm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_MM", {configurable:false, enumerable:true, writable:false, value:7});
framevm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_IN", {configurable:false, enumerable:true, writable:false, value:8});
framevm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_PT", {configurable:false, enumerable:true, writable:false, value:9});
framevm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_PC", {configurable:false, enumerable:true, writable:false, value:10});
framevm.toolsFunc.defineProperty(SVGLength.prototype, "convertToSpecifiedUnits", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, SVGLength.prototype, "SVGLength", "convertToSpecifiedUnits", arguments)}});
framevm.toolsFunc.defineProperty(SVGLength.prototype, "newValueSpecifiedUnits", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, SVGLength.prototype, "SVGLength", "newValueSpecifiedUnits", arguments)}});
