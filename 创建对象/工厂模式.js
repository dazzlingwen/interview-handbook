function fn(name,age,sex){
    let obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.sex = sex;
    return obj;
}

let person1 = fn('小红',23,'女');
console.log(person1)