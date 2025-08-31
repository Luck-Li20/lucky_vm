//游览器接口具体实现
framevm.envFunc.window_name_get=function window_name_get() {
    debugger;
}
framevm.envFunc.EventTarget_addEventListener=function EventTarget_addEventListener() {
    console.log(this === window);
    console.log(arguments);
}