const fs = require("fs");
function getFile(name) {
    try {
        return fs.readFileSync(`./env/${name}.js`) + "\r\n";
    } catch (e) {
        // debugger
        console.log(`./env/${name}.js 文件不存在`);
        return ""
    }
};
framevm_filenaame=[
    "EventTarget",
    // "Node",
    "WindowProperties",
    "Window",
];
function getCode() {
    let code = "//环境代码env里面" + "\r\n";
    for (file of framevm_filenaame) {
        // code +=`// ./env/${file}.js`+ "\r\n";
        code += getFile(file)
    }
    return code;
};

module.exports = {
    getCode, getFile
}
