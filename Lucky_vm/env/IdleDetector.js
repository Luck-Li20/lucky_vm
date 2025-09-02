// IdleDetector 对象 
IdleDetector = function IdleDetector(){};
framevm.toolsFunc.safeProto(IdleDetector,"IdleDetector");
Object.setPrototypeOf(IdleDetector.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(IdleDetector, "requestPermission", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, IdleDetector, "IdleDetector", "requestPermission", arguments)}});
framevm.toolsFunc.defineProperty(IdleDetector.prototype, "userState", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IdleDetector.prototype, "IdleDetector", "userState_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(IdleDetector.prototype, "screenState", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IdleDetector.prototype, "IdleDetector", "screenState_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(IdleDetector.prototype, "onchange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IdleDetector.prototype, "IdleDetector", "onchange_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, IdleDetector.prototype, "IdleDetector", "onchange_set", arguments)}});
framevm.toolsFunc.defineProperty(IdleDetector.prototype, "start", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, IdleDetector.prototype, "IdleDetector", "start", arguments)}});
