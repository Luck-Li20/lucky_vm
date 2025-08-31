//异步执行的代码


try {
    console.log(new Window())
}catch (e) {
    console.log(e.message);
    console.log(e.name);
    console.log(e.stack);
}