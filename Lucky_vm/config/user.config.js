const fs = require("fs");
// 读取文件操作函数
function getCode(name, type) {
    try {
        return fs.readFileSync(`./user/${name}/${type}.js`)+"\r\n";
    }catch (e) {
        debugger;
        console.log(`./user/${name}.js 文件不存在`);
        return ""
    }
};

module.exports={
    getCode
}
