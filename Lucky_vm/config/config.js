framevm={
    // 插件函数
    "toolsFunc":{},
    "Document_all":[],
    // 具体环境实现相关
    "envFunc":{},
     // 配置相关
    "config":{},
};
//是否开启debugger
// framevm.config.isdebug=true ;
framevm.config.isdebug=false ;
// 是否开启代理
// framevm.config.proxy = true;
framevm.config.proxy = false;
// 是否开启打印
framevm.config.printLog=true;
if (framevm.config.printLog){
  framevm.toolsFunc.console_copy=console.log

}else{
  framevm.toolsFunc.console_copy=function(){}
}