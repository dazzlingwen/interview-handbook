const obj = {};
const arr = [];
const fn = () => {

};

// instanceof的原理
//A是实例对象，B要判断是否在A原型链上的值
const instanceOf = (A,B)=>{
    let p = A; // 指针
    p.__proto__ = undefined;//初始化
    //先遍历
    while(p){
        // 逻辑
        if(p === B.prototype){
            console.log('B.prototype',B.prototype);
            return true
        }
        p = p.__proto__; // 让p指针指向它的proto
    }
    return false
}

console.log(instanceOf([],Array))
console.log(instanceOf({},Object))
console.log(instanceOf(arr,Object))
console.log(instanceOf(1,Array))


var foo = {};
F = function (){};
Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

console.log(foo.a);
console.log(foo.b);
console.log(F.a);
console.log(F.b);
