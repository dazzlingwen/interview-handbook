// 1.Proxy 是对整个对象的代理，而 Object.defineProperty 只能代理某个属性

//Proxy
var target = {
    a:1,
    b:{
        c:2,
        d:{e:3}
    }
};
var handler =
    {
    //捕获器
    get:function(trapTarget,prop,receiver){
        console.log('触发get:',prop)
        return Reflect.get(trapTarget,prop) // 反射API // 只要在代理上调用，所有捕获器都会拦截它们对应的反射API操作
    },
    set:function(trapTarget,key,value,receiver){
        console.log('触发set:',key,value)
        return Reflect.set(trapTarget,key,value,receiver)
    }
};
const proxy = new Proxy(target,handler);
// 访问
proxy.b.c;// 触发get: b
proxy.b.d.e;// 触发get: b //说明都不能够遍历到深层次的地方，只能代理最外层属性
console.log(proxy);//{ a: 1, b: { c: 2, d: { e: 3 } } }

// Object.defineProperty
const obj = {}
Object.defineProperty(obj,'name',{
    value:'张三'
})
console.log(obj.name) // '张三'
obj.name = '李四' // 给obj.name赋新值
console.log(obj.name) // 张三  //默认writable为false，即不可改