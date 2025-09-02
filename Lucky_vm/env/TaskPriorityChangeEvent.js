// TaskPriorityChangeEvent 对象 
TaskPriorityChangeEvent = function TaskPriorityChangeEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'TaskPriorityChangeEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(TaskPriorityChangeEvent,"TaskPriorityChangeEvent");
Object.setPrototypeOf(TaskPriorityChangeEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(TaskPriorityChangeEvent.prototype, "previousPriority", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TaskPriorityChangeEvent.prototype, "TaskPriorityChangeEvent", "previousPriority_get", arguments)}, set:undefined});
