// TaskSignal 对象 
TaskSignal = function TaskSignal(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(TaskSignal,"TaskSignal");
Object.setPrototypeOf(TaskSignal.prototype, AbortSignal.prototype);
framevm.toolsFunc.defineProperty(TaskSignal.prototype, "priority", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TaskSignal.prototype, "TaskSignal", "priority_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TaskSignal.prototype, "onprioritychange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TaskSignal.prototype, "TaskSignal", "onprioritychange_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, TaskSignal.prototype, "TaskSignal", "onprioritychange_set", arguments)}});
