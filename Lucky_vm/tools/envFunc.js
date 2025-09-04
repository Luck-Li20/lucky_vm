//游览器接口具体实现
framevm.envFunc.window_name_get=function window_name_get() {
    let name =arguments[0];
    debugger;
    console.log(1111111111111111111)
    // framevm.toolsFunc.console_copy(`window_name_get -->`, name);
    return ""
}
framevm.envFunc.EventTarget_addEventListener=function EventTarget_addEventListener() {
    console.log(this === window);
    console.log(arguments);
}