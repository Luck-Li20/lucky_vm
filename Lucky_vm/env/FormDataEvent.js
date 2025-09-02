// FormDataEvent 对象 
FormDataEvent = function FormDataEvent(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'FormDataEvent': 2 arguments required, but only 0 present.");};
framevm.toolsFunc.safeProto(FormDataEvent,"FormDataEvent");
Object.setPrototypeOf(FormDataEvent.prototype, Event.prototype);
framevm.toolsFunc.defineProperty(FormDataEvent.prototype, "formData", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, FormDataEvent.prototype, "FormDataEvent", "formData_get", arguments)}, set:undefined});
