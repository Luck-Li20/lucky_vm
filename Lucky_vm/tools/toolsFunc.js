//功能插件相关函数
!(function () {
        // env函数分发器
    framevm.toolsFunc.dispatch = function dispatch(self, obj, objName, funcName, argList, defaultValue){
                        debugger;
        let name = `${objName}_${funcName}`; // EventTarget_addEventListener
        if(Object.getOwnPropertyDescriptor(obj, "constructor") !== undefined){
            if(Object.getOwnPropertyDescriptor(self, "constructor") !== undefined){
                // self 不是实例对象
                return framevm.toolsFunc.throwError('TypeError', 'Illegal invocation');
            }
        }
        try{
            return framevm.envFunc[name].apply(self, argList);
        }catch (e){
            if(defaultValue === undefined){
                framevm.toolsFunc.console_copy(`[${name}]正在执行，错误信息: ${e.message}`);
            }
            return defaultValue;
        }
    }
    // 定义对象属性defineProperty
    framevm.toolsFunc.defineProperty = function defineProperty(obj, prop, oldDescriptor)  {
        // 新的描述符
        let newDescriptor = {};
        // 设置可配置属性   如果代理必须设置为true
        newDescriptor.configurable = framevm.config.proxy || oldDescriptor.configurable;// 如果开启代理必须是true
        // 可枚举
        newDescriptor.enumerable = oldDescriptor.enumerable;
        // 是否可写属性  不是每一个都存在的
        if (oldDescriptor.hasOwnProperty("writable")) {
            // 开启代理需要属性为true
            newDescriptor.writable = framevm.config.proxy || oldDescriptor.writable;// 如果开启代理必须是true
        }
        ;
        if (oldDescriptor.hasOwnProperty("value")) {
            let value = oldDescriptor.value;
            if (typeof value === "function") {
                framevm.toolsFunc.safeFunc(value, prop);
            }
            newDescriptor.value = value;
        }
        ;
        if (oldDescriptor.hasOwnProperty("get")) {
            let get = oldDescriptor.get;
            if (typeof get === "function") {
                framevm.toolsFunc.safeFunc(get, `get ${prop}`);
            }
            newDescriptor.get = get;
        }
        ;
        if (oldDescriptor.hasOwnProperty("set")) {
            let set = oldDescriptor.set;
            if (typeof set === "function") {
                framevm.toolsFunc.safeFunc(set, `set ${prop}`);
            }
            newDescriptor.set = set;
        }
        ;
        Object.defineProperty(obj, prop, newDescriptor);
    }
    // 保护函数
    !function () {
        const $toString = Function.prototype.toString;
        const symbol = Symbol(); // 独一无二的属性
        const myToString = function () {
            return typeof this === 'function' && this[symbol] || $toString.call(this);
        }
        function set_native(func, key, value) {
            Object.defineProperty(func, key, {
                enumerable: false,
                configurable: true,
                writable: true,
                value: value
            });
        }
        delete Function.prototype.toString;
        set_native(Function.prototype, "toString", myToString);
        set_native(Function.prototype.toString, symbol, "function toString() { [native code] }");
        framevm.toolsFunc.setNative = function (func, funcname) {
            set_native(func, symbol, `function ${funcname || func.name || ''}() { [native code] }`);
        }
    }();
    // 对象重命名
    framevm.toolsFunc.reNameObj = function reNameObj(func, name) {
        Object.defineProperty(func.prototype, Symbol.toStringTag, {
            configurable: true,
            enumerable: false,
            writable: false,
            value: name
        });
    };
    // 函数重命名
    framevm.toolsFunc.reNameFunc = function reNameFunc(func, name) {
        Object.defineProperty(func, "name", {
            configurable: true,
            enumerable: false,
            writable: false,
            value: name
        });
    };
    // 函数保护方法
    framevm.toolsFunc.safeFunc = function safeFunc(func, name) {
        framevm.toolsFunc.setNative(func, name);
        framevm.toolsFunc.reNameFunc(func, name);
    };
    // 原型保护方法
    framevm.toolsFunc.safeProto = function safeProto(obj, name) {
        framevm.toolsFunc.setNative(obj, name);
        framevm.toolsFunc.reNameObj(obj, name);
    };  // 原型保护方法
    // 报错函数
    framevm.toolsFunc.throwError = function (name, message) {
        let e = new Error();
        e.name = name;
        e.message = message;
        e.stack = `${name}: ${message}\n    at <anonymous>:1:1`;
        throw e;
    };
    //base64 编码
    framevm.toolsFunc.base64 = {}
    framevm.toolsFunc.base64.base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    framevm.toolsFunc.base64.base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
    framevm.toolsFunc.base64.base64encode = function base64encode(str) {
        var out, i, len;
        var c1, c2, c3;

        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += framevm.toolsFunc.base64.base64EncodeChars.charAt(c1 >> 2);
                out += framevm.toolsFunc.base64.base64EncodeChars.charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += framevm.toolsFunc.base64.base64EncodeChars.charAt(c1 >> 2);
                out += framevm.toolsFunc.base64.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += framevm.toolsFunc.base64.base64EncodeChars.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += framevm.toolsFunc.base64.base64EncodeChars.charAt(c1 >> 2);
            out += framevm.toolsFunc.base64.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += framevm.toolsFunc.base64.base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            out += framevm.toolsFunc.base64.base64EncodeChars.charAt(c3 & 0x3F);
        }
        return out;
    }
    framevm.toolsFunc.base64.base64decode = function base64decode(str) {
        var c1, c2, c3, c4;
        var i, len, out;

        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            /* c1 */
            do {
                c1 = framevm.toolsFunc.base64.base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c1 == -1);
            if (c1 == -1)
                break;

            /* c2 */
            do {
                c2 = framevm.toolsFunc.base64.base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c2 == -1);
            if (c2 == -1)
                break;

            out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

            /* c3 */
            do {
                c3 = str.charCodeAt(i++) & 0xff;
                if (c3 == 61)
                    return out;
                c3 = framevm.toolsFunc.base64.base64DecodeChars[c3];
            } while (i < len && c3 == -1);
            if (c3 == -1)
                break;

            out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

            /* c4 */
            do {
                c4 = str.charCodeAt(i++) & 0xff;
                if (c4 == 61)
                    return out;
                c4 = framevm.toolsFunc.base64.base64DecodeChars[c4];
            } while (i < len && c4 == -1);
            if (c4 == -1)
                break;
            out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
        }
        return out;
    }
})();