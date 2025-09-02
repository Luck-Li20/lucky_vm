// Serial 对象 
Serial = function Serial(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(Serial,"Serial");
Object.setPrototypeOf(Serial.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(Serial.prototype, "onconnect", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Serial.prototype, "Serial", "onconnect_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, Serial.prototype, "Serial", "onconnect_set", arguments)}});
framevm.toolsFunc.defineProperty(Serial.prototype, "ondisconnect", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, Serial.prototype, "Serial", "ondisconnect_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, Serial.prototype, "Serial", "ondisconnect_set", arguments)}});
framevm.toolsFunc.defineProperty(Serial.prototype, "getPorts", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Serial.prototype, "Serial", "getPorts", arguments)}});
framevm.toolsFunc.defineProperty(Serial.prototype, "requestPort", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, Serial.prototype, "Serial", "requestPort", arguments)}});
