// TaskController 对象 
TaskController = function TaskController(){};
framevm.toolsFunc.safeProto(TaskController,"TaskController");
Object.setPrototypeOf(TaskController.prototype, AbortController.prototype);
framevm.toolsFunc.defineProperty(TaskController.prototype, "setPriority", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, TaskController.prototype, "TaskController", "setPriority", arguments)}});
