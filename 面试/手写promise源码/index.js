const MyPromise = require('./myPromise')

let promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
    }, 2000)
    // reject('error');
})

promise.then(value => {
    console.log(value)
}, reason => {
    console.log(reason)
})

