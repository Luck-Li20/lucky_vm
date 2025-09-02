// Touch 对象 
Touch = function Touch(){return framevm.toolsFunc.throwError("TypeError", "Failed to construct 'Touch': 1 argument required, but only 0 present.");};
framevm.toolsFunc.safeProto(Touch,"Touch");
framevm.toolsFunc.defineProperty(Touch.prototype, "identifier", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "identifier_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Touch.prototype, "target", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "target_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Touch.prototype, "screenX", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "screenX_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Touch.prototype, "screenY", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "screenY_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Touch.prototype, "clientX", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "clientX_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Touch.prototype, "clientY", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "clientY_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Touch.prototype, "pageX", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "pageX_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Touch.prototype, "pageY", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "pageY_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Touch.prototype, "radiusX", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "radiusX_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Touch.prototype, "radiusY", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "radiusY_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Touch.prototype, "rotationAngle", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "rotationAngle_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(Touch.prototype, "force", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "force_get", arguments)}, set:undefined});
