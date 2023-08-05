/**
 * 题目链接：https://github.com/Sunny-117/js-challenges/issues/170
 * 中断请求几种方案
 */

/**
 * 第一种方案：Promise之中断调用链
 */
Promise.resolve().then(() => {
    // 这里是pending状态的，中断请求的核心就是要把这个pending状态延续下去
    return new Promise(() => {
    })
})

/**
 * 第二种方案：Promise之中断Promise（非终止Promise，因为Promise是不能被终止的）
 * @type {Promise<unknown>}
 */
// 首先模拟网络请求
const request = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('收到服务端数据')
    }, Math.random() * 3000)
})

function timeoutFn(promise1,time){
    let promise2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject('网络超时')
        },time)
    })
    return Promise.race([promise1,promise2]);
}

timeoutFn(request, 2000)
