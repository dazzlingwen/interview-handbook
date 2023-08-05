const dinner = {
    meal:'tacos',
    a:{
        b:[1,2,3],
        c:{
            d:'',
            e:''
        }
    }
}

function defineReactive(target,key,value) {
    //设置一个observer判断value类型
    //如果又是一个对象，那么再次调用defineReactive方法

    Object.defineProperty(target,key,{
        get(){
            return value
        },
        set(newValue){
            if(newValue !==value){
                value = newValue
                //更新视图层
            }
        }
    })
}

function observer(target){
    if(typeof target !== 'object'||target == null){
        return target
    }
    if(Array.isArray(target)){
        //拦截数组，给数组的方法进行了重写
        Object.setPrototypeOf(target,proto);
        //target.__proto__ = proto
        for (let i =0;i<target.length;i++){}
        observer(target[i]);
    }else{
        //是对象的话，就进行层层递归
        for (let key in target){
            defineReactive(target,key,target[key])
        }
    }
}
function defineReactive(target,key,value) {
    //递归遍历，继续拦截对象
    observer(value);
    Object.defineProperty((target,key,{
        get() {
            return value;
        },
        set(newValue) {
            if (newValue!==value){
                observer(newValue)
                // updateView 更新视图的方法
                value = newValue
            }
        }
    }))
}

for (let key in dinner){
    defineReactive(dinner,key,dinner[key])
}

console.log('set之前',dinner.meal) //set之前 tacos

dinner.meal = 'changed'

console.log('set之后',dinner.meal) //set之后 changed