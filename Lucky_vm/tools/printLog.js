!(function () {
    framevm.toolsFunc.printLog = function printLog(logList){
        let log = "";
        for(let i=0;i<logList.length;i++){
            if(logList[i] instanceof Object){
                if(typeof logList[i] === "function"){
                    log += logList[i].toString() + " ";
                }else{
                    log += framevm.toolsFunc.getType(logList[i]) + " ";
                }
            }else if(typeof logList[i] === "symbol"){
                log += logList[i].toString() + " ";
            }else{
                log += logList[i] + " ";
            }
        }
        log += "\r\n";
        log+="AAAAA";
        sandbox.fs.appendFileSync(`./user/${sandbox._name_}/log.txt`, log);
    };
})();