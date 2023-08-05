const dinner = {
    meal:'tacos'
}

const handler = {
    //这里的key指的是访问的property
    get(target,key){
        return target[key]
    },
    set(target,key,value){
        target[key] = value
    }
}

const proxy = new Proxy(dinner,handler)

console.log('set之前',proxy.meal)

proxy.meal = 'changed'

console.log('set之后',proxy.meal)