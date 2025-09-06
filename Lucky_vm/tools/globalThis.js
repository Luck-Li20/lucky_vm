// window对象
// 删除浏览器中不存在的对象
delete global;
delete Buffer;
delete process;
delete GLOBAL;
delete root;
delete VMError;
delete ldObj;
delete globalThis[Symbol.toStringTag];
delete WindowProperties;
window = globalThis;
// globalThis.__proto__= Window.prototype;
Object.setPrototypeOf(window, Window.prototype);

framevm.toolsFunc.defineProperty(window, "atob", {configurable:true, enumerable:true, writable:true,
    value:function atob(str){
        return framevm.toolsFunc.base64.base64decode(str);
    }
});

framevm.toolsFunc.defineProperty(window, "btoa", {
    configurable:true,
    enumerable:true,
    writable:true,
    value:function btoa(str){
        return framevm.toolsFunc.base64.base64encode(str);
    }
});
framevm.toolsFunc.defineProperty(window, "name", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, window, "window", "name_get", arguments, '')}, set:function (){return framevm.toolsFunc.dispatch(this, window, "window", "name_set", arguments)}});
