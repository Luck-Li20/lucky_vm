// Range 对象 
Range = function Range(){};
framevm.toolsFunc.safeProto(Range,"Range");
Object.setPrototypeOf(Range.prototype, AbstractRange.prototype);
framevm.toolsFunc.defineProperty(Range, "START_TO_START", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(Range, "START_TO_END", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(Range, "END_TO_END", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(Range, "END_TO_START", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(Range.prototype, "commonAncestorContainer", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "commonAncestorContainer_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Range.prototype, "START_TO_START", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(Range.prototype, "START_TO_END", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(Range.prototype, "END_TO_END", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(Range.prototype, "END_TO_START", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(Range.prototype, "cloneContents", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "cloneContents", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "cloneRange", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "cloneRange", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "collapse", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "collapse", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "compareBoundaryPoints", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "compareBoundaryPoints", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "comparePoint", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "comparePoint", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "createContextualFragment", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "createContextualFragment", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "deleteContents", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "deleteContents", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "detach", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "detach", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "expand", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "expand", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "extractContents", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "extractContents", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "getBoundingClientRect", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "getBoundingClientRect", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "getClientRects", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "getClientRects", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "insertNode", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "insertNode", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "intersectsNode", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "intersectsNode", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "isPointInRange", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "isPointInRange", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "selectNode", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "selectNode", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "selectNodeContents", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "selectNodeContents", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "setEnd", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "setEnd", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "setEndAfter", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "setEndAfter", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "setEndBefore", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "setEndBefore", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "setStart", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "setStart", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "setStartAfter", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "setStartAfter", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "setStartBefore", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "setStartBefore", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "surroundContents", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "surroundContents", arguments)}});
framevm.toolsFunc.defineProperty(Range.prototype, "toString", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Range.prototype, "Range", "toString", arguments)}});
