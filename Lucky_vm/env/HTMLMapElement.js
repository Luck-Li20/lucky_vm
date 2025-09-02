// HTMLMapElement 对象 
HTMLMapElement = function HTMLMapElement(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(HTMLMapElement,"HTMLMapElement");
Object.setPrototypeOf(HTMLMapElement.prototype, HTMLElement.prototype);
framevm.toolsFunc.defineProperty(HTMLMapElement.prototype, "name", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLMapElement.prototype, "HTMLMapElement", "name_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, HTMLMapElement.prototype, "HTMLMapElement", "name_set", arguments)}});
framevm.toolsFunc.defineProperty(HTMLMapElement.prototype, "areas", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, HTMLMapElement.prototype, "HTMLMapElement", "areas_get", arguments)}, set:undefined});
