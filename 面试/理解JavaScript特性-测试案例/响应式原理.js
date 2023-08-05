const obj1 = {
    text:'123'
}

function effect(){
    console.log(obj.text);
}

effect();

obj1.text = '222'; // 如果这行代码执行完，自动调用effect函数，那就实现了这个数据的响应式
effect();// 手动调用

const obj = new Proxy(data,{
    get(target,key){
    }
})
