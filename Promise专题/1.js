// 第一题
Promise.resolve(1).then(
    // new Promise((resolve,reject)=>{resolve(1)})
    res =>
        new Promise((resolve, reject) => {
            resolve(2)
        })
).catch(err => {
    console.log(err)
    return 3
}).then((res) => {
    console.log('res1', res)
})



// (res) => xxx
// (res) => {
//     return xxx
// }
// function fn(){...}

// new Promise()
//     .then(()=>{
//         return new Promise()
//     })
//     .then()


// 第二题
Promise.resolve(1).then(
    res => {
        new Promise((resolve, reject) => {
            resolve(2)
        })
    }
).catch(err => {
    console.log('err2', err)
    return 3
}).then((res) => {
    console.log('res2', res)
})


//  第三题
Promise.reject(1).then(
    res => {
        new Promise((resolve, reject) => {
            reject(2)
        })
    },
    res => {
        return 3
    }
).catch((err) => {
    console.log('err3', err)
})
