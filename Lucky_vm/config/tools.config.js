const fs = require("fs");
function getFile(name) {
    try {
        return fs.readFileSync(`./tools/${name}.js`)+"\r\n";
    }catch (e) {
        debugger
        console.log(`./tools/${name}.js 文件不存在`);
        return ""
    }
}
function getCode() {
    let code ="";
    code += getFile("toolsFunc");
    code += getFile("envFunc");
    // code += getFile("envDocumentall");
    // code += getFile("envFuncDom");
    // code += getFile("envFuncCanvas");

    return code;
};
module.exports={
    getFile,getCode
}