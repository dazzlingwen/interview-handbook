const MyPromise = require('./myPromise')
function p1() {
    return new Promise(function (resolve,reject){
        setTimeout(function (){
            resolve('p1')
        },1000)
    })
}
function p2(){
    return new Promise(function (resolve, reject){
        resolve('p2')
    })
}

// Promise.all(['a','b',p1(),p2(),'c']).then(function (res){
//     console.log(res)
// })

MyPromise.all(['a','b',p1(),p2(),'c']).then(function (res){
    console.log(res)
})
