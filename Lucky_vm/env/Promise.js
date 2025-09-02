// Promise 对象 
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
Promise = function Promise(executor) {
    // debugger;
    // try{
    //     let result = new Object();
    //     result.Promise_=new window.sandbox.bodaobj.window.Promise(arguments[0]);
    //     result = framevm.toolsFunc.createProxyObj(result, Promise, `new Promise`);
    //     console.log(`new Promise arg --> ${arguments} result -->${result}`);
    //     return result
    // }catch(error){
    //     console.log("new Promise 出错 ",error)
    //     debugger;
    //     return framevm.toolsFunc.throwError("TypeError", "Promise resolver undefined is not a function");
    // }
    this.state = PENDING;
    this.value = null;
    this.reason = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    const resolve = value => {
        if (this.state === PENDING) {
            this.state = FULFILLED;
            this.value = value;
            this.onFulfilledCallbacks.forEach(fun => {
                fun();
            });
        }
    };
    const reject = reason => {
        if (this.state === PENDING) {
            this.state = REJECTED;
            this.reason = reason;
            this.onRejectedCallbacks.forEach(fun => {
                fun();
            });
        }
    };
    try {
        executor(resolve, reject);
    } catch (reason) {
        reject(reason);
    }
};

framevm.toolsFunc.safeProto(Promise, "Promise");

framevm.toolsFunc.defineProperty(Promise, "all", { configurable: true, enumerable: false, writable: true, value: function () { return framevm.toolsFunc.dispatch(this, Promise, "Promise", "all", arguments) } });

framevm.toolsFunc.defineProperty(Promise, "allSettled", { configurable: true, enumerable: false, writable: true, value: function () { return framevm.toolsFunc.dispatch(this, Promise, "Promise", "allSettled", arguments) } });

framevm.toolsFunc.defineProperty(Promise, "any", { configurable: true, enumerable: false, writable: true, value: function () { return framevm.toolsFunc.dispatch(this, Promise, "Promise", "any", arguments) } });

framevm.toolsFunc.defineProperty(Promise, "race", { configurable: true, enumerable: false, writable: true, value: function () { return framevm.toolsFunc.dispatch(this, Promise, "Promise", "race", arguments) } });

framevm.toolsFunc.defineProperty(Promise, "resolve", { configurable: true, enumerable: false, writable: true, value: function () { return framevm.toolsFunc.dispatch(this, Promise, "Promise", "resolve", arguments) } });

framevm.toolsFunc.defineProperty(Promise, "reject", { configurable: true, enumerable: false, writable: true, value: function () { return framevm.toolsFunc.dispatch(this, Promise, "Promise", "reject", arguments) } });

framevm.toolsFunc.defineProperty(Promise.prototype, "then", { configurable: true, enumerable: false, writable: true, value: function () { return framevm.toolsFunc.dispatch(this, Promise.prototype, "Promise", "then", arguments) } });

framevm.toolsFunc.defineProperty(Promise.prototype, "catch", { configurable: true, enumerable: false, writable: true, value: function () { return framevm.toolsFunc.dispatch(this, Promise.prototype, "Promise", "catch", arguments) } });

framevm.toolsFunc.defineProperty(Promise.prototype, "finally", { configurable: true, enumerable: false, writable: true, value: function () { return framevm.toolsFunc.dispatch(this, Promise.prototype, "Promise", "finally", arguments) } });

