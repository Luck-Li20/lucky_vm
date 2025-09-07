//游览器接口具体实现

!(function () {
    framevm.envFunc.window_name_get = function () {
        let _nameVal = framevm.memory.window['name'] ? framevm.memory.window['name']:'';
        framevm.toolsFunc.console_copy(`window_name_get :`, _nameVal)
        return _nameVal
    };
    framevm.envFunc.window_name_set = function () {
        let _nameVal = arguments[0];
        framevm.toolsFunc.console_copy(`window_name_set : `, _nameVal)
        framevm.memory.window['name'] = _nameVal
        return _nameVal
    };
    framevm.envFunc.Storage_getItem = function () {
        let _nameVal = arguments[0];
        framevm.toolsFunc.console_copy(`Storage_getItem : `, "没有实现功能",_nameVal)
        // framevm.memory.window['name'] = _nameVal
        // return _nameVal
        return null;
    };
    framevm.envFunc.Document_cookie_get = function () {
        let _nameVal = framevm.memory.Cookie;
        framevm.toolsFunc.console_copy(`Document_cookie_get : `, _nameVal)
        return _nameVal
    };
    framevm.envFunc.Navigator_userAgent_get = function () {
        let _nameVal = framevm.memory.navigator.userAgent;
        framevm.toolsFunc.console_copy(`Navigator_userAgent_get : `, _nameVal)
        return _nameVal
    };
    framevm.envFunc.Navigator_webdriver_get = function () {
        let _nameVal = framevm.memory.navigator.webdriver;
        framevm.toolsFunc.console_copy(`Navigator_webdriver_get : `, _nameVal)
        return _nameVal
    };
    framevm.envFunc.document_location_get = function () {
        let _nameVal = framevm.memory.globlProtoObj['location'];
        framevm.toolsFunc.console_copy(`document_location_get : `, _nameVal)
        return _nameVal;
    };
    framevm.envFunc.window_location_get = function () {
        let _nameVal = framevm.memory.globlProtoObj['location'];
        framevm.toolsFunc.console_copy(`window_location_get : `, _nameVal)
        return _nameVal;
    };

    framevm.envFunc.window_location_set = function () {
        let _nameVal = arguments[0];
        framevm.toolsFunc.console_copy(`window_location_set arg: `, _nameVal)
        return _nameVal;
    };
    
    // 
})();