// AbstractRange 对象 
AbstractRange = function AbstractRange(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(AbstractRange,"AbstractRange");
framevm.toolsFunc.defineProperty(AbstractRange.prototype, "startContainer", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AbstractRange.prototype, "AbstractRange", "startContainer_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(AbstractRange.prototype, "startOffset", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AbstractRange.prototype, "AbstractRange", "startOffset_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(AbstractRange.prototype, "endContainer", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AbstractRange.prototype, "AbstractRange", "endContainer_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(AbstractRange.prototype, "endOffset", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AbstractRange.prototype, "AbstractRange", "endOffset_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(AbstractRange.prototype, "collapsed", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, AbstractRange.prototype, "AbstractRange", "collapsed_get", arguments)}, set:undefined});
