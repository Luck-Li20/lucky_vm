// DOMPoint 对象 
DOMPoint = function DOMPoint(){};
framevm.toolsFunc.safeProto(DOMPoint,"DOMPoint");
Object.setPrototypeOf(DOMPoint.prototype, DOMPointReadOnly.prototype);
framevm.toolsFunc.defineProperty(DOMPoint, "fromPoint", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, DOMPoint, "DOMPoint", "fromPoint", arguments)}});
framevm.toolsFunc.defineProperty(DOMPoint.prototype, "x", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DOMPoint.prototype, "DOMPoint", "x_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, DOMPoint.prototype, "DOMPoint", "x_set", arguments)}});
framevm.toolsFunc.defineProperty(DOMPoint.prototype, "y", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DOMPoint.prototype, "DOMPoint", "y_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, DOMPoint.prototype, "DOMPoint", "y_set", arguments)}});
framevm.toolsFunc.defineProperty(DOMPoint.prototype, "z", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DOMPoint.prototype, "DOMPoint", "z_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, DOMPoint.prototype, "DOMPoint", "z_set", arguments)}});
framevm.toolsFunc.defineProperty(DOMPoint.prototype, "w", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DOMPoint.prototype, "DOMPoint", "w_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, DOMPoint.prototype, "DOMPoint", "w_set", arguments)}});
