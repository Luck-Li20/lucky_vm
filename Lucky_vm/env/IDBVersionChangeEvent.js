// IDBVersionChangeEvent 对象 
IDBVersionChangeEvent = function IDBVersionChangeEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'IDBVersionChangeEvent': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(IDBVersionChangeEvent,"IDBVersionChangeEvent");
Object.setPrototypeOf(IDBVersionChangeEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(IDBVersionChangeEvent.prototype, "oldVersion", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IDBVersionChangeEvent.prototype, "IDBVersionChangeEvent", "oldVersion_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(IDBVersionChangeEvent.prototype, "newVersion", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IDBVersionChangeEvent.prototype, "IDBVersionChangeEvent", "newVersion_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(IDBVersionChangeEvent.prototype, "dataLoss", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IDBVersionChangeEvent.prototype, "IDBVersionChangeEvent", "dataLoss_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(IDBVersionChangeEvent.prototype, "dataLossMessage", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IDBVersionChangeEvent.prototype, "IDBVersionChangeEvent", "dataLossMessage_get", arguments)}, set:undefined});
