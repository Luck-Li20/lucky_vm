// 入口
// 导入模块
const { VM, VMScript } = require('vm2');
const fs = require("fs");

const user = require(__dirname + "\\config\\user.config.js");
const tools = require(__dirname + "\\config\\tools.config");
const env = require(__dirname + "\\config\\env.config.js");

const name = "test";// 固定时间戳
//创建虚拟机实例
const vm = new VM();
debugger;
// 全局对象配置
// debugger
// const configCode = fs.readFileSync(__dirname + "\\config\\config.js");
//功能插件相关西数
// const toolscode = tools.getCode();
const toolscode="";
// //浏览器环境相关代码
// const envCode = env.getCode();
// //全局初始化代码
// const globalvarCode = tools.getFile("globalVar");
//用户初始化代码
const userVarCode = user.getCode(name, "userVar");
// //设置代理对象
// const proxyobjCode = tools.getFile("proxyObj");
//需要调试的代码
const debugCode = user.getCode(name, "input");
//异步执行的代码
const asyncCode = user.getCode(name, "async");
// // // winodw对象
// // const globadlThis_=fs.readFileSync("./tools/globalThis.js");
// // // 时间戳设置
// // const timeVar=fs.readFileSync("./tools/timeVar.js");
// // //输入日志
// // const logCode = fs.readFileSync("./tools/printLog.js");
//
// // const nodeplugin_path=fs.resolve("./nodePlugin/");
//
// // 整合代码
// // const codeTest = `${configCode}${toolscode}${logCode}${ }${globalvarCode}${timeVar}${globadlThis_}${userVarCode}${proxyobjCode}debugger;\r\n${debugCode}${asyncCode}`;
// const codeTest = `${toolscode}${envCode}${globalvarCode}${userVarCode}${proxyobjCode}debugger;\r\n${debugCode}${asyncCode}`;
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
// //创建执行脚本
// const script = new VMScript(codeTest, "./debugJs.js");//运行脚本文件
// const result = vm.run(script);
// // // // //输出结果
// console.log("输出结果:",result);
// console.log(tools.getNowDate(), `result -->`, result);
console.log("执行完毕！");