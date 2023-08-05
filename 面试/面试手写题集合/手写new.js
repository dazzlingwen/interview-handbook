
function customNew(constructor,...args) {
    //创建一个空对象，继承 constructor 的原型
    const obj = Object.create(constructor.prototype); //相当于赋值到obj这个空对象的prototype原型对象上
    //将obj作为this，执行 constructor，传入参数
    constructor.apply(obj,args);
    //返回obj
    return obj;
}

function Bar(name){ //内部其实相当于Bar.prototype
    this.name = name;
    this.city = '北京';
}
Bar.prototype.getName = function (){ return this.name }

let f = customNew(Bar,'小红')
let g = new Bar('小明');
console.log(f);
console.log(g);

class Foo1{ //内部其实相当于Foo1.prototype
    constructor(name) {
        this.name = name;
        this.age = '13';
    }
    getName(){
        return this.name;
    }
}
//class本质是function的语法糖

function Foo2(name){
    this.name = name;
    this.age = '14';
}
Foo2.prototype.getName = function (){
    return this.name;
}

