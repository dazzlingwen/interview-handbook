/**
 * 实现一个定时器函数myTimer(fn, a, b)，
 * 让fn执行，
 * 第一次执行是a毫秒后，
 * 第二次执行是a+b毫秒后，
 * 第三次是a+2b毫秒，
 * 第N次执行是a+Nb毫秒后
 *
 * 要求：
 * 1、白板手撕
 * 2、myTimer要有返回值，并且返回值是一个函数，调用该函数，可以让myTimer停掉
 */

// function myTimer(fn, a, b) {
//     let n = 0;
//     let timer = setTimeout(() => {
//         // let n;
//         n++;
//         fn();
//     }, a + (n - 1) * b);
// }

function myTimer(fn, a, b) {
    let count = 0;
    let timerId = setTimeout(function run() {
        fn();
        count++;
        timerId = setTimeout(run, a + (count - 1) * b);
    }, a);

    // 返回一个函数，用于停止定时器
    return function stopTimer() {
        clearTimeout(timerId);
    };
}

// 示例用法
function log() {
    console.log('Timer executed');
}

const stop = myTimer(log, 1000, 500);

// 停止定时器的调用
stop();
