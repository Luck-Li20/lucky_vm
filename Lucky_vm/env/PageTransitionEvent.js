// PageTransitionEvent 对象 
PageTransitionEvent = function PageTransitionEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'PageTransitionEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(PageTransitionEvent,"PageTransitionEvent");
Object.setPrototypeOf(PageTransitionEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(PageTransitionEvent.prototype, "persisted", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, PageTransitionEvent.prototype, "PageTransitionEvent", "persisted_get", arguments)}, set:undefined});
