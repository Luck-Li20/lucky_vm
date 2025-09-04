//功能插件相关函数
!(function () {

    // 获取对象类型
    framevm.toolsFunc.getType = function getType(obj){
        return Object.prototype.toString.call(obj);
    };
        // 过滤代理属性
    framevm.toolsFunc.filterProxyProp = function filterProxyProp(prop){
        for(let i=0;i<framevm.memory.filterProxyProp.length;i++){
            if(framevm.memory.filterProxyProp[i] === prop){
                return true;
            }
        }
        return false;
    };
    // proxy代理器
    framevm.toolsFunc.proxy = function proxy(obj, objName){
        // obj: 原始对象
        // objName: 原始对象的名字
        if(!framevm.config.proxy){
            return obj;
        }
        // 判断是否已代理
        if (framevm.memory.symbolProxy in obj){
            return obj[framevm.memory.symbolProxy];
        };
        let handler =  {
            get:function (target,prop,receiver){// 三个参数
                // framevm.toolsFunc.console_copy("-->",objName,prop.toString(),target);
                let result;
                try {//防止报错
                    result = Reflect.get(target,prop,receiver);
                    if(framevm.toolsFunc.filterProxyProp(prop)){
                        return result;
                    };
                    let type = framevm.toolsFunc.getType(result);
                    // framevm.toolsFunc.console_copy("-------------",result)

                    // if (prop.toString()  === "length"){
                    //     debugger;
                    // }
                    if(result instanceof Object){
                        framevm.toolsFunc.console_copy(`[Get] --> obj:[${objName}] -> prop:[${prop.toString()}],type:[${type}]`);
                        // 递归代理

                        // framevm.toolsFunc.console_copy("递归代理","objName->",objName,"prop->",prop.toString());
                        // if (objName !== "window.$_ts"){

                        //     result = framevm.toolsFunc.proxy(result, `${objName}.${prop.toString()}`);
                        // }
                        // if (objName === "window.name" || objName ==="window.onbeforeunload"){
                        //     debugger;
                        // }

                        result = framevm.toolsFunc.proxy(result, `${objName}.${prop.toString()}`);
                    }else if(typeof result === "symbol"){
                        framevm.toolsFunc.console_copy(`[Get] --> obj:[${objName}] -> prop:[${prop.toString()}],ret:[${result.toString()}]`);
                    }else{
                        framevm.toolsFunc.console_copy(`[Get] --> obj:[${objName}] -> prop:[${prop.toString()}],ret:[${result}]}`);
                    }

                }catch (e) {
                    framevm.toolsFunc.console_copy(`[Get] --> obj:[${objName}] -> prop:[${prop.toString()}],error:[${e.message}]`);
                }
                return result;
            },
            set:function (target,prop,value,receiver){
                if(framevm.config.proxy){
                    // window 有些属性不能设置的问题
                    try{
                        let err_name=objName+"_"+prop.toString()
                        if(framevm.toolsFunc.filtererrObj(err_name)){
                            // debugger;
                            framevm.memory.err_obj_dict[err_name]=value;
                        }
                    }catch (e){

                    }

                };



                let result;
                try{
                    result = Reflect.set(target,prop,value,receiver);
                    let type = framevm.toolsFunc.getType(value);
                    if(value instanceof Object){
                        framevm.toolsFunc.console_copy(`[Set] --> obj:[${objName}] -> prop:[${prop.toString()}],type:[${type}]`);
                    }else if(typeof value === "symbol"){
                        framevm.toolsFunc.console_copy(`[Set] --> obj:[${objName}] -> prop:[${prop.toString()}],value:[${value.toString()}]`);
                    }else{
                        framevm.toolsFunc.console_copy(`[Set] --> obj:[${objName}] -> prop:[${prop.toString()}],value:[${value}]`);
                    }
                }catch (e){
                    framevm.toolsFunc.console_copy(`[Set] --> obj:[${objName}] -> prop:[${prop.toString()}],error:[${e.message}]`);
                }
                return result;
            },
            // getOwnPropertyDescriptor:function (target, prop){
            //     let result;// undefined, 描述符对象
            //     try{
            //         result = Reflect.getOwnPropertyDescriptor(target, prop);
            //         let type = framevm.toolsFunc.getType(result);
            //         // framevm.toolsFunc.console_copy(`{getOwnPropertyDescriptor|obj:[${objName}] -> prop:[${prop.toString()}],type:[${type}]}`);
            //         if("constructor" !== prop){
            //             // framevm.toolsFunc.console_copy(`{getOwnPropertyDescriptor|obj:[${objName}] -> prop:[${prop.toString()}],type:[${type}]}`);
            //         }
            //     }catch (e){
            //         //  framevm.toolsFunc.console_copy(`{getOwnPropertyDescriptor|obj:[${objName}] -> prop:[${prop.toString()}],error:[${e.message}]}`);
            //     }
            //     return result;
            // },
            // defineProperty: function (target, prop, descriptor){
            //     let result;
            //     try{
            //         result = Reflect.defineProperty(target, prop, descriptor);
            //         framevm.toolsFunc.console_copy(`{defineProperty|obj:[${objName}] -> prop:[${prop.toString()}]}`);
            //     }catch (e) {
            //         framevm.toolsFunc.console_copy(`{defineProperty|obj:[${objName}] -> prop:[${prop.toString()}],error:[${e.message}]}`);
            //     }
            //     return result;
            // },
            // apply:function (target, thisArg, argumentsList){
            //     // target: 函数对象
            //     // thisArg: 调用函数的this指针
            //     // argumentsList: 数组， 函数的入参组成的一个列表
            //     // let result;
            //     // try{
            //     //     result = Reflect.apply(target, thisArg, argumentsList);
            //     //     let type = framevm.toolsFunc.getType(result);
            //     //     if(result instanceof Object){
            //     //         framevm.toolsFunc.console_copy(`{apply|function:[${objName}], args:[${argumentsList}], type:[${type}]}`);
            //     //     }else if(typeof result === "symbol"){
            //     //         framevm.toolsFunc.console_copy(`{apply|function:[${objName}], args:[${argumentsList}], result:[${result.toString()}]}`);
            //     //     }else{
            //     //         framevm.toolsFunc.console_copy(`{apply|function:[${objName}], args:[${argumentsList}], result:[${result}]}`);
            //     //     }
            //     // }catch (e) {
            //     //     framevm.toolsFunc.console_copy(`{apply|function:[${objName}], args:[${argumentsList}],error:[${e.message}]}`);
            //     // }
            //     // return result;

            //                     // target: 函数对象
            //     // thisArg: 调用函数的this指针
            //     // argumentsList: 数组， 函数的入参组成的一个列表
            //     let result;
            //     try{
            //         result = Reflect.apply(target, thisArg, argumentsList);
            //         let type = framevm.toolsFunc.getType(result);
            //         if(result instanceof Object){
            //             framevm.toolsFunc.console_copy(`{apply|function:[${objName}], args:[${argumentsList}], type:[${type}]}`);
            //         }else if(typeof result === "symbol"){
            //             framevm.toolsFunc.console_copy(`{apply|function:[${objName}], args:[${argumentsList}] result:[${result.toString()}]}`);
            //         }else{
            //             framevm.toolsFunc.console_copy(`{apply|function:[${objName}], args:[${argumentsList}] result:[${result}]}`);
            //         }
            //     }catch (e) {
            //         framevm.toolsFunc.console_copy(`{apply|function:[${objName}], args:[${argumentsList}] error:[${e.message}]}`);
            //     }
            //     return result;
            // },
            // construct:function (target, argArray, newTarget) {
            //     // target: 函数对象
            //     // argArray： 参数列表
            //     // newTarget：代理对象
            //     let result;
            //     try{
            //         result = Reflect.construct(target, argArray, newTarget);
            //         let type = framevm.toolsFunc.getType(result);
            //         framevm.toolsFunc.console_copy(`{construct|function:[${objName}], type:[${type}]}`);
            //     }catch (e) {
            //         framevm.toolsFunc.console_copy(`{construct|function:[${objName}],error:[${e.message}]}`);
            //     }
            //     return result;

            // },
            // deleteProperty:function (target, propKey){
            //     let result = Reflect.deleteProperty(target, propKey);
            //     framevm.toolsFunc.console_copy(`{deleteProperty|obj:[${objName}] -> prop:[${propKey.toString()}], result:[${result}]}`);
            //     return result;
            // },
            // has:function (target, propKey){ // in 操作符
            //     let result = Reflect.has(target, propKey);
            //     if (propKey !== framevm.memory.symbolProxy){
            //         framevm.toolsFunc.console_copy(`{has|obj:[${objName}] -> prop:[${propKey.toString()}], result:[${result}]}`);
            //     };
            //     return result;
            // },
            // ownKeys: function (target){
            //     let result = Reflect.ownKeys(target);
            //     framevm.toolsFunc.console_copy(`{ownKeys|obj:[${objName}]}`);
            //     return result
            // },
            // getPrototypeOf:function(target){
            //     let result = Reflect.getPrototypeOf(target);
            //     framevm.toolsFunc.console_copy(`{getPrototypeOf|obj:[${objName}]}`);
            //     return result;
            // },
            // setPrototypeOf:function(target, proto){
            //     let result = Reflect.setPrototypeOf(target, proto);
            //     framevm.toolsFunc.console_copy(`{setPrototypeOf|obj:[${objName}]}`);
            //     return result;
            // },
            // preventExtensions:function(target){
            //     let result = Reflect.preventExtensions(target, proto);
            //     framevm.toolsFunc.console_copy(`{preventExtensions|obj:[${objName}]}`);
            //     return result;
            // },
            // isExtensible:function(target){
            //     let result = Reflect.isExtensible(target, proto);
            //     framevm.toolsFunc.console_copy(`{isExtensible|obj:[${objName}]}`);
            //     return result;
            // }
        };

        let proxyobj =new Proxy(obj, handler);
        // 防止重复代理
        Object.defineProperty(obj,framevm.memory.symbolProxy,{
            configurable:false,
            enumerable:false,
            writable:false,
            value:proxyobj
        });
        return proxyobj;
    };
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