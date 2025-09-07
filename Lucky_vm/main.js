// 入口
// 导入模块
const { VM, VMScript } = require('vm2');
const fs = require("fs");

const user = require(__dirname + "\\config\\user.config.js");
const tools = require(__dirname + "\\config\\tools.config");
const env = require(__dirname + "\\config\\env.config.js");

const name = "locationTest";
//创建虚拟机实例
const vm = new VM();
// 全局对象配置
const configCode = fs.readFileSync(__dirname + "\\config\\config.js");
//功能插件相关西数
const toolscode = tools.getCode();
//浏览器环境相关代码
const envCode = env.getCode();
//全局初始化代码
const globalvarCode = tools.getFile("globalVar");
//用户初始化代码
const userVarCode = user.getCode(name, "userVar");
//设置代理对象
const proxyobjCode = tools.getFile("proxyObj");
//需要调试的代码
const debugCode = user.getCode(name, "input");
//异步执行的代码
const asyncCode = user.getCode(name, "async");
// winodw对象
const globadlThis_=fs.readFileSync("./tools/globalThis.js");
// 时间戳设置
const globalHook=fs.readFileSync("./tools/globalHook.js");
//输入日志
const logCode = fs.readFileSync("./tools/printLog.js");


// // const nodeplugin_path=fs.resolve("./nodePlugin/");
//
// // 整合代码
// // const codeTest = `${configCode}${toolscode}${logCode}${envCode}${globalvarCode}${globalHook}${globadlThis_}${userVarCode}${proxyobjCode}debugger;\r\n${debugCode}${asyncCode}`;
const codeTest = `${configCode}${toolscode}${logCode}${envCode}${globalvarCode}${globalHook}${globadlThis_}${userVarCode}${proxyobjCode}${debugCode}${asyncCode}`;
//
//
// // const crypto = require('crypto');
// // // JSDOM 解析HTML
// // // const cheerio = require('cheerio');
// // const { JSDOM } = require('jsdom')
// // const user = require(__dirname + "\\config\\user.config.js");
// // const tools = require(__dirname + "\\config\\tools.config");
// // const env = require(__dirname + "\\config\\env.config.js");
// // const { createCanvas } = require('canvas');
// 
//创建执行脚本
const script = new VMScript(codeTest, "./debugJs.js");//运行脚本文件
vm.setGlobal('sandbox', {
    fs:fs,
    _name_:name,
})
 // debugger;
const result = vm.run(script);
// // // // //输出结果
console.log("=====================================================================================")
// console.log(codeTest);
console.log("=====================================================================================")
console.log("输出结果:",result);
// fs.writeFileSync(`./user/${name}/output.js`, codeTest);
console.log("执行完成");



// Object.getOwnPropertyDescriptor(window,"name")