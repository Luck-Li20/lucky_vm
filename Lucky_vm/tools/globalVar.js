//全局初始化代码
!function (){
    // debugger;
    let onEnter = function (obj){
        try{
            framevm.toolsFunc.printLog(obj.args);
        }catch (e){}
    }
    console.log = framevm.toolsFunc.hook(
        console.log,
        undefined,
        false,
        onEnter,
        function (){},
        framevm.config.print
    );

}();