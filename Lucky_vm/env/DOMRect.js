// DOMRect 对象 
DOMRect = function DOMRect(){};
framevm.toolsFunc.safeProto(DOMRect,"DOMRect");
Object.setPrototypeOf(DOMRect.prototype, DOMRectReadOnly.prototype);
framevm.toolsFunc.defineProperty(DOMRect, "fromRect", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, DOMRect, "DOMRect", "fromRect", arguments)}});
framevm.toolsFunc.defineProperty(DOMRect.prototype, "x", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DOMRect.prototype, "DOMRect", "x_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, DOMRect.prototype, "DOMRect", "x_set", arguments)}});
framevm.toolsFunc.defineProperty(DOMRect.prototype, "y", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DOMRect.prototype, "DOMRect", "y_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, DOMRect.prototype, "DOMRect", "y_set", arguments)}});
framevm.toolsFunc.defineProperty(DOMRect.prototype, "width", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DOMRect.prototype, "DOMRect", "width_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, DOMRect.prototype, "DOMRect", "width_set", arguments)}});
framevm.toolsFunc.defineProperty(DOMRect.prototype, "height", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, DOMRect.prototype, "DOMRect", "height_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, DOMRect.prototype, "DOMRect", "height_set", arguments)}});
