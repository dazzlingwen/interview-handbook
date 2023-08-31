// 先定义三个promise状态
const PENDING = 'pending';
const REJECTED = 'rejected';
const FULFILLED = 'fulfilled';

class MyPromise {
    /**
     * constructor 关键字用于在类定义块内部创建 类 的 构造函数 。
     * 方法名 constructor 会告诉解释器在使用 new 操作符创建类的新实例时，应该调用这个函数。
     * */
    // 类中的constructor是一个特殊的方法，用于创建和初始化类的实例。
    constructor(executor) {
        //立即执行
        executor(this.resolve, this.reject)
    }

    //promise 状态
    state = PENDING;
    //成功之后的值
    value = undefined;
    //失败之后的值
    reason = undefined;
    //成功回调
    successCallback = [];
    //失败回调
    failCallback = [];

    //resolve接收到的参数为value 即“success”
    resolve = value => {
        //如果状态不是等待，阻止程序继续向下执行
        if (this.state !== PENDING) return;
        //将状态更改为 成功
        this.state = FULFILLED;
        //保存成功之后的值
        this.value = value;

        //判断成功回调是否存在，如果存在，则调用（异步体现在这个地方）
        // this.successCallback && this.successCallback(this.value)
        while (this.successCallback.length) this.successCallback.shift()(this.value)
    }
    //reject接收到的参数是reason 即“error”
    reject = reason => {
        if (this.state !== PENDING) return;
        this.state = REJECTED
        //保存失败之后的原因
        this.reason = reason

        //判断失败回调是否存在，如果存在，则调用
        // this.failCallback && this.failCallback(this.reason)
        while (this.failCallback.length) this.failCallback.shift()(this.reason)
    }

    //then函数接收两个回调函数为参数
    then(successCallback, failCallback) {
        let promise2 = new MyPromise((resolve, reject) => {
            if (this.state === FULFILLED) {
                //将要传递的值保存起来，这里的successCallback是传入then的成功回调函数，而不是前面的数组
                let x = successCallback(this.value);
                //传递动作
                resolve(x);
                // successCallback(this.value)
            } else if (this.state === REJECTED) {
                failCallback(this.reason);
            } else {
                //等待
                //将成功回调和失败回调存储起来
                this.successCallback.push(successCallback);
                this.failCallback.push(failCallback);
            }
        });
        return promise2
    }

    static all(arr) {
        let res = [];//存放结果值
        let index = 0;
        return new MyPromise((resolve, reject) => {
            function addData(key, val) {
                res[key] = val;
                index++;
                if (index === arr.length) {
                    resolve(res);
                }
            }

            for (let i = 0; i < arr.length; i++) {
                let current = arr[i];
                if (current instanceof MyPromise) {
                    //promise对象
                    current.then(val => addData(i, val), reason => reject(reason))
                } else {
                    //普通值直接追加
                    addData(i, arr[i]);
                }
            }
        })
    }
}

module.exports = MyPromise
