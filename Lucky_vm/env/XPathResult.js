// XPathResult 对象 
XPathResult = function XPathResult(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(XPathResult,"XPathResult");
framevm.toolsFunc.defineProperty(XPathResult, "ANY_TYPE", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(XPathResult, "NUMBER_TYPE", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(XPathResult, "STRING_TYPE", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(XPathResult, "BOOLEAN_TYPE", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(XPathResult, "UNORDERED_NODE_ITERATOR_TYPE", {configurable:false, enumerable:true, writable:false, value:4});
framevm.toolsFunc.defineProperty(XPathResult, "ORDERED_NODE_ITERATOR_TYPE", {configurable:false, enumerable:true, writable:false, value:5});
framevm.toolsFunc.defineProperty(XPathResult, "UNORDERED_NODE_SNAPSHOT_TYPE", {configurable:false, enumerable:true, writable:false, value:6});
framevm.toolsFunc.defineProperty(XPathResult, "ORDERED_NODE_SNAPSHOT_TYPE", {configurable:false, enumerable:true, writable:false, value:7});
framevm.toolsFunc.defineProperty(XPathResult, "ANY_UNORDERED_NODE_TYPE", {configurable:false, enumerable:true, writable:false, value:8});
framevm.toolsFunc.defineProperty(XPathResult, "FIRST_ORDERED_NODE_TYPE", {configurable:false, enumerable:true, writable:false, value:9});
framevm.toolsFunc.defineProperty(XPathResult.prototype, "resultType", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XPathResult.prototype, "XPathResult", "resultType_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XPathResult.prototype, "numberValue", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XPathResult.prototype, "XPathResult", "numberValue_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XPathResult.prototype, "stringValue", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XPathResult.prototype, "XPathResult", "stringValue_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XPathResult.prototype, "booleanValue", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XPathResult.prototype, "XPathResult", "booleanValue_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XPathResult.prototype, "singleNodeValue", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XPathResult.prototype, "XPathResult", "singleNodeValue_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XPathResult.prototype, "invalidIteratorState", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XPathResult.prototype, "XPathResult", "invalidIteratorState_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XPathResult.prototype, "snapshotLength", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XPathResult.prototype, "XPathResult", "snapshotLength_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XPathResult.prototype, "ANY_TYPE", {configurable:false, enumerable:true, writable:false, value:0});
framevm.toolsFunc.defineProperty(XPathResult.prototype, "NUMBER_TYPE", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(XPathResult.prototype, "STRING_TYPE", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(XPathResult.prototype, "BOOLEAN_TYPE", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(XPathResult.prototype, "UNORDERED_NODE_ITERATOR_TYPE", {configurable:false, enumerable:true, writable:false, value:4});
framevm.toolsFunc.defineProperty(XPathResult.prototype, "ORDERED_NODE_ITERATOR_TYPE", {configurable:false, enumerable:true, writable:false, value:5});
framevm.toolsFunc.defineProperty(XPathResult.prototype, "UNORDERED_NODE_SNAPSHOT_TYPE", {configurable:false, enumerable:true, writable:false, value:6});
framevm.toolsFunc.defineProperty(XPathResult.prototype, "ORDERED_NODE_SNAPSHOT_TYPE", {configurable:false, enumerable:true, writable:false, value:7});
framevm.toolsFunc.defineProperty(XPathResult.prototype, "ANY_UNORDERED_NODE_TYPE", {configurable:false, enumerable:true, writable:false, value:8});
framevm.toolsFunc.defineProperty(XPathResult.prototype, "FIRST_ORDERED_NODE_TYPE", {configurable:false, enumerable:true, writable:false, value:9});
framevm.toolsFunc.defineProperty(XPathResult.prototype, "iterateNext", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, XPathResult.prototype, "XPathResult", "iterateNext", arguments)}});
framevm.toolsFunc.defineProperty(XPathResult.prototype, "snapshotItem", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, XPathResult.prototype, "XPathResult", "snapshotItem", arguments)}});
