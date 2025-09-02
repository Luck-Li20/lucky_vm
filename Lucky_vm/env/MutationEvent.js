// MutationEvent 对象 
MutationEvent = function MutationEvent(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(MutationEvent,"MutationEvent");
Object.setPrototypeOf(MutationEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(MutationEvent, "MODIFICATION", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(MutationEvent, "ADDITION", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(MutationEvent, "REMOVAL", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(MutationEvent.prototype, "relatedNode", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MutationEvent.prototype, "MutationEvent", "relatedNode_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MutationEvent.prototype, "prevValue", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MutationEvent.prototype, "MutationEvent", "prevValue_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MutationEvent.prototype, "newValue", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MutationEvent.prototype, "MutationEvent", "newValue_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MutationEvent.prototype, "attrName", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MutationEvent.prototype, "MutationEvent", "attrName_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MutationEvent.prototype, "attrChange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, MutationEvent.prototype, "MutationEvent", "attrChange_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(MutationEvent.prototype, "MODIFICATION", {configurable:false, enumerable:true, writable:false, value:1});
framevm.toolsFunc.defineProperty(MutationEvent.prototype, "ADDITION", {configurable:false, enumerable:true, writable:false, value:2});
framevm.toolsFunc.defineProperty(MutationEvent.prototype, "REMOVAL", {configurable:false, enumerable:true, writable:false, value:3});
framevm.toolsFunc.defineProperty(MutationEvent.prototype, "initMutationEvent", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, MutationEvent.prototype, "MutationEvent", "initMutationEvent", arguments)}});
