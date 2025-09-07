framevm={
    // 插件函数
    "toolsFunc":{},
    "Document_all":[],
    // 具体环境实现相关
    "envFunc":{},
     // 配置相关
    "config":{},
    // 内存
    "memory":{},
};
// 保存全局对象 跳过 == 验证
framevm.memory.globlProtoObj={}
// 进行hook 通用函数代码
framevm.config.randomhook=true;
// framevm.config.randomhook=false;
//是否开启debugger
// framevm.config.isdebug=true ;
framevm.config.isdebug=false ;
// 是否开启代理
// framevm.config.proxy = true;
framevm.config.proxy = false;



// 独一无二的属性, 标记是否已代理
framevm.memory.symbolProxy = Symbol("proxy");
// 是否开启打印
framevm.config.printLog=true;
if (framevm.config.printLog){
  framevm.toolsFunc.console_copy=console.log

}else{
  framevm.toolsFunc.console_copy=function(){}
}
// 需要过滤的属性
framevm.memory.filterProxyProp =[
    'hasOwnProperty',
    '__proto__',
    'dom_',
    'constructor',
    'valueOf',
    framevm.memory.symbolProxy,
    framevm.memory.symbolData,
    framevm.memory.symbolgettag,
    "eval",
    'toString',
    'prototype',
    'framevm',
    "sandbox"
];
// window存放元素
framevm.memory.window={
  'onload':null
};
framevm.memory.Cookie = "";// json格式的cookie
framevm.memory.navigator={
"userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
"webdriver":false,
};
