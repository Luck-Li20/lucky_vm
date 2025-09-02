// NavigatorManagedData 对象 
NavigatorManagedData = function NavigatorManagedData(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(NavigatorManagedData,"NavigatorManagedData");
Object.setPrototypeOf(NavigatorManagedData.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(NavigatorManagedData.prototype, "onmanagedconfigurationchange", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, NavigatorManagedData.prototype, "NavigatorManagedData", "onmanagedconfigurationchange_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, NavigatorManagedData.prototype, "NavigatorManagedData", "onmanagedconfigurationchange_set", arguments)}});
framevm.toolsFunc.defineProperty(NavigatorManagedData.prototype, "getManagedConfiguration", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, NavigatorManagedData.prototype, "NavigatorManagedData", "getManagedConfiguration", arguments)}});
