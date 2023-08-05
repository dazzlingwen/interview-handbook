function Person(name,age,sex){
    // let obj = new Object();
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.sayName = function (){
        console.log('hello'+this.name);
    }
    // return obj
}

let person1 = new Person('acs',34,'girl');
// person1.sayName();
// let o = Person()
// console.log(o)
console.log(person1)
//与工厂模式对比
//1.没有显示地创建对象
//2.属性和方法直接赋值给了this
//3.没有return


let a = 1;
let b = 2;
let arr = [a,b];
// console.log(arr);
[a,b] = [b,a];
console.log('a,b',a,b);
// arr = [b,a];
console.log('[a,b]',[a,b])
console.log(arr)
arr = JSON.parse(JSON.stringify([a,b]));
console.log('arr',arr)

// let a = 1,
//     b = 2;
//
// [a, b] = [b, a];
// console.log(a,b)
