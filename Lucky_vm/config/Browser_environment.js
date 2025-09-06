getProtoEnvCode =function getProtoEnvCode(proto,instanceObj) {
    // proto 原型对象
    // instanceObj  实例对象用于获取

    // 文本存放
    let code =""
    let protoName=proto.name;
     // 添加注释
    code += `// ${protoName} 对象 \r\n`;
    // 定义原型
    code += `${protoName} = function ${protoName}(){`;
    try {
        new proto;
    } catch (e) {
        code += `return framevm.toolsFunc.throwError("${e.name}", "${e.message}");`;
    };
    code +="};\r\n";
    // 保护原型
    code += `framevm.toolsFunc.safeProto(${protoName},"${protoName}");\r\n`;
    // 设置原型链
    let protoObj = proto.prototype;
    let proto_protoName = Object.getPrototypeOf(protoObj)[Symbol.toStringTag];
    if(proto_protoName !== undefined){
        code += `Object.setPrototypeOf(${protoName}.prototype, ${proto_protoName}.prototype);\r\n`;
    };
    // 设置原型属性
    for (const key in Object.getOwnPropertyDescriptors(proto)) {
        if(key === "arguments" || key === "caller" || key === "length" || key === "name" || key === "prototype"){
            continue;
        };
        console.log("key -->",key);
        // 获取属性描述符
        let descriptor = getDescriptor(proto, key, protoName, protoName, instanceObj);
        code += `framevm.toolsFunc.defineProperty(${protoName}, "${key}", ${descriptor});\r\n`;

    };
    // 设置原型对象的属性
    for(const key in Object.getOwnPropertyDescriptors(proto.prototype)){
        if(key === "constructor"){
            continue;
        }
        let descriptor = getDescriptor(proto.prototype, key, `${protoName}.prototype`, protoName, instanceObj);
        code += `framevm.toolsFunc.defineProperty(${protoName}.prototype, "${key}", ${descriptor});\r\n`;
    };
    // 输出结果
    console.log("============================输出结果==============================");
    console.log(code);
    copy(code);
    console.log("============================输出结束==============================");
};

// 获取实例对象的环境代码
getObjEnvCode = function getObjEnvCode(obj, objName, instanceObj){
    let code = "";
    // 添加注释
    code += `// ${objName}对象\r\n`;
    // 定义对象
    code += `${objName} = {}\r\n`;
    // 设置原型
    let protoName = Object.getPrototypeOf(obj)[Symbol.toStringTag];
    if(protoName !== undefined){
        code += `Object.setPrototypeOf(${objName}, ${protoName}.prototype);\r\n`;
    }
    // 实例中的属性
    for(const key in Object.getOwnPropertyDescriptors(obj)){
        let descriptor = getDescriptor(obj, key, objName, objName, instanceObj);
        code += `framevm.toolsFunc.defineProperty(${objName}, "${key}", ${descriptor});\r\n`;
    }
    console.log(code);
    copy(code);
};
// 获取属性描述符
getDescriptor = function getDescriptor(obj, prop, objName, protoName, instanceObj){
    /*
    obj  对象
    prop  属性名称
    objName  对象名称
    protoName  原型名称
    instanceObj  默认值
    */

    //获取属性描述符
    let descriptor = Object.getOwnPropertyDescriptor(obj, prop);
    let configurable = descriptor.configurable;
    let enumerable = descriptor.enumerable;
    let code = `{configurable:${configurable}, enumerable:${enumerable}, `;
    if(descriptor.hasOwnProperty("writable")){
        let writable = descriptor.writable;
        code += `writable:${writable}, `;
    }
    if(descriptor.hasOwnProperty("value")){
        let value = descriptor.value;
        if(value instanceof Object){
            if(typeof value === "function"){
                code += `value:function (){return framevm.toolsFunc.dispatch(this, ${objName}, "${protoName}", "${prop}", arguments)}`;
            }else{
                // 需要关注
                console.log("需要额外关注", value);
                // JSON.stringify(value);
                code += `value:{}`
            }
        }else if(typeof value === 'symbol'){
            code += `value:${value.toString()}`;
        }else if(typeof value === "string"){
            code += `value:"${value}"`;
        }else{
            code += `value:${value}`;
        }
    }
    if(descriptor.hasOwnProperty("get")){
        let get = descriptor.get;
        if(typeof get === "function"){
            let defaultValue;
            try{
                defaultValue = get.call(instanceObj);
            }catch(e){}
            if(defaultValue === undefined || defaultValue instanceof Object){
                code += `get:function (){return framevm.toolsFunc.dispatch(this, ${objName}, "${protoName}", "${prop}_get", arguments)}, `;
            }else{
                if(typeof defaultValue === "string"){
                    code += `get:function (){return framevm.toolsFunc.dispatch(this, ${objName}, "${protoName}", "${prop}_get", arguments, '${defaultValue}')}, `;
                }else if(typeof value === 'symbol'){
                    code += `get:function (){return framevm.toolsFunc.dispatch(this, ${objName}, "${protoName}", "${prop}_get", arguments, ${defaultValue.toString()})}, `;
                }else{
                    code += `get:function (){return framevm.toolsFunc.dispatch(this, ${objName}, "${protoName}", "${prop}_get", arguments, ${defaultValue})}, `;
                }
            }
        }else{
            code += `get:undefined, `
        }
    }
    if(descriptor.hasOwnProperty("set")){
        let set = descriptor.set;
        if(typeof set === "function"){
            code += `set:function (){return framevm.toolsFunc.dispatch(this, ${objName}, "${protoName}", "${prop}_set", arguments)}`;
        }else{
            code += `set:undefined`
        }
    }
    code += '}';
    return code;

};
