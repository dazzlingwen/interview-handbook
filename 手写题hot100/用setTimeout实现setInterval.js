function fn() {
    console.log(1);
}

let timeWorker = {}; // 全局变量

// 实现setInterval
function mySetInterval(fn, delay) {
    let key = Symbol();
    let execute = function (fn, delay) {
        timeWorker[key] = setTimeout(function () {
            fn();
            execute(fn, delay)
        }, delay)
    }
    execute(fn, delay);
    return key;
}

let timerID = mySetInterval(fn, 1000);

// 实现clearInterval
function myClearInterval(key) {
    if (key in timeWorker) {
        clearTimeout(timeWorker[key]);
        delete timeWorker[key];
    }
}

setTimeout(()=>{
    myClearInterval(timerID);
},5000)
