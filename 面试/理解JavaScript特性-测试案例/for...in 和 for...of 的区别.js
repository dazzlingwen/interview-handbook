const arr=[10,20,30];

// for..in
for(let key in arr){
    console.log(key) //string
}
console.log('------------------------')

// for..of
for(let val of arr){
    console.log(val) //number
}
console.log('------------------------')

//遍历类数组
function fn() {
    for (let arg of arguments){
        console.log(arg);
    }
}
fn(100,200,'af')

// const pList = document.querySelectorAll('p')
// for (let p of pList){
//     console.log(p)
// }

const obj = {
    a:1,
    b:2
}
for (let objKey in obj) {
    console.log(objKey)
}
let res = Object.getOwnPropertyDescriptors(obj);
console.log('res',res)
console.log('------------------------')

// for..of不能遍历对象
// for (let objElement of obj) {
//     console.log(objElement)
// }

const map = new Map()
for (let mapElement of map) {
    console.log(mapElement)
}
console.log('------------------------')

// const arr1 = [1,2,3];
// arr1[Symbol.iterator]()

function createTimeoutPromise(val) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(val)
        }, 1000)
    })
}
(async function () {
    const p1 = createTimeoutPromise(10) //异步对象
    const p2 = createTimeoutPromise(20)

    const v1 = await p1
    console.log(v1)
    const v2 = await p2
    console.log(v2)
})()
