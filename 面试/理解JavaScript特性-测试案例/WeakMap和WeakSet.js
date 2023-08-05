const wMap = new WeakMap() //弱引用
function fn() {
    const obj = {x: 100}
    wMap.set(obj, 199)//weakMap 的 key只能是引用类型
    console.log(wMap, obj)
    console.log(wMap.get(obj))
}

fn()
console.log(wMap) //里面的变量已经被销毁了


const map = new Map()

function fn1() {
    const obj = {x: 100}
    console.log(typeof obj)
    map.set(obj, 199)
}

fn1()
console.log(map)

