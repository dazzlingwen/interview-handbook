//手写一个节流函数
function throttle(fn, delay = 100) {
    let timer = 0;
    return function () {
        if (timer) return //只要timer还存在，那就直接返回，不执行下面代码；如果timer不存在了，就给它重新设置一个定时器
        timer = setTimeout(() => {
            console.log(this)
            fn.apply(this, arguments) //透传this，指向throttle
            console.log('this', this)
            timer = 0 // 执行完清除定时器
        }, delay)
        console.log('timer', timer)
    }
}

function throttle_test(fn, delay = 100) {
    let timer = 0;
    return function () {
        if (timer) return //这里虽然返回了，但是定时器仍然存在
        timer = setTimeout(() => {
            fn.apply(fn, arguments);
            timer = 0;
        }, delay)
    }
}

// 防抖
function debounce(fn, delay = 200) {
    let timer = 0;
    return function () {
        if (timer) clearInterval(timer)
        timer = setTimeout(() => { //这里必须用箭头函数，如果是普通函数的话，this会指向window，因为setTimeout是浏览器方法，它的调用者是window
            fn.apply(this, arguments);
            console.log(this);
            timer = 0;
        }, delay)
        console.log('timer', timer);
    }
}

function debounce_test(fn, delay = 100) {
    let timer = 0;
    if (timer) clearInterval(timer)
    timer = setTimeout(() => {
        fn.apply(this, arguments);
        timer = 0;
    }, delay);
}


console.log(setTimeout(() => {
    console.log('xxx')
}, 2000))

throttle(() => {
    console.log('节流')
}, 300)



async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}


async function async2() {
    console.log('async2')
}


console.log('script start')


setTimeout(() => {
    console.log('setTimeout')
}, 0)


async1()


new Promise(resolve => {
    console.log('promise1')
    resolve()
}).then(function() {
    console.log('promise2')
})
console.log('script end')


