var promise = new Promise((resolve,reject)=>{
    console.log('1'); //同步
    resolve('2');
    console.log('3'); //同步
});
promise.then(res=>{
    console.log('res',res); //异步
    setTimeout(()=>{
        console.log('4')
    },0)
}) //promise是微任务
setTimeout(()=>{
    console.log('5')
},0) //宏任务
console.log('6')

//6 5 1 3 2 res 4
//同步的宏任务>异步的微任务
