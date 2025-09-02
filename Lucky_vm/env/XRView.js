// XRView 对象 
XRView = function XRView(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(XRView,"XRView");
framevm.toolsFunc.defineProperty(XRView.prototype, "eye", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRView.prototype, "XRView", "eye_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRView.prototype, "projectionMatrix", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRView.prototype, "XRView", "projectionMatrix_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRView.prototype, "transform", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRView.prototype, "XRView", "transform_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRView.prototype, "recommendedViewportScale", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRView.prototype, "XRView", "recommendedViewportScale_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRView.prototype, "isFirstPersonObserver", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRView.prototype, "XRView", "isFirstPersonObserver_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRView.prototype, "camera", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, XRView.prototype, "XRView", "camera_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(XRView.prototype, "requestViewportScale", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, XRView.prototype, "XRView", "requestViewportScale", arguments)}});
