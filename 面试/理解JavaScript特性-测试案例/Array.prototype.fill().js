let arr = [];
let obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
}
let obj1 = {
    a: 1
}
const arr2 = Array(3).fill(obj)
console.log(arr2)

let res = arr.fill(obj);
console.log(res)
