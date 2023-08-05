function deepClone(source) {
    if(typeof source !== 'object' || typeof source === 'null'){
        return source
    }
    let target = Array.isArray(source) ? [] : {}
    for (const key in source){
        if(Object.prototype.hasOwnProperty.call(source,key)){ //直接到source上去找有没有key这个属性
            if(typeof key === 'object' && typeof key !== 'null'){
                deepClone(key)
            }else{
                target[key] = source[key]
            }
        }
    }
    return target;
}

let obj = {
    a:1,
    b:{
        c:'xxx',
        d:[1,2,3]
    }
}
let a = 1;
let obj2;
obj2 = obj;
console.log('obj2',obj2 === obj) //true
console.log(obj2) //虽然也复制了同样的，但不是深拷贝，堆中的地址仍然是同样的

let objClone = deepClone(obj);
console.log(objClone);
console.log(obj === objClone); //false
console.log(deepClone(a))
