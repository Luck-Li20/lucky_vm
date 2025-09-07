// hook 代码
!(function(){
    let mytime_stamp = Date.now();
    // hook时间函数
    if (framevm.config.randomhook) {
        let onLeave = function (obj){
            obj.result = 1666689952666;
        }
        let onLeave2 = function (obj){
            obj.result = 0.5;
        }
        Date.now = framevm.toolsFunc.hook(Date.now,undefined,false,function (){},onLeave);
        Date.prototype.getTime = framevm.toolsFunc.hook(Date.prototype.getTime,undefined,false,function (){},onLeave);
        Math.random = framevm.toolsFunc.hook(Math.random,undefined,false,function (){},onLeave2);
    }
})()